"use client";

import { getLikeCount, incrementLike } from "@/server/actions";
import React, { useEffect, useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    getLikeCount().then(setCount);
  }, []);

  return (
    <div className="m-2 flex flex-col items-center justify-center gap-4">
      <p className="text-4xl">{count}</p>
      <button
        className="rounded bg-blue-500 px-4 py-2 text-3xl font-bold text-white hover:bg-blue-600 disabled:bg-gray-400"
        onClick={() => {
          incrementLike().then(setCount);
        }}
      >
        Click me!
      </button>
    </div>
  );
}
