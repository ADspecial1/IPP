import React, { useState } from "react";

const DUMMY_USERS = [
  { email: "applicant@example.com", password: "pass123", role: "Applicant" },
  { email: "paralegal@example.com", password: "pass123", role: "Paralegal" },
  { email: "attorney@example.com", password: "pass123", role: "Attorney" },
  { email: "admin@example.com", password: "pass123", role: "Admin" },
];

// Default to the first dummy user
const DEFAULT_EMAIL = DUMMY_USERS[0].email;
const DEFAULT_PASS = DUMMY_USERS[0].password;

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState(DEFAULT_EMAIL);
  const [password, setPassword] = useState(DEFAULT_PASS);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const user = DUMMY_USERS.find(u => u.email === email && u.password === password);
    if (user) {
      setError("");
      onLogin(user);
    } else {
      setError("Invalid credentials. Try applicant@example.com / pass123 etc.");
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-blue-50 px-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow max-w-md w-full space-y-6">
        <h2 className="text-2xl font-bold text-blue-700 text-center">Sign In</h2>
        <div>
          <label className="block text-sm font-semibold mb-1" htmlFor="email">Email</label>
          <input
            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            type="email"
            id="email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            autoComplete="username"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1" htmlFor="password">Password</label>
          <input
            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            type="password"
            id="password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
        </div>
        {error && <div className="text-red-600 text-sm text-center">{error}</div>}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition"
        >
          Login
        </button>
        <div className="text-xs text-gray-500 text-center mt-3">
          Demo: Just click Login! <br />
          (Email: {DEFAULT_EMAIL} / Password: {DEFAULT_PASS})
        </div>
      </form>
    </div>
  );
}
