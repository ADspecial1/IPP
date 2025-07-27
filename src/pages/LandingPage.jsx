import React from "react";
import Header from "../components/Header";
import MissionSection from "../components/MissionSection";
import ProcessSteps from "../components/ProcessSteps";
import NewsFeed from "../components/NewsFeed";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import FAQSection from "../components/FAQSection";
import QuickStartGuide from "../components/QuickStartGuide";
import ContactSection from "../components/ContactSection";

export default function LandingPage({ lang, setLang, onStart }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header lang={lang} setLang={setLang} />
      <main className="flex-1 px-4 md:px-10">
        <MissionSection lang={lang} onStart={onStart} />
        <ProcessSteps lang={lang} />
        <NewsFeed lang={lang} />
        <Testimonials lang={lang} />
        <FAQSection lang={lang} />  
        <QuickStartGuide lang={lang} /> 
        <ContactSection lang={lang} />
      </main>
      <Footer />
    </div>
  );
}
