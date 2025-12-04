"use client";

import { useUser } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Loader2, ArrowLeft, Edit, TrendingUp, Calendar, User } from "lucide-react";
import Button from "../../../../components/Button";
import Link from "next/link";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// ============================================
// THIS IS THE VIEW SINGLE REPORT PAGE
// Purpose: Shows the FULL DETAILS of ONE specific report
// - Counselors can view any report
// - Clients can only view their own reports
// - Shows all metrics, notes, and history
// - Displays visual charts of progress over time
// URL: /reports/[id] (e.g., /reports/report_123)
// ============================================

interface ProgressReport {
  id: string;
  clientId: string;
  clientName: string;
  counselorId: string;
  counselorName: string;
  date: Date;
  sessionNotes: string;
  metrics: {
    moodScore: number;
    anxietyLevel: number;
    progressRating: number;
  };
  goalsAchieved: string;
  concernsRaised: string;
  nextSteps: string;
  version: number;
  createdAt: Date;
  lastModified: Date;
}

export default function ViewReportPage() {
  // Get the report ID from the URL (the [id] part)
  const params = useParams();
  const reportId = params.id as string;
  
  // Get current user info
  const { user } = useUser();
  const router = useRouter();
  
  // Store the report data
  const [report, setReport] = useState<ProgressReport | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Check if user is a counselor
  const isCounselor = user?.publicMetadata?.role === "counselor";

  // Fetch the specific report when page loads
  useEffect(() => {
    const fetchReport = async () => {
      try {
        // Import the actions
        const { getReportById, getProgressChartData } = await import("../../actions");
        
        // Fetch the specific report using the ID from the URL
        const result = await getReportById(reportId);
        
        if (result.success && result.report) {
          // Transform the data to match our interface
          const transformedReport: ProgressReport = {
            id: result.report.id,
            clientId: result.report.clientId,
            clientName: result.report.clientName,
            counselorId: result.report.counselorId,
            counselorName: result.report.counselorName,
            date: new Date(result.report.sessionDate),
            sessionNotes: result.report.sessionNotes,
            metrics: {
              moodScore: result.report.moodScore,
              anxietyLevel: result.report.anxietyLevel,
              progressRating: result.report.progressRating,
            },
            goalsAchieved: result.report.goalsAchieved,
            concernsRaised: result.report.concernsRaised,
            nextSteps: result.report.nextSteps,
            version: result.report.version,
            createdAt: result.report.createdAt,
            lastModified: result.report.lastModified,
          };
          
          setReport(transformedReport);
        }
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching report:", error);
        setLoading(false);
      }
    };

    fetchReport();
  }, [reportId]);

  // Mock data for progress chart - shows trends over multiple sessions
  // TODO: Replace with actual historical data from database
  const chartData = [
    { session: "Session 1", mood: 4, anxiety: 8, progress: 3 },
    { session: "Session 2", mood: 5, anxiety: 7, progress: 4 },
    { session: "Session 3", mood: 6, anxiety: 6, progress: 6 },
    { session: "Session 4", mood: 7, anxiety: 4, progress: 8 },
  ];

  // Show loading spinner while fetching data
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  // Show error if report not found
  if (!report) {
    return (
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="rounded-lg bg-red-50 p-8 text-center">
          <h2 className="text-xl font-bold text-red-800">Report Not Found</h2>
          <p className="mt-2 text-red-600">
            The report you're looking for doesn't exist or you don't have permission to view it.
          </p>
          <Link href="/reports" className="mt-4 inline-block">
            <Button>Back to Reports</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      {/* ========== HEADER WITH BACK AND EDIT BUTTONS ========== */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/reports">
            <Button className="flex items-center gap-2">
              <ArrowLeft className="size-4" />
              Back
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold">Progress Report</h1>
            <p className="text-sm text-gray-500">
              Version {report.version} • Last updated: {report.lastModified.toLocaleDateString()}
            </p>
          </div>
        </div>
        
        {/* Only counselors can edit reports */}
        {isCounselor && (
          <Link href={`/reports/${report.id}/edit`}>
            <Button className="flex items-center gap-2">
              <Edit className="size-4" />
              Edit Report
            </Button>
          </Link>
        )}
      </div>

      {/* ========== REPORT METADATA ========== */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Client Info */}
        <div className="rounded-lg bg-blue-50 p-4">
          <div className="flex items-center gap-2 text-blue-700">
            <User className="size-5" />
            <span className="font-medium">Client</span>
          </div>
          <p className="mt-2 text-lg font-semibold text-gray-900">
            {isCounselor ? report.clientName : "Your Report"}
          </p>
        </div>

        {/* Counselor Info */}
        <div className="rounded-lg bg-green-50 p-4">
          <div className="flex items-center gap-2 text-green-700">
            <User className="size-5" />
            <span className="font-medium">Counselor</span>
          </div>
          <p className="mt-2 text-lg font-semibold text-gray-900">
            {report.counselorName}
          </p>
        </div>

        {/* Session Date */}
        <div className="rounded-lg bg-purple-50 p-4">
          <div className="flex items-center gap-2 text-purple-700">
            <Calendar className="size-5" />
            <span className="font-medium">Session Date</span>
          </div>
          <p className="mt-2 text-lg font-semibold text-gray-900">
            {report.date.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>

      {/* ========== METRICS CARDS ========== */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* Mood Score */}
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-700">Mood Score</h3>
            <TrendingUp className="size-5 text-green-500" />
          </div>
          <p className="mt-4 text-4xl font-bold text-blue-600">
            {report.metrics.moodScore}<span className="text-xl text-gray-400">/10</span>
          </p>
          <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
            <div
              className="h-2 rounded-full bg-blue-600"
              style={{ width: `${report.metrics.moodScore * 10}%` }}
            />
          </div>
        </div>

        {/* Anxiety Level */}
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-700">Anxiety Level</h3>
            <TrendingUp className="size-5 text-orange-500" />
          </div>
          <p className="mt-4 text-4xl font-bold text-orange-600">
            {report.metrics.anxietyLevel}<span className="text-xl text-gray-400">/10</span>
          </p>
          <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
            <div
              className="h-2 rounded-full bg-orange-600"
              style={{ width: `${report.metrics.anxietyLevel * 10}%` }}
            />
          </div>
        </div>

        {/* Progress Rating */}
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-700">Overall Progress</h3>
            <TrendingUp className="size-5 text-green-500" />
          </div>
          <p className="mt-4 text-4xl font-bold text-green-600">
            {report.metrics.progressRating}<span className="text-xl text-gray-400">/10</span>
          </p>
          <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
            <div
              className="h-2 rounded-full bg-green-600"
              style={{ width: `${report.metrics.progressRating * 10}%` }}
            />
          </div>
        </div>
      </div>

      {/* ========== PROGRESS CHART ========== */}
      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-bold">Progress Over Time</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="session" />
            <YAxis domain={[0, 10]} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="mood" stroke="#3b82f6" name="Mood" strokeWidth={2} />
            <Line type="monotone" dataKey="anxiety" stroke="#f97316" name="Anxiety" strokeWidth={2} />
            <Line type="monotone" dataKey="progress" stroke="#22c55e" name="Progress" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* ========== SESSION NOTES ========== */}
      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-bold">Session Notes</h2>
        <p className="whitespace-pre-wrap text-gray-700">{report.sessionNotes}</p>
      </div>

      {/* ========== GOALS, CONCERNS, NEXT STEPS ========== */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Goals Achieved */}
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h3 className="mb-3 text-lg font-bold text-green-700">Goals Achieved</h3>
          <p className="whitespace-pre-wrap text-gray-700">{report.goalsAchieved}</p>
        </div>

        {/* Concerns Raised */}
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h3 className="mb-3 text-lg font-bold text-orange-700">Concerns Raised</h3>
          <p className="whitespace-pre-wrap text-gray-700">{report.concernsRaised}</p>
        </div>

        {/* Next Steps */}
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h3 className="mb-3 text-lg font-bold text-blue-700">Next Steps</h3>
          <p className="whitespace-pre-wrap text-gray-700">{report.nextSteps}</p>
        </div>
      </div>

      {/* ========== REPORT HISTORY ========== */}
      <div className="rounded-lg border bg-gray-50 p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-bold">Report History</h2>
        <div className="space-y-2 text-sm text-gray-600">
          <p>
            <span className="font-medium">Created:</span>{" "}
            {report.createdAt.toLocaleString()} by {report.counselorName}
          </p>
          <p>
            <span className="font-medium">Last Modified:</span>{" "}
            {report.lastModified.toLocaleString()} by {report.counselorName}
          </p>
          <p>
            <span className="font-medium">Version:</span> {report.version}
          </p>
        </div>
      </div>
    </div>
  );
}