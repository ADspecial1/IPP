import React, { useRef, useState } from "react";

const DUMMY_DOCS = [
  { name: "Passport.pdf", version: 2, status: "Pending Review", date: "2025-07-12" },
  { name: "Photo.jpg", version: 1, status: "Uploaded", date: "2025-07-11" },
];

export default function DocumentUpload() {
  const [docs] = useState(DUMMY_DOCS);
  const fileInputRef = useRef();

  return (
    <section className="bg-white rounded-xl shadow p-4 mb-6">
      <h3 className="font-semibold mb-3">Upload Documents</h3>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mb-4"
        onClick={()=>fileInputRef.current.click()}
      >Upload Document</button>
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        multiple
        accept=".pdf,.doc,.jpg,.jpeg,.png"
        disabled
      />
      <ul>
        {docs.map((doc,i)=>(
          <li key={i} className="flex items-center justify-between border-b py-2">
            <div>
              <span className="font-semibold">{doc.name}</span>
              <span className="ml-2 text-xs text-gray-500">v{doc.version}</span>
              <span className="ml-2 text-xs text-gray-400">{doc.date}</span>
              <span className="ml-2 text-xs">{doc.status==="Pending Review"? <span className="text-yellow-500">{doc.status}</span> : <span className="text-green-500">{doc.status}</span>}</span>
            </div>
            <div className="space-x-2">
              <button className="text-blue-600 text-xs font-bold hover:underline">Preview</button>
              <button className="text-red-600 text-xs font-bold hover:underline">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
