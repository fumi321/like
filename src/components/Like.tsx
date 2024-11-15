"use client";

import { getLike, incrementLike } from "@/server/actions";
import React, { useEffect, useState } from "react";

export default function Like() {
  const [like, setLike] = useState(0);

  useEffect(() => {
    getLike().then(setLike).catch(console.error);
  }, []);

  return (
    <button
      className="m-2 rounded-3xl bg-blue-500 p-4 text-4xl font-bold text-white hover:bg-blue-600 disabled:bg-gray-400"
      onClick={() => {
        incrementLike().then(setLike).catch(console.error);
      }}
    >
      👍 {like}
    </button>
  );
}
