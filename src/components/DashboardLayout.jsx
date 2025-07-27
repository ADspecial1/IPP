import React from "react";
import ChatbotSidebar from "./ChatbotSidebar";
import Footer from "./Footer";

export default function DashboardLayout({ children, role, setRole }) {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="w-full bg-blue-600 text-white flex items-center justify-between px-6 py-3 shadow">
        <span className="text-lg font-bold tracking-tight">Dashboard</span>
        <div>
          <label className="mr-2 text-sm">Role:</label>
          <select
            value={role}
            onChange={e=>setRole(e.target.value)}
            className="text-gray-800 px-2 py-1 rounded"
          >
            <option>Applicant</option>
            <option>Paralegal</option>
            <option>Attorney</option>
            <option>Admin</option>
          </select>
        </div>
      </nav>
      <div className="flex-1 flex flex-col md:flex-row bg-gray-50">
        <main className="flex-1 p-6 max-w-5xl mx-auto">{children}</main>
        <aside className="w-full md:w-96 border-l bg-white shadow-inner">
          <ChatbotSidebar />
        </aside>
      </div>
      <Footer />
    </div>
  );
}
