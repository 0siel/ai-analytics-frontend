import React from "react";
import { Routes, Route } from "react-router-dom";
import AIAnalyticsDemo from "./AIAnalyticsDemo";
import SoftwareProjectPitch from "./SoftwareProjectPitch";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AIAnalyticsDemo />} />
        <Route path="/ai-analytics" element={<AIAnalyticsDemo />} />
        <Route path="/work-with-me" element={<SoftwareProjectPitch />} />
      </Routes>
    </div>
  );
}
