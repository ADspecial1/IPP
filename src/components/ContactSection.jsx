import React from "react";

export default function ContactSection() {
  return (
    <section className="py-8 bg-blue-50 mt-8 text-center rounded-xl">
      <h2 className="text-lg font-bold mb-3">Need Help?</h2>
      <p className="mb-3 text-gray-700">Our team is here to answer your questions.</p>
      <a href="mailto:support@immigrationplatform.com"
         className="inline-block bg-blue-600 text-white font-bold px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">
        Email Support
      </a>
      <div className="mt-2 text-xs text-gray-400">Mon–Fri 9am–6pm US/Eastern</div>
    </section>
  );
}
