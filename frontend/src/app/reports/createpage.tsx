"use client";

import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Save, ArrowLeft } from "lucide-react";
import Button from "../../components/Button";
import Link from "next/link";

// ============================================
// THIS IS THE CREATE NEW REPORT PAGE
// Purpose: Form for counselors to CREATE a brand NEW report
// - This is separate from the list page
// - Like "Compose Email" vs "Email Inbox"
// - Only counselors can access this page
// ============================================

export default function CreateReportPage() {
  // Get current logged-in user info
  const { user } = useUser();
  
  // useRouter lets us navigate to different pages after saving
  const router = useRouter();
  
  // Track if we're currently saving the report
  const [loading, setLoading] = useState(false);
  
  // Store all the form data the counselor enters
  // This is the "state" of the form
  const [formData, setFormData] = useState({
    clientId: "",              // Which client is this report for?
    sessionDate: "",           // When did the session happen?
    sessionNotes: "",          // Main notes from the session
    moodScore: 5,              // Client's mood rating (1-10)
    anxietyLevel: 5,           // Client's anxiety rating (1-10)
    progressRating: 5,         // Overall progress rating (1-10)
    goalsAchieved: "",         // What goals did client accomplish?
    concernsRaised: "",        // Any concerns discussed?
    nextSteps: "",             // What to focus on next session
  });

  // This function runs when the counselor submits the form
  const handleSubmit = async (e: React.FormEvent) => {
    // Prevent the page from refreshing (default form behavior)
    e.preventDefault();
    
    // Show loading state while saving
    setLoading(true);

    try {
      // Import the createReport action
      const { createReport } = await import("../actions");
      
      // Prepare the report data to save
      const reportData = {
        clientId: formData.clientId,
        sessionDate: formData.sessionDate,
        sessionNotes: formData.sessionNotes,
        moodScore: formData.moodScore,
        anxietyLevel: formData.anxietyLevel,
        progressRating: formData.progressRating,
        goalsAchieved: formData.goalsAchieved,
        concernsRaised: formData.concernsRaised,
        nextSteps: formData.nextSteps,
      };

      // Call the server action to create the report
      const result = await createReport(reportData);
      
      if (result.success) {
        // Show success message (SRS requirement: confirmation after create)
        alert("Progress report created successfully! The client has been notified.");
        
        // Navigate back to the reports list page
        router.push("/reports");
      } else {
        // Show error message if creation failed
        alert(result.error || "Failed to create report. Please try again.");
      }
    } catch (error) {
      console.error("Error creating report:", error);
      alert("Failed to create report. Please try again.");
    } finally {
      // Always turn off loading state, even if there's an error
      setLoading(false);
    }
  };

  // This function updates formData whenever user types in any field
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    // Update only the field that changed, keep everything else the same
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Show loading spinner if user data hasn't loaded yet
  if (!user) {
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
        {/* Back button to return to reports list */}
        <Link href="/reports">
          <Button className="flex items-center gap-2">
            <ArrowLeft className="size-4" />
            Back
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Create Progress Report</h1>
      </div>

      {/* ========== THE FORM ========== */}
      {/* When submitted, calls handleSubmit function */}
      <form onSubmit={handleSubmit} className="space-y-6 rounded-lg bg-white p-8 shadow-md">
        
        {/* ========== CLIENT SELECTION ========== */}
        <div className="space-y-2">
          <label htmlFor="clientId" className="block font-medium text-gray-700">
            Select Client *
          </label>
          <select
            id="clientId"
            name="clientId"
            value={formData.clientId}
            onChange={handleChange}
            required // Must select a client before submitting
            className="w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          >
            <option value="">-- Select a client --</option>
            {/* TODO: Replace with actual client list from database */}
            <option value="client_123">John Doe</option>
            <option value="client_456">Jane Smith</option>
            <option value="client_789">Mike Johnson</option>
          </select>
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
            max={new Date().toISOString().split("T")[0]} // Can't select future dates
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

        {/* ========== METRICS SECTION ========== */}
        {/* Three sliders side-by-side for rating different aspects */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          
          {/* MOOD SCORE SLIDER */}
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

          {/* ANXIETY LEVEL SLIDER */}
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

          {/* PROGRESS RATING SLIDER */}
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

        {/* ========== SUBMIT BUTTONS ========== */}
        <div className="flex justify-end gap-3">
          {/* Cancel button - goes back to reports list */}
          <Link href="/reports">
            <Button type="button" className="bg-gray-300 text-black hover:bg-gray-400">
              Cancel
            </Button>
          </Link>
          {/* Submit button - saves the report */}
          <Button
            type="submit"
            disabled={loading} // Disable while saving to prevent double-submit
            className="flex items-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Creating...
              </>
            ) : (
              <>
                <Save className="size-4" />
                Create Report
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}