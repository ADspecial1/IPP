import React, { useState, useRef, useEffect } from "react";

const DUMMY_CHAT = [
  { role: "ai", text: "Hello! How can I help with your immigration process?" },
  { role: "user", text: "What documents do I need for an O-1 visa?" },
  { role: "ai", text: "You’ll typically need a valid passport, recommendation letters, and evidence of extraordinary ability." },
];

export default function ChatbotSidebar() {
  const [messages] = useState(DUMMY_CHAT);
  const [input, setInput] = useState("");
  const chatRef = useRef(null);

  useEffect(()=> {
    chatRef.current && chatRef.current.scrollTo(0, chatRef.current.scrollHeight);
  }, [messages]);

  return (
    <div className="flex flex-col h-full">
      <div className="bg-blue-50 px-4 py-3 border-b font-bold text-blue-700">
        <span>💬 AI FAQ Assistant</span>
      </div>
      <div className="flex-1 p-3 space-y-2 overflow-y-auto" ref={chatRef} tabIndex={0} aria-label="Chat log">
        {messages.map((m,i)=>(
          <div key={i} className={`flex ${m.role==="user"?"justify-end":"justify-start"}`}>
            <div className={`max-w-xs px-3 py-2 rounded-2xl text-sm shadow
              ${m.role==="ai"?"bg-gray-200 text-gray-800":"bg-blue-600 text-white ml-auto"}`}>
              {m.text}
            </div>
          </div>
        ))}
        {/* Fake typing indicator */}
        <div className="flex justify-start"><span className="italic text-gray-400 text-xs">AI is typing...</span></div>
      </div>
      <form className="flex border-t p-2 gap-2" onSubmit={e=>e.preventDefault()}>
        <input
          value={input}
          onChange={e=>setInput(e.target.value)}
          placeholder="Type your question..."
          aria-label="Chat message input"
          className="flex-1 px-2 py-1 rounded border outline-none focus:ring-2 focus:ring-blue-500"
          disabled
        />
        <button className="bg-blue-600 text-white px-4 py-1 rounded" disabled>Send</button>
      </form>
    </div>
  );
}
