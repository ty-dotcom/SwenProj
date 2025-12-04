"use client";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

export default function ClientResourcesPage() {
  const { user } = useUser();
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchResources = async () => {

      try {
        setLoading(true);
        setError(null);

        // Use email to fetch resources instead of hardcoded ID
        const res = await fetch(`http://localhost:8000/api/client/resources`);
        
        if (!res.ok) {
          throw new Error(`Failed to fetch resources: ${res.status}`);
        }

        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Server did not return JSON");
        }

        const data = await res.json();
        setResources(data);
        console.log(data);
      } catch (err: any) {
        console.error("Error fetching resources:", err);
        setError(err.message || "Failed to load resources");
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  },[] );

  if (loading) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <p>Loading resources...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Your Resources</h1>
        <div style={{ 
          backgroundColor: "#fee", 
          border: "1px solid #fcc", 
          padding: "10px", 
          borderRadius: "5px",
          color: "#c00"
        }}>
          <strong>Error:</strong> {error}
        </div>
      </div>
    );
  }

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