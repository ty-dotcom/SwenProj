"use client";
import { useEffect, useState } from "react";

export default function ClientResourcesPage() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/resources/api/client/4/")
      .then((res) => res.json())
      .then((data) => setResources(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Resources</h1>

      {resources.length === 0 && <p>No resources found.</p>}

      {resources.map((res: any, index: number) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h3>{res.title}</h3>

          {res.fileUrl && (
            <a href={`http://localhost:8000${res.fileUrl}`} download>
              Download File
            </a>
          )}

          {res.link && (
            <p>
              <a href={res.link} target="_blank" rel="noopener noreferrer">
                Open Link
              </a>
            </p>
          )}

          <p>Uploaded: {new Date(res.uploadDate).toLocaleString()}</p>

          <hr />
        </div>
      ))}
    </div>
  );
}
