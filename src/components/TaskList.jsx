import React from "react";

export default function TaskList({ tasks }) {
  return (
    <section className="bg-white rounded-xl shadow p-4 mb-6">
      <h3 className="font-semibold mb-2">Your Tasks</h3>
      <ul>
        {tasks.map((t, i) => (
          <li key={i} className="flex items-center py-2 border-b last:border-b-0">
            <span className={`w-3 h-3 mr-2 rounded-full ${t.status==="Done"?"bg-green-500":"bg-yellow-400"}`}></span>
            <span className="flex-1">{t.label}</span>
            <span className="text-xs text-gray-500">{t.status}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
