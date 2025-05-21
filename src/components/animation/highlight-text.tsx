"use client";

import { motion } from "framer-motion";
import { ReactNode, useLayoutEffect, useRef, useState } from "react";

interface HighlightTextProps {
  children: ReactNode;
  color?: string;
  startDelay?: number;
}

export function HighlightText({
  children,
  startDelay = 0,
}: HighlightTextProps) {
  const textRef = useRef<HTMLSpanElement>(null);
  const [width, setWidth] = useState(0);

  // 좌우 여유(px)
  const pad = 4;

  useLayoutEffect(() => {
    if (textRef.current) setWidth(textRef.current.offsetWidth);
  }, [children]);

  return (
    <span className="relative inline-block">
      <span ref={textRef} className="relative z-10 text-lg">
        {children}
      </span>
      {width > 0 && (
        <motion.svg
          className="absolute left-[-4px] bottom-1 z-0 pointer-events-none text-primary"
          width={width + pad * 2}
          height={20}
          viewBox={`0 0 ${width + pad * 2} 20`}
          initial="hidden"
          animate="visible"
        >
          <motion.path
            d={`
              M0,15
              Q${(width + pad * 2) * 0.25},10 ${(width + pad * 2) * 0.5},15
              Q${(width + pad * 2) * 0.75},20 ${width + pad * 2},15
            `}
            fill="none"
            stroke="currentColor"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: {
                pathLength: 1,
                opacity: 1,
                transition: {
                  duration: 1.2,
                  delay: startDelay / 1000,
                  ease: [0.77, 0, 0.18, 1],
                },
              },
            }}
          />
        </motion.svg>
      )}
    </span>
  );
}
