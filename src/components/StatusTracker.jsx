import React from "react";

const STAGES = ["Draft", "Review", "Submission", "Approval"];

export default function StatusTracker({ currentStage = 1 }) {
  return (
    <div className="flex justify-between items-center py-4 px-2 bg-white rounded-xl shadow mb-6">
      {STAGES.map((stage, i) => (
        <div key={stage} className="flex flex-col items-center flex-1">
          <div className={`w-7 h-7 rounded-full flex items-center justify-center mb-1
            ${i<currentStage ? "bg-green-500 text-white" :
              i===currentStage ? "bg-blue-600 text-white" :
              "bg-gray-200 text-gray-400"}`}>
            {i<currentStage ? "✔" : i+1}
          </div>
          <span className={`text-xs ${i<=currentStage ? "font-bold text-blue-700" : "text-gray-400"}`}>{stage}</span>
          {i<STAGES.length-1 && (
            <div className="hidden md:block h-0.5 w-10 bg-gray-300 mt-1"/>
          )}
        </div>
      ))}
    </div>
  );
}
