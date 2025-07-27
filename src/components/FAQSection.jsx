import React from "react";

const faqs = [
  {
    q: "How do I track my case?",
    a: "After logging in, go to your dashboard to see your application status and upcoming steps."
  },
  {
    q: "Is my data secure?",
    a: "Yes, we use industry-standard encryption, US data residency, and multi-factor authentication."
  },
  {
    q: "Can attorneys and paralegals collaborate on a case?",
    a: "Yes, legal teams can assign tasks, review documents, and chat securely within the platform."
  }
];

export default function FAQSection({ lang }) {
  return (
    <section className="my-12 max-w-3xl mx-auto">
      <h2 className="text-lg font-bold mb-4 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <details key={i} className="bg-white border rounded-xl p-4 shadow group">
            <summary className="font-semibold cursor-pointer group-open:text-blue-600">{faq.q}</summary>
            <div className="mt-2 text-gray-700">{faq.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
