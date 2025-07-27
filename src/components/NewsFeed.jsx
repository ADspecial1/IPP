import React from "react";
import { translations } from "../i18n";

const news = [
  {
    title: "USCIS releases new visa bulletin for July 2025",
    date: "2025-07-05",
    summary: "Check the latest priority dates and eligibility updates.",
  },
  {
    title: "DHS announces digital signature pilot",
    date: "2025-06-25",
    summary: "E-filing expansion project for employment visas.",
  },
  {
    title: "H-1B lottery results published",
    date: "2025-06-12",
    summary: "Learn about next steps for selected applicants.",
  },
];

export default function NewsFeed({ lang }) {
  return (
    <section className="my-10">
      <h2 className="text-lg font-bold mb-4">{translations[lang].newsTitle}</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {news.map((item, i) => (
          <article key={i} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-blue-700 mb-1">{item.title}</h3>
            <time className="block text-xs text-gray-500 mb-2">{item.date}</time>
            <p className="text-sm text-gray-600">{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
