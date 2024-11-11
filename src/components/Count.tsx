"use client";

import React, { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  return (
    <div className="m-2 flex flex-col items-center justify-center gap-4">
      <p className="text-4xl">{count}</p>
      <button
        className="text-3xl font-bold"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Click me!
      </button>
    </div>
  );
}
