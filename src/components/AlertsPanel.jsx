import React from "react";

export default function AlertsPanel({ alerts }) {
  if (!alerts.length) return null;
  return (
    <section className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-xl mb-6">
      <h4 className="font-bold text-yellow-900 mb-2">Alerts & Reminders</h4>
      <ul>
        {alerts.map((a, i) => (
          <li key={i} className="text-sm text-yellow-900 mb-1 flex items-center">
            <span className="mr-2">⚠️</span> {a}
          </li>
        ))}
      </ul>
    </section>
  );
}
