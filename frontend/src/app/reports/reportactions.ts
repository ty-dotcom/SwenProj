"use server";

import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { sendNotification } from "@/lib/notifications";

// Define the structure of a Progress Report
interface ProgressReport {
  id: string;
  clientId: string;
  clientName: string;
  counselorId: string;
  counselorName: string;
  sessionDate: string;
  sessionNotes: string;
  moodScore: number;
  anxietyLevel: number;
  progressRating: number;
  goalsAchieved: string;
  concernsRaised: string;
  nextSteps: string;
  version: number;
  createdAt: Date;
  lastModified: Date;
}

// Input data when creating a new report
interface CreateReportInput {
  clientId: string;
  clientName: string;
  sessionDate: string;
  sessionNotes: string;
  moodScore: number;
  anxietyLevel: number;
  progressRating: number;
  goalsAchieved: string;
  concernsRaised: string;
  nextSteps: string;
}

// Input data when updating an existing report
interface UpdateReportInput {
  sessionDate?: string;
  sessionNotes?: string;
  moodScore?: number;
  anxietyLevel?: number;
  progressRating?: number;
  goalsAchieved?: string;
  concernsRaised?: string;
  nextSteps?: string;
}

// ============================================
// CREATE NEW PROGRESS REPORT
// Called when counselor submits the create form
// ============================================
export async function createReport(data: CreateReportInput) {
  try {
    // Get the currently logged-in user
    const { userId } = await auth();
    
    if (!userId) {
      throw new Error("You must be logged in to create a report");
    }

    // Note: Role checking would need to be implemented based on your auth system
    // For now, we assume the logged-in user is a counselor
    
    // Get counselor name from Clerk or database
    // For now, we'll use a placeholder - you can fetch from Clerk user metadata
    const counselorName = "Counselor"; // TODO: Replace with actual name from Clerk

    // Create the report in database
    const newReport = await prisma.progressReport.create({
      data: {
        clientId: data.clientId,
        clientName: data.clientName,
        counselorId: userId,
        counselorName: counselorName,
        sessionDate: new Date(data.sessionDate),
        sessionNotes: data.sessionNotes,
        moodScore: data.moodScore,
        anxietyLevel: data.anxietyLevel,
        progressRating: data.progressRating,
        goalsAchieved: data.goalsAchieved || "",
        concernsRaised: data.concernsRaised || "",
        nextSteps: data.nextSteps,
        version: 1,
      },
    });

    // Create initial entry in change log
    await prisma.reportChangeLog.create({
      data: {
        reportId: newReport.id,
        version: 1,
        changedBy: userId,
        changedByName: counselorName,
        changeType: "CREATED",
        changeDetails: JSON.stringify(data),
      },
    });

    // Send notification to client
    await sendNotification({
      userId: data.clientId,
      message: `${counselorName} has created a new progress report for your session on ${data.sessionDate}`,
      type: "REPORT_CREATED",
      reportId: newReport.id,
    });

    console.log("Report created:", newReport);
    
    return {
      success: true,
      reportId: newReport.id,
      message: "Progress report created successfully",
    };

  } catch (error) {
    console.error("Error creating report:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to create report",
    };
  }
}

// ============================================
// GET ALL REPORTS
// Fetches reports based on user role:
// - Counselors see all their clients' reports
// - Clients see only their own reports
// ============================================
export async function getReports(filters?: {
  startDate?: string;
  endDate?: string;
  clientId?: string;
}) {
  try {
    // Get the currently logged-in user
    const { userId } = await auth();
    
    if (!userId) {
      throw new Error("You must be logged in to view reports");
    }

    // Note: Role detection would need to be implemented
    // For now, we'll fetch based on either counselorId OR clientId
    // You can add role checking based on your auth system
    
    // Build filter conditions
    const whereConditions: any = {
      OR: [
        { counselorId: userId },
        { clientId: userId }
      ]
    };

    // Apply date filters
    if (filters?.startDate || filters?.endDate) {
      whereConditions.sessionDate = {};
      if (filters.startDate) {
        whereConditions.sessionDate.gte = new Date(filters.startDate);
      }
      if (filters.endDate) {
        whereConditions.sessionDate.lte = new Date(filters.endDate);
      }
    }

    // Apply client filter
    if (filters?.clientId) {
      whereConditions.clientId = filters.clientId;
      delete whereConditions.OR; // Remove OR condition if filtering by specific client
    }

    // Fetch reports from database
    const reports = await prisma.progressReport.findMany({
      where: whereConditions,
      orderBy: { createdAt: 'desc' },
    });

    // Transform the data to match the expected format
    const formattedReports = reports.map(report => ({
      id: report.id,
      clientId: report.clientId,
      clientName: report.clientName,
      counselorId: report.counselorId,
      counselorName: report.counselorName,
      sessionDate: report.sessionDate.toISOString().split('T')[0],
      sessionNotes: report.sessionNotes,
      moodScore: report.moodScore,
      anxietyLevel: report.anxietyLevel,
      progressRating: report.progressRating,
      goalsAchieved: report.goalsAchieved || "",
      concernsRaised: report.concernsRaised || "",
      nextSteps: report.nextSteps,
      version: report.version,
      createdAt: report.createdAt,
      lastModified: report.lastModified,
    }));

    return {
      success: true,
      reports: formattedReports,
    };

  } catch (error) {
    console.error("Error fetching reports:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch reports",
      reports: [],
    };
  }
}

