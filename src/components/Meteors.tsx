// "use client";

// import clsx from "clsx";
// import React, { useEffect, useState } from "react";

// export default function Meteors({ number }: { number?: number }) {
//   const [meteors, setMeteors] = useState<{ left: string; animationDelay: string; animationDuration: string }[]>([]);

//     useEffect(() => {
//         const meteors = Array.from({ length: number || 5 }, (_, idx) => {
//         const left = `${Math.floor(Math.random() * 100)}%`;
//         const animationDelay = `${Math.random()}s`;
//         const animationDuration = `${Math.random() * 2 + 1}s`;
//         return { left, animationDelay, animationDuration };
//         });
//         setMeteors(meteors);
//     }, [number]);

//   return (
//     <div className="overflow-x-hidden">
//       {meteors.map((meteor, idx) => (
//         <span
//           key={"meteor" + idx}
//           className={clsx(
//             "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
//             "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
//             "after:content-[''] after:absolute after:top-1/2 after:left-0 after:transform after:-translate-y-[50%] after:w-[1px] after:h-[1px] after:bg-white after:rounded-full after:shadow-[0_0_0_1px_#ffffff40] after:animate-meteor-star-effect"
//           )}
//           style={{
//             top: 0,
//             left: meteor.left,
//             animationDelay: meteor.animationDelay,
//             animationDuration: meteor.animationDuration,
//           }}
//         ></span>
//       ))}
//     </div>
//   );
// }