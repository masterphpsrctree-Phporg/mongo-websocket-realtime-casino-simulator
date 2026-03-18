import React from "react";

function FlowDiagram({ visitors }) {
  const steps = ["Visitor", "Cloudflare", "Server", "Database"];
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
      {steps.map((step, idx) => (
        <div key={idx} style={{ margin: "0 20px", textAlign: "center" }}>
          <div style={{
            padding: "20px",
            border: "3px solid #3498db",
            borderRadius: "8px",
            backgroundColor: visitors.some(v => v.step === step) ? "#ffe5d0" : "#fff",
            transition: "all 0.3s"
          }}>
            {step}
          </div>
          <p style={{ fontSize: "24px" }}>➡️</p>
        </div>
      ))}
    </div>
  );
}

export default FlowDiagram;
