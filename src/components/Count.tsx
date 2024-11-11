"use client";

import React, { useEffect, useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/api/count")
      .then((res) => res.json())
      .then((data) => setCount(data.like))
      .catch(() => console.error("Failed to fetch count"));
  }, []);

  const handleClick = async () => {
    fetch("/api/count", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => setCount(data.like))
      .catch(() => console.error("Failed to update count"));
  };

  return (
    <div className="m-2 flex flex-col items-center justify-center gap-4">
      <p className="text-4xl">{count}</p>
      <button
        className="rounded bg-blue-500 px-4 py-2 text-3xl font-bold text-white hover:bg-blue-600 disabled:bg-gray-400"
        onClick={handleClick}
      >
        Click me!
      </button>
    </div>
  );
}