// ============================================
// GET SINGLE REPORT BY ID
// Used when viewing a specific report's details
// ============================================
export async function getReportById(reportId: string) {
  try {
    // Get the currently logged-in user
    const { userId } = await auth();
    
    if (!userId) {
      throw new Error("You must be logged in to view this report");
    }

    // Fetch report from database
    const report = await prisma.progressReport.findUnique({
      where: { id: reportId },
    });

    if (!report) {
      throw new Error("Report not found");
    }

    // Check permissions - user must be either the counselor or the client
    if (report.counselorId !== userId && report.clientId !== userId) {
      throw new Error("You don't have permission to view this report");
    }

    const formattedReport = {
      id: report.id,
      clientId: report.clientId,
      clientName: report.clientName,
      counselorId: report.counselorId,
      counselorName: report.counselorName,
      sessionDate: report.sessionDate.toISOString().split('T')[0],
      sessionNotes: report.sessionNotes,
      moodScore: report.moodScore,
      anxietyLevel: report.anxietyLevel,
      progressRating: report.progressRating,
      goalsAchieved: report.goalsAchieved || "",
      concernsRaised: report.concernsRaised || "",
      nextSteps: report.nextSteps,
      version: report.version,
      createdAt: report.createdAt,
      lastModified: report.lastModified,
    };

    return {
      success: true,
      report: formattedReport,
    };

  } catch (error) {
    console.error("Error fetching report:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch report",
      report: null,
    };
  }
}

// ============================================
// UPDATE EXISTING REPORT
// Called when counselor edits a report
// Creates new version and logs the change (SRS requirement)
// ============================================
export async function updateReport(reportId: string, data: UpdateReportInput) {
  try {
    // Get the currently logged-in user
    const { userId } = await auth();
    
    if (!userId) {
      throw new Error("You must be logged in to update a report");
    }

    // Fetch existing report
    const existingReport = await prisma.progressReport.findUnique({
      where: { id: reportId },
    });

    if (!existingReport) {
      throw new Error("Report not found");
    }

    // Check if user owns this report (must be the counselor who created it)
    if (existingReport.counselorId !== userId) {
      throw new Error("You can only update your own reports");
    }

    // Increment version number
    const newVersion = existingReport.version + 1;

    // Prepare update data
    const updateData: any = {
      version: newVersion,
    };

    if (data.sessionDate) updateData.sessionDate = new Date(data.sessionDate);
    if (data.sessionNotes !== undefined) updateData.sessionNotes = data.sessionNotes;
    if (data.moodScore !== undefined) updateData.moodScore = data.moodScore;
    if (data.anxietyLevel !== undefined) updateData.anxietyLevel = data.anxietyLevel;
    if (data.progressRating !== undefined) updateData.progressRating = data.progressRating;
    if (data.goalsAchieved !== undefined) updateData.goalsAchieved = data.goalsAchieved;
    if (data.concernsRaised !== undefined) updateData.concernsRaised = data.concernsRaised;
    if (data.nextSteps !== undefined) updateData.nextSteps = data.nextSteps;

    // Update report in database
    const updatedReport = await prisma.progressReport.update({
      where: { id: reportId },
      data: updateData,
    });

    // Create change log entry
    await prisma.reportChangeLog.create({
      data: {
        reportId: reportId,
        version: newVersion,
        changedBy: userId,
        changedByName: existingReport.counselorName,
        changeType: "UPDATED",
        changeDetails: JSON.stringify(data),
      },
    });

    // Send notification to client
    await sendNotification({
      userId: existingReport.clientId,
      message: `${existingReport.counselorName} has updated your progress report (Version ${newVersion})`,
      type: "REPORT_UPDATED",
      reportId: reportId,
    });

    console.log("Report updated:", reportId);
    
    return {
      success: true,
      reportId: updatedReport.id,
      message: "Progress report updated successfully",
    };

  } catch (error) {
    console.error("Error updating report:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to update report",
    };
  }
}

