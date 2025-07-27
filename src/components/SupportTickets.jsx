import React, { useState } from "react";

const DUMMY_INITIAL_TICKETS = [
  {
    id: 1,
    subject: "Unable to upload my passport document",
    message: "Whenever I try to upload, I get an error. Please help.",
    status: "Open",
    created: "2025-07-27",
  },
  {
    id: 2,
    subject: "Need help with O-1 reference letter",
    message: "What should my recommender write about?",
    status: "Closed",
    created: "2025-07-24",
  },
];

export default function SupportTickets() {
  const [tickets, setTickets] = useState(DUMMY_INITIAL_TICKETS);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!subject.trim() || !message.trim()) return;
    setTickets([
      {
        id: Date.now(),
        subject,
        message,
        status: "Open",
        created: new Date().toISOString().slice(0,10),
      },
      ...tickets,
    ]);
    setSubject("");
    setMessage("");
    setShowForm(false);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 1500);
  }

  return (
    <section className="bg-white rounded-xl shadow p-5 my-6">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold text-lg">Support Tickets</h3>
        <button
          className="bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-700"
          onClick={() => setShowForm(f => !f)}
        >
          {showForm ? "Cancel" : "Raise New Ticket"}
        </button>
      </div>
      {success && (
        <div className="bg-green-50 border border-green-400 text-green-700 rounded p-2 mb-2 text-sm">
          Ticket raised successfully!
        </div>
      )}
      {showForm && (
        <form onSubmit={handleSubmit} className="mb-6 space-y-3">
          <div>
            <label className="block text-sm font-semibold mb-1">Subject</label>
            <input
              className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              value={subject}
              onChange={e => setSubject(e.target.value)}
              placeholder="Enter your issue"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Message</label>
            <textarea
              className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              rows={3}
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Describe your problem in detail"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded font-bold hover:bg-blue-700"
          >
            Submit Ticket
          </button>
        </form>
      )}
      <h4 className="font-semibold mb-2">Your Tickets</h4>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="text-left p-2">#</th>
              <th className="text-left p-2">Subject</th>
              <th className="text-left p-2">Status</th>
              <th className="text-left p-2">Created</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((t, i) => (
              <tr key={t.id} className="border-b last:border-none">
                <td className="p-2">{tickets.length - i}</td>
                <td className="p-2">{t.subject}</td>
                <td className="p-2">
                  <span className={`px-2 py-1 rounded text-xs
                    ${t.status === "Open"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-green-100 text-green-800"}`}>
                    {t.status}
                  </span>
                </td>
                <td className="p-2">{t.created}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {tickets.length === 0 && (
        <div className="text-gray-400 text-center my-6">No tickets yet.</div>
      )}
    </section>
  );
}

