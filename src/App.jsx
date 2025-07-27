import React, { useState } from "react";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";

export default function App() {
  const [lang, setLang] = useState("en");
  const [page, setPage] = useState("login"); // Start at login!
  const [user, setUser] = useState(null);

  function handleLogin(user) {
    setUser(user);
    setPage("landing"); // After login, show landing
  }

  function handleStart() {
    setPage("dashboard"); // Show dashboard after CTA click
  }

  function handleLogout() {
    setUser(null);
    setPage("login");
  }

  // Show login if not logged in
  if (!user) {
    return <LoginPage onLogin={handleLogin} />;
  }

  // If user is logged in, show landing or dashboard
  if (page === "landing") {
    return (
      <LandingPage
        lang={lang}
        setLang={setLang}
        onStart={handleStart} // clicking "Get Started" goes to dashboard
      >
        <button onClick={handleLogout}>Logout</button>
      </LandingPage>
    );
  }

  // If user is logged in and on dashboard
  return (
    <>
      <button
        onClick={handleLogout}
        className="fixed top-4 right-4 z-50 bg-gray-800 text-white rounded px-3 py-1 text-xs"
      >
        Logout
      </button>
      <Dashboard role={user.role} setRole={() => {}} />
    </>
  );
}
