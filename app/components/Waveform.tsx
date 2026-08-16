"use client";

import { motion, useReducedMotion } from "motion/react";

const bars = [18, 34, 22, 48, 28, 56, 36, 64, 40, 52, 26, 44, 20, 38, 16];

export function Waveform() {
  const reduce = useReducedMotion();
  return (
    <div
      className="flex h-24 items-end justify-center gap-1.5"
      aria-hidden="true"
    >
      {bars.map((h, i) => (
        <motion.span
          key={i}
          className="w-1 origin-bottom rounded-full bg-copper"
          style={{ height: h }}
          animate={
            reduce
              ? undefined
              : {
                  scaleY: [0.45, 1, 0.55, 0.9, 0.45],
                }
          }
          transition={{
            duration: 1.8 + (i % 5) * 0.12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.04,
          }}
        />
      ))}
    </div>
  );
}
