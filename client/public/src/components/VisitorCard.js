import React from "react";

function VisitorCard({ visitor, startFlow }) {
  return (
    <div style={{ padding: "15px", border: "2px solid #2ecc71", borderRadius: "8px", width: "150px", textAlign: "center" }}>
      <h3>{visitor.name}</h3>
      <p>Step: {visitor.step || "Idle"}</p>
      <button onClick={() => startFlow(visitor.id)}>Start Flow</button>
    </div>
  );
}

export default VisitorCard;
