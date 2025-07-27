import React from "react";
import { translations } from "../i18n";

export default function MissionSection({ lang, onStart }) {
  return (
    <section className="py-12 flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="flex-1 space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">{translations[lang].mission}</h1>
        <button
          onClick={onStart}
          className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-6 py-3 rounded-2xl shadow transition"
        >
          {translations[lang].getStarted}
        </button>
      </div>
      <div className="flex-1 flex justify-center md:justify-end">
        {/* Placeholder graphic */}
       <img
  src="./undraw_authentication_tbfc.svg"
  alt="Immigration illustration"
  className="w-72 h-72 object-contain"
/>

      </div>
    </section>
  );
}

