import React from "react";
import { translations } from "../i18n";

export default function Header({ lang, setLang }) {
  return (
    <header className="w-full flex justify-between items-center py-4 px-6 bg-white shadow">
      <span className="font-bold text-2xl text-blue-700 tracking-tight">
        {translations[lang].appName}
      </span>
      <nav>
        <button
          className={`mr-2 font-semibold ${lang==="en"?"text-blue-600":"text-gray-400"}`}
          aria-pressed={lang==="en"}
          onClick={()=>setLang("en")}
        >EN</button>
        <button
          className={`font-semibold ${lang==="tr"?"text-blue-600":"text-gray-400"}`}
          aria-pressed={lang==="tr"}
          onClick={()=>setLang("tr")}
        >TR</button>
      </nav>
    </header>
  );
}