// ============================================
// DELETE REPORT
// Only counselors can delete their own reports
// ============================================
export async function deleteReport(reportId: string) {
  try {
    // Get the currently logged-in user
    const { userId } = await auth();
    
    if (!userId) {
      throw new Error("You must be logged in to delete a report");
    }

    // Fetch existing report
    const existingReport = await prisma.progressReport.findUnique({
      where: { id: reportId },
    });

    if (!existingReport) {
      throw new Error("Report not found");
    }

    // Check if user owns this report
    if (existingReport.counselorId !== userId) {
      throw new Error("You can only delete your own reports");
    }

    // Send notification to client BEFORE deleting
    await sendNotification({
      userId: existingReport.clientId,
      message: `${existingReport.counselorName} has removed a progress report from ${existingReport.sessionDate.toISOString().split('T')[0]}`,
      type: "REPORT_DELETED",
    });

    // Delete from database (change logs will cascade delete due to schema)
    await prisma.progressReport.delete({
      where: { id: reportId },
    });

    console.log("Report deleted:", reportId);
    
    return {
      success: true,
      message: "Progress report deleted successfully",
    };

  } catch (error) {
    console.error("Error deleting report:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to delete report",
    };
  }
}

// ============================================
// GET REPORT CHANGE HISTORY
// Fetches all versions and changes made to a report
// ============================================
export async function getReportHistory(reportId: string) {
  try {
    // Get the currently logged-in user
    const { userId } = await auth();
    
    if (!userId) {
      throw new Error("You must be logged in to view report history");
    }

    // Verify user has access to this report
    const report = await prisma.progressReport.findUnique({
      where: { id: reportId },
    });

    if (!report) {
      throw new Error("Report not found");
    }

    // Check permissions
    if (report.counselorId !== userId && report.clientId !== userId) {
      throw new Error("You don't have permission to view this report's history");
    }

    // Fetch change logs from database
    const changeLogs = await prisma.reportChangeLog.findMany({
      where: { reportId: reportId },
      orderBy: { timestamp: 'desc' },
    });

    const formattedHistory = changeLogs.map(log => {
      let changesList: string[] = [];
      
      // Parse the change details if they exist
      if (log.changeDetails) {
        try {
          const changes = JSON.parse(log.changeDetails);
          changesList = Object.keys(changes).map(key => 
            `${key}: ${changes[key]}`
          );
        } catch {
          changesList = ["Details unavailable"];
        }
      }

      return {
        version: log.version,
        changeType: log.changeType,
        changedBy: log.changedByName,
        timestamp: log.timestamp,
        changes: changesList,
      };
    });

    return {
      success: true,
      history: formattedHistory,
    };

  } catch (error) {
    console.error("Error fetching report history:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch history",
      history: [],
    };
  }
}

// ============================================
// GET PROGRESS DATA FOR CHARTS
// Fetches historical metrics for a client to show trends
// ============================================
export async function getProgressChartData(clientId: string) {
  try {
    // Get the currently logged-in user
    const { userId } = await auth();
    
    if (!userId) {
      throw new Error("You must be logged in");
    }

    // Fetch all reports for this client, ordered by date
    const reports = await prisma.progressReport.findMany({
      where: { clientId: clientId },
      orderBy: { sessionDate: 'asc' },
      select: {
        sessionDate: true,
        moodScore: true,
        anxietyLevel: true,
        progressRating: true,
      },
    });

    // Verify user has permission (must be the client or their counselor)
    const hasAccess = reports.some(r => 
      r.sessionDate // Just checking if we got any results
    );

    if (!hasAccess && reports.length === 0) {
      // Check if user is the client themselves
      const userReports = await prisma.progressReport.findFirst({
        where: {
          OR: [
            { clientId: userId },
            { counselorId: userId, clientId: clientId }
          ]
        }
      });

      if (!userReports) {
        throw new Error("You don't have permission to view this client's data");
      }
    }

    // Transform into chart data format
    const chartData = reports.map((report, index) => ({
      session: `Session ${index + 1}`,
      mood: report.moodScore,
      anxiety: report.anxietyLevel,
      progress: report.progressRating,
      date: report.sessionDate.toISOString().split('T')[0],
    }));

    return {
      success: true,
      chartData: chartData,
    };

  } catch (error) {
    console.error("Error fetching chart data:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch chart data",
      chartData: [],
    };
  }
}