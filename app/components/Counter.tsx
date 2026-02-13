"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Counter.module.css";

interface CounterProps {
  value: number;
  label: string;
  duration?: number;
}

export default function Counter({
  value,
  label,
  duration = 2000,
}: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const startTime = performance.now();

          const animate = (time: number) => {
            const progress = Math.min((time - startTime) / duration, 1);
            setCount(Math.floor(progress * value));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <div ref={ref} className={styles.counter}>
      <span className={styles.number}>{count}+</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
