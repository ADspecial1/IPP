import React from "react";
import { translations } from "../i18n";

export default function ProcessSteps({ lang }) {
  const steps = translations[lang].steps;
  return (
    <section className="py-8 bg-gray-50 rounded-xl my-8 mx-auto max-w-4xl shadow">
      <h2 className="text-xl font-bold text-center mb-6">{translations[lang].processTitle}</h2>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 px-4">
        {steps.map((s,i)=>(
          <div key={i} className="flex flex-col items-center flex-1">
            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-2">{i+1}</div>
            <span className="text-md text-gray-700 text-center">{s}</span>
            {i<steps.length-1 && (
              <div className="hidden md:block h-1 w-20 bg-gray-300 mx-2 mt-2"/>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
