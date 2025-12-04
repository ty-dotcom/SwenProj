"use client";

import { useUser } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Loader2, Save, ArrowLeft } from "lucide-react";
import Button from "../../../../../components/Button";
import Link from "next/link";

// ============================================
// THIS IS THE EDIT EXISTING REPORT PAGE
// Purpose: Allows counselors to UPDATE an existing report
// - Only counselors can access this page
// - Pre-fills the form with existing report data
// - Saves changes and updates version number
// - Maintains change log (as per SRS requirement)
// URL: /reports/[id]/edit (e.g., /reports/report_123/edit)
// ============================================

export default function EditReportPage() {
  // Get the report ID from the URL
  const params = useParams();
  const reportId = params.id as string;
  
  // Get current user and router
  const { user } = useUser();
  const router = useRouter();
  
  // Track loading states
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  
  // Store the form data (starts empty, gets filled when report loads)
  const [formData, setFormData] = useState({
    clientId: "",
    sessionDate: "",
    sessionNotes: "",
    moodScore: 5,
    anxietyLevel: 5,
    progressRating: 5,
    goalsAchieved: "",
    concernsRaised: "",
    nextSteps: "",
  });

  // Check if user is a counselor (only counselors can edit)
  const isCounselor = user?.publicMetadata?.role === "counselor";

  // Fetch the existing report data when page loads
  useEffect(() => {
    const fetchReport = async () => {
      try {
        // Import the action
        const { getReportById } = await import("../../../actions");
        
        // Fetch the report
        const result = await getReportById(reportId);
        
        if (result.success && result.report) {
          // Fill the form with existing data
          setFormData({
            clientId: result.report.clientId,
            sessionDate: result.report.sessionDate,
            sessionNotes: result.report.sessionNotes,
            moodScore: result.report.moodScore,
            anxietyLevel: result.report.anxietyLevel,
            progressRating: result.report.progressRating,
            goalsAchieved: result.report.goalsAchieved,
            concernsRaised: result.report.concernsRaised,
            nextSteps: result.report.nextSteps,
          });
        } else {
          alert("Failed to load report. Please try again.");
          router.push("/reports");
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching report:", error);
        alert("Failed to load report. Please try again.");
        router.push("/reports");
      }
    };

    // Only fetch if user is a counselor
    if (isCounselor) {
      fetchReport();
    } else {
      // Redirect non-counselors back to reports list
      alert("Only counselors can edit reports.");
      router.push("/reports");
    }
  }, [reportId, isCounselor, router]);

  // Handle form submission (save changes)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      // Import the update action
      const { updateReport } = await import("../../../actions");
      
      // Prepare the updated data
      const updatedData = {
        sessionDate: formData.sessionDate,
        sessionNotes: formData.sessionNotes,
        moodScore: formData.moodScore,
        anxietyLevel: formData.anxietyLevel,
        progressRating: formData.progressRating,
        goalsAchieved: formData.goalsAchieved,
        concernsRaised: formData.concernsRaised,
        nextSteps: formData.nextSteps,
      };

      // Call the server action to update the report
      const result = await updateReport(reportId, updatedData);
      
      if (result.success) {
        // Show success message (SRS requirement: confirmation after update)
        alert("Progress report updated successfully! The client has been notified.");
        
        // Navigate back to view the updated report
        router.push(`/reports/${reportId}`);
      } else {
        // Show error message if update failed
        alert(result.error || "Failed to update report. Please try again.");
      }
    } catch (error) {
      console.error("Error updating report:", error);
      alert("Failed to update report. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  // Update form data when user types in any field
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Show loading spinner while fetching report data
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      {/* ========== PAGE HEADER ========== */}
      <div className="flex items-center gap-4">
        <Link href={`/reports/${reportId}`}>
          <Button className="flex items-center gap-2">
            <ArrowLeft className="size-4" />
            Back
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Edit Progress Report</h1>
          <p className="text-sm text-gray-500">
            Changes will create a new version and notify the client
          </p>
        </div>
      </div>

      {/* ========== EDIT FORM ========== */}
      <form onSubmit={handleSubmit} className="space-y-6 rounded-lg bg-white p-8 shadow-md">
        
        {/* ========== CLIENT SELECTION (DISABLED - CAN'T CHANGE CLIENT) ========== */}
        <div className="space-y-2">
          <label htmlFor="clientId" className="block font-medium text-gray-700">
            Client
          </label>
          <select
            id="clientId"
            name="clientId"
            value={formData.clientId}
            disabled // Can't change which client the report is for
            className="w-full rounded-md border border-gray-300 bg-gray-100 p-2 text-gray-600"
          >
            <option value="client_123">John Doe</option>
            <option value="client_456">Jane Smith</option>
            <option value="client_789">Mike Johnson</option>
          </select>
          <p className="text-xs text-gray-500">Client cannot be changed after report creation</p>
        </div>

        {/* ========== SESSION DATE ========== */}
        <div className="space-y-2">
          <label htmlFor="sessionDate" className="block font-medium text-gray-700">
            Session Date *
          </label>
          <input
            type="date"
            id="sessionDate"
            name="sessionDate"
            value={formData.sessionDate}
            onChange={handleChange}
            required
            max={new Date().toISOString().split("T")[0]}
            className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* ========== SESSION NOTES ========== */}
        <div className="space-y-2">
          <label htmlFor="sessionNotes" className="block font-medium text-gray-700">
            Session Notes *
          </label>
          <textarea
            id="sessionNotes"
            name="sessionNotes"
            value={formData.sessionNotes}
            onChange={handleChange}
            required
            rows={6}
            placeholder="Describe the session, client's current state, topics discussed, and observations..."
            className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* ========== METRICS SLIDERS ========== */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Mood Score */}
          <div className="space-y-2">
            <label htmlFor="moodScore" className="block font-medium text-gray-700">
              Mood Score: {formData.moodScore}/10
            </label>
            <input
              type="range"
              id="moodScore"
              name="moodScore"
              min="1"
              max="10"
              value={formData.moodScore}
              onChange={handleChange}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>Low</span>
              <span>High</span>
            </div>
          </div>

          {/* Anxiety Level */}
          <div className="space-y-2">
            <label htmlFor="anxietyLevel" className="block font-medium text-gray-700">
              Anxiety Level: {formData.anxietyLevel}/10
            </label>
            <input
              type="range"
              id="anxietyLevel"
              name="anxietyLevel"
              min="1"
              max="10"
              value={formData.anxietyLevel}
              onChange={handleChange}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>Low</span>
              <span>High</span>
            </div>
          </div>

          {/* Progress Rating */}
          <div className="space-y-2">
            <label htmlFor="progressRating" className="block font-medium text-gray-700">
              Progress Rating: {formData.progressRating}/10
            </label>
            <input
              type="range"
              id="progressRating"
              name="progressRating"
              min="1"
              max="10"
              value={formData.progressRating}
              onChange={handleChange}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>Low</span>
              <span>High</span>
            </div>
          </div>
        </div>

        {/* ========== GOALS ACHIEVED ========== */}
        <div className="space-y-2">
          <label htmlFor="goalsAchieved" className="block font-medium text-gray-700">
            Goals Achieved
          </label>
          <textarea
            id="goalsAchieved"
            name="goalsAchieved"
            value={formData.goalsAchieved}
            onChange={handleChange}
            rows={3}
            placeholder="List any goals the client has achieved since the last session..."
            className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* ========== CONCERNS RAISED ========== */}
        <div className="space-y-2">
          <label htmlFor="concernsRaised" className="block font-medium text-gray-700">
            Concerns Raised
          </label>
          <textarea
            id="concernsRaised"
            name="concernsRaised"
            value={formData.concernsRaised}
            onChange={handleChange}
            rows={3}
            placeholder="Note any concerns or challenges discussed during the session..."
            className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* ========== NEXT STEPS ========== */}
        <div className="space-y-2">
          <label htmlFor="nextSteps" className="block font-medium text-gray-700">
            Next Steps *
          </label>
          <textarea
            id="nextSteps"
            name="nextSteps"
            value={formData.nextSteps}
            onChange={handleChange}
            required
            rows={3}
            placeholder="Outline recommended actions and focus areas for the next session..."
            className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* ========== WARNING NOTICE ========== */}
        <div className="rounded-lg bg-yellow-50 p-4 border border-yellow-200">
          <p className="text-sm text-yellow-800">
            <strong>Note:</strong> Updating this report will:
          </p>
          <ul className="mt-2 ml-5 list-disc text-sm text-yellow-700">
            <li>Create a new version (previous versions are saved in change log)</li>
            <li>Update the "Last Modified" timestamp</li>
            <li>Send a notification to the client</li>
            <li>Automatically refresh the client's dashboard</li>
          </ul>
        </div>

        {/* ========== SUBMIT BUTTONS ========== */}
        <div className="flex justify-end gap-3">
          {/* Cancel - go back to view page */}
          <Link href={`/reports/${reportId}`}>
            <Button type="button" className="bg-gray-300 text-black hover:bg-gray-400">
              Cancel
            </Button>
          </Link>
          
          {/* Save Changes button */}
          <Button
            type="submit"
            disabled={saving}
            className="flex items-center gap-2"
          >
            {saving ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Saving Changes...
              </>
            ) : (
              <>
                <Save className="size-4" />
                Save Changes
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}