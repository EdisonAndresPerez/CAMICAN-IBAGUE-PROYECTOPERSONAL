"use client";

import { STATS } from "@/lib/constants";
import { useEffect, useRef, useState } from "react";

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
      { threshold: 0.05, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative border-b border-slate-200 bg-gradient-to-b from-white to-slate-50 py-16 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,transparent,black)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
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
      className="group text-center"
      style={{
        animation: isVisible
          ? `fadeInUp 0.6s ease-out ${index * 0.08}s both`
          : "none",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        transitionDelay: `${index * 0.08}s`
      }}
    >
      <div className="relative inline-block">
        {/* Animated glow effect */}
        <div className="absolute inset-0 blur-xl bg-cyan-400/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />

        {/* Counter */}
        <div className="relative text-4xl font-bold text-slate-950 lg:text-5xl transition-all duration-300 group-active:text-cyan-500 group-active:scale-105 md:group-hover:text-cyan-500 md:group-hover:scale-110">
          {stat.value === "24/7" ? (
            <span className="bg-gradient-to-r from-slate-950 to-cyan-500 bg-clip-text text-transparent">
              {stat.value}
            </span>
          ) : (
            <>
              <span className="tabular-nums">{count}</span>
              {hasPlus && <span className="text-cyan-500">+</span>}
              {hasPercent && <span className="text-cyan-500">%</span>}
            </>
          )}
        </div>

        {/* Animated underline */}
        <div className="mx-auto mt-2 h-1 w-0 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full group-hover:w-full transition-all duration-500" />
      </div>

      <div className="mt-3 text-sm text-slate-600 lg:text-base font-medium transition-colors group-hover:text-slate-900">
        {stat.label}
      </div>

      {/* Security badge effect */}
      <div className="mx-auto mt-2 h-2 w-2 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg shadow-cyan-400/50" />
    </div>
  );
}

// Add this to your globals.css if not already there
const styles = `
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.bg-grid-slate-200\/50 {
  background-image: linear-gradient(to right, rgb(226 232 240 / 0.5) 1px, transparent 1px),
    linear-gradient(to bottom, rgb(226 232 240 / 0.5) 1px, transparent 1px);
  background-size: 40px 40px;
}
`;
