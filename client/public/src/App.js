import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import FlowDiagram from "./components/FlowDiagram";
import VisitorCard from "./components/VisitorCard";

const socket = io("http://localhost:5000"); // Change for production backend URL

function App() {
  const [visitors, setVisitors] = useState([
    { id: 1, name: "Visitor A", step: null },
    { id: 2, name: "Visitor B", step: null },
    { id: 3, name: "Visitor C", step: null },
  ]);

  useEffect(() => {
    socket.on("update", ({ visitorId, step }) => {
      setVisitors(prev =>
        prev.map(v => v.id === visitorId ? { ...v, step } : v)
      );
    });

    return () => socket.off();
  }, []);

  const startFlow = visitorId => socket.emit("startFlow", { visitorId });

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Casino Visitor Flow Simulator</h1>
      <FlowDiagram visitors={visitors} />
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {visitors.map(v => (
          <VisitorCard key={v.id} visitor={v} startFlow={startFlow} />
        ))}
      </div>
    </div>
  );
}

export default App;
