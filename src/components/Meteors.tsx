"use client";

import clsx from "clsx";
import React, { useEffect, useState } from "react";

export default function Meteors({ number }: { number?: number }) {
  const [width, setWidth] = useState(1400);
  const [meteors, setMeteors] = useState<{ left: string; animationDelay: string; animationDuration: string }[]>([]);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    const newMeteors = new Array(number || 20).fill(true).map(() => ({
      left: Math.floor(Math.random() * window.innerWidth) + "px",
      animationDelay: Math.random() * (1 - 0.2) + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
    }));
    setMeteors(newMeteors);

    return () => window.removeEventListener("resize", handleResize);
  }, [number]);

  return (
    <>
      {meteors.map((meteor, idx) => (
        <span
          key={"meteor" + idx}
          className={clsx(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            "after:content-[''] after:absolute after:top-1/2 after:left-0 after:transform after:-translate-y-[50%] after:w-[1px] after:h-[1px] after:bg-white after:rounded-full after:shadow-[0_0_0_1px_#ffffff40] after:animate-meteor-star-effect"
          )}
          style={{
            top: 0,
            left: meteor.left,
            animationDelay: meteor.animationDelay,
            animationDuration: meteor.animationDuration,
          }}
        ></span>
      ))}
    </>
  );
}