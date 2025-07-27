import React from "react";

export default function QuickStartGuide() {
  return (
    <section className="my-12 flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1">
        <h2 className="text-lg font-bold mb-2">See How It Works (2 min)</h2>
        <p className="text-gray-600 mb-4">Watch our quick demo to learn how to apply, upload documents, and track your case—all in one place.</p>
        {/* Placeholder for video - you can swap with real YouTube/embed later */}
        <div className="w-full aspect-video bg-gray-300 flex items-center justify-center rounded-lg text-gray-700 text-xl font-bold">
          [ Video Coming Soon ]
        </div>
      </div>
      <div className="flex-1">
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Easy sign up with secure login</li>
          <li>Upload and manage all your documents</li>
          <li>Get instant AI-powered answers</li>
          <li>Track your status from draft to approval</li>
        </ul>
      </div>
    </section>
  );
}

