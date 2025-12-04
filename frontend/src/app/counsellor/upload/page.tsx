"use client";
import { useState } from "react";

export default function UploadResourcePage() {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleUpload = async () => {
    if (!title) {
      setMessage("Please enter a title.");
      return;
    }

    const formData = new FormData();
    if (file) formData.append("file", file);
    formData.append("title", title);
    formData.append("counsellorId", "3"); 
    formData.append("clientId", "4"); 

    const response = await fetch("http://localhost:8000/resources/api/upload/", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setMessage(data.message || "Upload completed.");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Upload Resource</h1>

      <input
        type="text"
        placeholder="Enter resource title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      <br /><br />

      <button onClick={handleUpload}>Upload Resource</button>

      {message && <p>{message}</p>}
    </div>
  );
}
