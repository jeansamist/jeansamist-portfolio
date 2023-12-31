"use client";

import { FunctionComponent, useEffect, useState } from "react";

export const Balls: FunctionComponent = () => {
  const [mouse, setmouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setmouse({ x: e.clientX, y: e.clientY });
    });
  }, []);

  return (
    <div className="fixed h-screen w-screen overflow-hidden blur-xl top-0 left-0 z-0 bg-white">
      <div className="balls relative h-screen w-screen overflow-hidden">
        <div
          className="w-40 h-40 bg-zinc-50 rounded-full absolute translate-x-2/3 -translate-y-1/2"
          style={{
            top: `${mouse.y + Math.random() * 50}px`,
            left: `${mouse.x + Math.random() * 50}px`,
            transition: "top 0.5s linear, left 0.1s linear",
          }}
        ></div>
        <div
          className="w-64 h-64 bg-zinc-100 rounded-full absolute -translate-x-1/4 -translate-y-1/4"
          style={{
            top: `${mouse.y + Math.random() * 50 - 100}px`,
            left: `${mouse.x + Math.random() * 50 - 200}px`,
            transition: "top 1s linear, left 0.3s linear",
          }}
        ></div>
        <div
          className="w-60 h-60 bg-zinc-200 rounded-full absolute -translate-x-2/3 translate-y-1/2"
          style={{
            top: `${mouse.y + Math.random() * 50 + 100}px`,
            left: `${mouse.x + Math.random() * 50 + 100}px`,
            transition: "top 1.5s linear, left 0.5s linear",
          }}
        ></div>
      </div>
    </div>
  );
};
