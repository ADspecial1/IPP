import React from "react";

const testimonials = [
  {
    name: "Aysel T.",
    role: "H-1B Applicant",
    quote: "The platform made my US visa process easy. The AI assistant clarified every question I had. Highly recommended!"
  },
  {
    name: "John K.",
    role: "Immigration Attorney",
    quote: "The workflow and document management save our team hours every week. Clients love the transparency."
  },
  {
    name: "Emre G.",
    role: "Startup Founder",
    quote: "From Turkey to Silicon Valley—the support and reminders helped me never miss a deadline."
  },
];

export default function Testimonials({ lang }) {
  return (
    <section className="my-12">
      <h2 className="text-lg font-bold mb-4 text-center">Success Stories</h2>
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {testimonials.map((t, i) => (
          <blockquote key={i} className="bg-blue-50 rounded-xl p-6 shadow flex-1 max-w-sm mx-auto">
            <p className="italic text-gray-700 mb-3">“{t.quote}”</p>
            <div className="text-right text-blue-800 font-semibold">{t.name}</div>
            <div className="text-xs text-blue-600">{t.role}</div>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
