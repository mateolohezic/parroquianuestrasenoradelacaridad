"use client";

import { motion } from "framer-motion";
import { CrossAltIcon } from "@/icons";

const CROSS_POSITIONS = [
  { top: 18, left: 12, size: 40, duration: 4, delay: 0 },
  { top: 45, left: 75, size: 50, duration: 4.5, delay: 0.8 },
  { top: 72, left: 30, size: 60, duration: 5, delay: 1.6 },
  { top: 25, left: 55, size: 70, duration: 5.5, delay: 2.4 },
  { top: 60, left: 85, size: 80, duration: 6, delay: 3.2 },
  { top: 38, left: 18, size: 90, duration: 6.5, delay: 4.0 },
  { top: 80, left: 50, size: 45, duration: 4.8, delay: 4.8 },
  { top: 15, left: 90, size: 55, duration: 5.3, delay: 5.6 },
];

const PARTICLE_POSITIONS = [
  { top: 8, left: 15 }, { top: 22, left: 45 }, { top: 35, left: 78 },
  { top: 48, left: 25 }, { top: 55, left: 60 }, { top: 68, left: 90 },
  { top: 75, left: 35 }, { top: 82, left: 55 }, { top: 18, left: 70 },
  { top: 92, left: 15 }, { top: 40, left: 5 }, { top: 60, left: 42 },
];

export function FloatingCrosses({ count = 6 }: { count?: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {CROSS_POSITIONS.slice(0, count).map((pos, i) => (
        <motion.div
          key={i}
          className="absolute text-dorado/[0.04]"
          style={{ top: `${pos.top}%`, left: `${pos.left}%` }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: pos.duration,
            repeat: Infinity,
            delay: pos.delay,
          }}
        >
          <CrossAltIcon size={pos.size} />
        </motion.div>
      ))}
    </div>
  );
}

export function FloatingParticles({ count = 12 }: { count?: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {PARTICLE_POSITIONS.slice(0, count).map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-dorado/30"
          style={{ top: `${pos.top}%`, left: `${pos.left}%` }}
          animate={{ y: [0, -40, 0], opacity: [0, 1, 0] }}
          transition={{
            duration: 3.5 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        />
      ))}
    </div>
  );
}
