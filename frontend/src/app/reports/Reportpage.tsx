"use client";

import { useUser } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { Loader2, Plus, Edit, Eye, TrendingUp } from "lucide-react";
import Button from "../../components/Button";
import Link from "next/link";

// ============================================
// THIS IS THE MAIN REPORTS LIST PAGE
// Purpose: Shows ALL existing reports in a list
// - Counselors see all their clients' reports
// - Clients see only their own reports
// Think of this like your email inbox - shows all messages
// ============================================

// Define what data structure a progress report has
interface ProgressReport {
  id: string;
  clientId: string;
  clientName: string;
  date: Date;
  content: string;
  metrics: {
    moodScore: number;
    anxietyLevel: number;
    progressRating: number;
  };
  version: number;
  lastModified: Date;
}

export default function ReportsPage() {
  // Get the current logged-in user's information
  const { user } = useUser();
  
  // State to store the list of all reports
  const [reports, setReports] = useState<ProgressReport[]>([]);
  
  // State to show loading spinner while fetching data
  const [loading, setLoading] = useState(true);
  
  // State to track which time filter is active (all/week/month)
  const [filter, setFilter] = useState<string>("all");

  // Check if the logged-in user is a counselor (not a client)
  // This determines what they can see and do
  const isCounselor = user?.publicMetadata?.role === "counselor";

  // useEffect runs when the component loads to fetch reports from database
  useEffect(() => {
    // Function to get all reports from the database
    const fetchReports = async () => {
      try {
        // Import the getReports action at the top of your file
        const { getReports } = await import("./actions");
        
        // Call the server action to get reports
        const result = await getReports();
        
        if (result.success && result.reports) {
          // Transform the data to match our interface
          const transformedReports = result.reports.map(report => ({
            id: report.id,
            clientId: report.clientId,
            clientName: report.clientName,
            date: new Date(report.sessionDate),
            content: report.sessionNotes,
            metrics: {
              moodScore: report.moodScore,
              anxietyLevel: report.anxietyLevel,
              progressRating: report.progressRating,
            },
            version: report.version,
            lastModified: report.lastModified,
          }));
          
          setReports(transformedReports);
        }
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching reports:", error);
        setLoading(false);
      }
    };

    fetchReports();
  }, [user]);

  // Filter the reports based on the selected time period
  const filteredReports = reports.filter((report) => {
    // If "all" is selected, show everything
    if (filter === "all") return true;
    
    // Calculate how many days ago the report was created
    const date = new Date(report.date);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // Show only reports from the past week or month
    if (filter === "week") return diffDays <= 7;
    if (filter === "month") return diffDays <= 30;
    return true;
  });

  // Show loading spinner while data is being fetched
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      {/* ========== HEADER SECTION ========== */}
      {/* Shows page title and "Create New Report" button (counselors only) */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Progress Reports</h1>
        {/* Only counselors can create new reports */}
        {isCounselor && (
          <Link href="/reports/create">
            <Button className="flex items-center gap-2">
              <Plus className="size-5" />
              Create New Report
            </Button>
          </Link>
        )}
      </div>

      {/* ========== FILTER BUTTONS ========== */}
      {/* Let users filter reports by time period */}
      <div className="flex gap-3">
        <button
          onClick={() => setFilter("all")}
          className={`rounded-md px-4 py-2 ${
            filter === "all"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
        >
          All Reports
        </button>
        <button
          onClick={() => setFilter("week")}
          className={`rounded-md px-4 py-2 ${
            filter === "week"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
        >
          Past Week
        </button>
        <button
          onClick={() => setFilter("month")}
          className={`rounded-md px-4 py-2 ${
            filter === "month"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
        >
          Past Month
        </button>
      </div>

      {/* ========== REPORTS LIST ========== */}
      {/* Show message if no reports exist, otherwise show the list */}
      {filteredReports.length === 0 ? (
        <div className="rounded-lg bg-gray-100 p-8 text-center">
          <p className="text-gray-600">No progress reports found.</p>
          {isCounselor && (
            <p className="mt-2 text-sm text-gray-500">
              Create your first report to start tracking client progress.
            </p>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          {/* Loop through each report and display it as a card */}
          {filteredReports.map((report) => (
            <div
              key={report.id}
              className="rounded-lg border bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                {/* Left side: Report information */}
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {/* Counselors see client name, clients see "Your Progress Report" */}
                      {isCounselor ? report.clientName : "Your Progress Report"}
                    </h3>
                    {/* Show version number to track report updates */}
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                      v{report.version}
                    </span>
                  </div>
                  {/* Show when report was created and last modified */}
                  <p className="mt-1 text-sm text-gray-500">
                    Created: {report.date.toLocaleDateString()} | Last
                    modified: {report.lastModified.toLocaleDateString()}
                  </p>
                  {/* Show preview of report content (limited to 2 lines) */}
                  <p className="mt-3 text-gray-700 line-clamp-2">
                    {report.content}
                  </p>

                  {/* ========== METRICS DISPLAY ========== */}
                  {/* Show the scores from the report */}
                  <div className="mt-4 flex gap-6">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="size-4 text-green-500" />
                      <span className="text-sm">
                        Progress: {report.metrics.progressRating}/10
                      </span>
                    </div>
                    <div className="text-sm">
                      Mood: {report.metrics.moodScore}/10
                    </div>
                    <div className="text-sm">
                      Anxiety: {report.metrics.anxietyLevel}/10
                    </div>
                  </div>
                </div>

                {/* ========== ACTION BUTTONS ========== */}
                {/* Right side: View and Edit buttons */}
                <div className="flex gap-2">
                  {/* Everyone can VIEW reports */}
                  <Link href={`/reports/${report.id}`}>
                    <Button className="flex items-center gap-2" title="View Report">
                      <Eye className="size-4" />
                      View
                    </Button>
                  </Link>
                  {/* Only counselors can EDIT reports */}
                  {isCounselor && (
                    <Link href={`/reports/${report.id}/edit`}>
                      <Button className="flex items-center gap-2" title="Edit Report">
                        <Edit className="size-4" />
                        Edit
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}