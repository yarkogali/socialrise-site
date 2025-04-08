import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500 text-white p-4">
      <h1 className="text-5xl font-bold mb-4">SociaRise</h1>
      <p className="text-xl mb-6 text-center max-w-xl">
        Boost your social media presence with real engagement. Likes, followers, views — all in one place.
      </p>
      <button className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition">
        Order Now
      </button>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
