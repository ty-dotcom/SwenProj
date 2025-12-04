"use client";
import { useState } from "react";
import axios from 'axios';

export default function UploadResourcePage() {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [desc, setdesc] = useState("");
  const [message, setMessage] = useState("");

  const handleUpload = async () => {
    if (!title) {
      setMessage("Please enter a title.");
      return;
    }

    const formData = new FormData();
    if (file) formData.append("file", file);
    formData.append("title", title);
    formData.append("description",desc);
    const url ="http://localhost:8000/api/upload/"

    const response = await axios.post("http://localhost:8000/api/upload/",
      
      
      formData
    );

    const data = await response.data
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
        type="text"
        placeholder="Enter resource description"
        value={desc}
        onChange={(e) => setdesc(e.target.value)}
      />
      <br /><br />


      <input
      accept=".pdf, .doc, .docx, .jpeg, .jpg, .png, .mp3, .mp4, .xxsl, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, image/jpeg, image/png, audio/mpeg, video/mp4"
        type="file"

        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      <br /><br />

      <button onClick={handleUpload}>Upload Resource</button>

      {message && <p>{message}</p>}
    </div>
  );
}
