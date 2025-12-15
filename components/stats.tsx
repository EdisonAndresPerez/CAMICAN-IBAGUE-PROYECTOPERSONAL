"use client";

import { STATS } from "@/lib/constants";
import { useEffect, useRef, useState } from "react";
import styles from "./stats.module.css";

export function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05, rootMargin: "50px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.statsSection}>
      {/* Decorative elements */}
      <div className={styles.decorativeGrid} />
      <div className={styles.decorativeLine} />

      <div className={styles.container}>
        <div className={styles.grid}>
          {STATS.map((stat, index) => (
            <StatCard
              key={stat.id}
              stat={stat}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  stat,
  index,
  isVisible,
}: {
  stat: (typeof STATS)[number];
  index: number;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);
  const targetValue = parseInt(stat.value.replace(/[^0-9]/g, "")) || 0;
  const hasPlus = stat.value.includes("+");
  const hasPercent = stat.value.includes("%");

  useEffect(() => {
    if (!isVisible || targetValue === 0) return;

    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * targetValue);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, targetValue]);

  return (
    <div
      className={`${styles.statCard} ${isVisible ? styles.visible : ""}`}
      style={{
        animationDelay: `${index * 0.08}s`,
      }}
    >
      <div className={styles.glowWrapper}>
        {/* Animated glow effect */}
        <div className={styles.glow} />

        {/* Counter */}
        <div className={styles.counter}>
          {stat.value === "24/7" ? (
            <span className={styles.gradient247}>{stat.value}</span>
          ) : (
            <>
              <span className="tabular-nums">{count}</span>
              {hasPlus && <span className={styles.highlight}>+</span>}
              {hasPercent && <span className={styles.highlight}>%</span>}
            </>
          )}
        </div>

        {/* Animated underline */}
        <div className={styles.underline} />
      </div>

      <div className={styles.label}>{stat.label}</div>

      {/* Security badge effect */}
      <div className={styles.badge} />
    </div>
  );
}
