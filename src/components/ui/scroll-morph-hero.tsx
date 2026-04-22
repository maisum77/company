"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";

export type AnimationPhase = "scatter" | "line" | "circle" | "bottom-strip";

interface FlipCardProps {
  src: string;
  index: number;
  total: number;
  phase: AnimationPhase;
  target: { x: number; y: number; rotation: number; scale: number; opacity: number };
}

const IMG_WIDTH = 60;
const IMG_HEIGHT = 85;

function FlipCard({ src, index, target }: FlipCardProps) {
  return (
    <motion.div
      animate={{
        x: target.x,
        y: target.y,
        rotate: target.rotation,
        scale: target.scale,
        opacity: target.opacity,
      }}
      transition={{
        type: "spring",
        stiffness: 40,
        damping: 15,
      }}
      style={{
        position: "absolute",
        width: IMG_WIDTH,
        height: IMG_HEIGHT,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className="group cursor-pointer"
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ rotateY: 180 }}
      >
        <div
          className="absolute inset-0 h-full w-full overflow-hidden rounded-xl bg-gray-200 shadow-lg"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img src={src} alt={`hero-${index}`} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
        </div>

        <div
          className="absolute inset-0 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-xl border border-gray-700 bg-gray-900 p-4 shadow-lg"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="text-center">
            <p className="mb-1 text-[8px] font-bold uppercase tracking-widest text-blue-400">View</p>
            <p className="text-xs font-medium text-white">Signal</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const TOTAL_IMAGES = 20;
const MAX_SCROLL = 3000;

const IMAGES = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&q=80",
  "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=300&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&q=80",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&q=80",
  "https://images.unsplash.com/photo-1506765515384-028b60a970df?w=300&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&q=80",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=300&q=80",
  "https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?w=300&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&q=80",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&q=80",
  "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=300&q=80",
  "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&q=80",
  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=300&q=80",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=300&q=80",
  "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=300&q=80",
  "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=300&q=80",
  "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=300&q=80",
  "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=300&q=80",
  "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=300&q=80",
];

const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

export default function IntroAnimation() {
  const [introPhase, setIntroPhase] = useState<AnimationPhase>("scatter");
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [manualProgress, setManualProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const handleResize = (entries: ResizeObserverEntry[]) => {
      for (const entry of entries) {
        setContainerSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    };

    const observer = new ResizeObserver(handleResize);
    observer.observe(containerRef.current);

    setContainerSize({
      width: containerRef.current.offsetWidth,
      height: containerRef.current.offsetHeight,
    });

    return () => observer.disconnect();
  }, []);

  const virtualScroll = useMotionValue(0);
  const scrollRef = useRef(0);

  const setScrollProgress = (nextValue: number) => {
    const clamped = Math.min(Math.max(nextValue, 0), MAX_SCROLL);
    scrollRef.current = clamped;
    virtualScroll.set(clamped);
    setManualProgress(clamped);

    if (clamped < 160) {
      setIntroPhase("scatter");
    } else if (clamped < 520) {
      setIntroPhase("line");
    } else {
      setIntroPhase("circle");
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      setScrollProgress(scrollRef.current + e.deltaY);
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      touchStartY = touchY;
      setScrollProgress(scrollRef.current + deltaY);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, { passive: false });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
    };
  }, [virtualScroll]);

  const morphProgress = useTransform(virtualScroll, [0, 600], [0, 1]);
  const smoothMorph = useSpring(morphProgress, { stiffness: 40, damping: 20 });

  const scrollRotate = useTransform(virtualScroll, [600, 3000], [0, 360]);
  const smoothScrollRotate = useSpring(scrollRotate, { stiffness: 40, damping: 20 });

  const mouseX = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const normalizedX = (relativeX / rect.width) * 2 - 1;
      mouseX.set(normalizedX * 100);
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX]);

  const scatterPositions = useMemo(() => {
    return IMAGES.map(() => ({
      x: (Math.random() - 0.5) * 1500,
      y: (Math.random() - 0.5) * 1000,
      rotation: (Math.random() - 0.5) * 180,
      scale: 0.6,
      opacity: 0,
    }));
  }, []);

  const [morphValue, setMorphValue] = useState(0);
  const [rotateValue, setRotateValue] = useState(0);
  const [parallaxValue, setParallaxValue] = useState(0);

  useEffect(() => {
    const unsubscribeMorph = smoothMorph.on("change", setMorphValue);
    const unsubscribeRotate = smoothScrollRotate.on("change", setRotateValue);
    const unsubscribeParallax = smoothMouseX.on("change", setParallaxValue);

    return () => {
      unsubscribeMorph();
      unsubscribeRotate();
      unsubscribeParallax();
    };
  }, [smoothMorph, smoothScrollRotate, smoothMouseX]);

  const contentOpacity = useTransform(smoothMorph, [0.8, 1], [0, 1]);
  const contentY = useTransform(smoothMorph, [0.8, 1], [20, 0]);

  return (
    <div ref={containerRef} className="relative h-full w-full overflow-hidden bg-transparent">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,61,0,0.18),transparent_65%)]" />
      <div className="flex h-full w-full flex-col items-center justify-center perspective-1000">
        <div className="pointer-events-none absolute top-1/2 z-0 flex -translate-y-1/2 flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={
              introPhase !== "circle" || morphValue < 0.5
                ? { opacity: Math.max(1 - morphValue * 1.5, 0), y: 0, filter: "blur(0px)" }
                : { opacity: 0, filter: "blur(10px)" }
            }
            transition={{ duration: 1 }}
            className="text-2xl font-medium tracking-tight text-on-background md:text-4xl"
          >
            AI compounds business velocity.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={introPhase !== "circle" || morphValue < 0.5 ? { opacity: Math.max(0.55 - morphValue, 0) } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-4 text-xs font-bold tracking-[0.2em] text-white/60"
          >
            SCROLL TO EXPLORE
          </motion.p>
        </div>

        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="pointer-events-none absolute top-[10%] z-10 flex flex-col items-center justify-center px-4 text-center"
        >
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-on-background md:text-5xl">AI for Modern Business</h2>
          <p className="max-w-lg text-sm leading-relaxed text-on-surface-variant md:text-base">
            From copilots to autonomous workflows, AI reduces latency, increases output quality, and unlocks new revenue surfaces.
          </p>
        </motion.div>

        <div className="relative flex h-full w-full items-center justify-center">
          {IMAGES.slice(0, TOTAL_IMAGES).map((src, i) => {
            let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

            if (introPhase === "scatter") {
              target = scatterPositions[i];
            } else if (introPhase === "line") {
              const lineSpacing = 70;
              const lineTotalWidth = TOTAL_IMAGES * lineSpacing;
              const lineX = i * lineSpacing - lineTotalWidth / 2;
              target = { x: lineX, y: 0, rotation: 0, scale: 1, opacity: 1 };
            } else {
              const isMobile = containerSize.width < 768;
              const minDimension = Math.min(containerSize.width, containerSize.height);

              const circleRadius = Math.min(minDimension * 0.35, 350);
              const circleAngle = (i / TOTAL_IMAGES) * 360;
              const circleRad = (circleAngle * Math.PI) / 180;
              const circlePos = {
                x: Math.cos(circleRad) * circleRadius,
                y: Math.sin(circleRad) * circleRadius,
                rotation: circleAngle + 90,
              };

              const baseRadius = Math.min(containerSize.width, containerSize.height * 1.5);
              const arcRadius = baseRadius * (isMobile ? 1.4 : 1.1);
              const arcApexY = containerSize.height * (isMobile ? 0.35 : 0.25);
              const arcCenterY = arcApexY + arcRadius;

              const spreadAngle = isMobile ? 100 : 130;
              const startAngle = -90 - spreadAngle / 2;
              const step = spreadAngle / (TOTAL_IMAGES - 1);

              const scrollProgress = Math.min(Math.max(rotateValue / 360, 0), 1);
              const maxRotation = spreadAngle * 0.8;
              const boundedRotation = -scrollProgress * maxRotation;
              const currentArcAngle = startAngle + i * step + boundedRotation;
              const arcRad = (currentArcAngle * Math.PI) / 180;

              const arcPos = {
                x: Math.cos(arcRad) * arcRadius + parallaxValue,
                y: Math.sin(arcRad) * arcRadius + arcCenterY,
                rotation: currentArcAngle + 90,
                scale: isMobile ? 1.4 : 1.8,
              };

              target = {
                x: lerp(circlePos.x, arcPos.x, morphValue),
                y: lerp(circlePos.y, arcPos.y, morphValue),
                rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                scale: lerp(1, arcPos.scale, morphValue),
                opacity: 1,
              };
            }

            return <FlipCard key={i} src={src} index={i} total={TOTAL_IMAGES} phase={introPhase} target={target} />;
          })}
        </div>

        <div className="absolute bottom-6 left-1/2 z-20 w-[92%] max-w-xl -translate-x-1/2 rounded-md border border-white/20 bg-surface-container-high/85 p-3 backdrop-blur-sm">
          <div className="mb-2 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.15em] text-white/70">
            <span>Manual Control</span>
            <span>{Math.round((manualProgress / MAX_SCROLL) * 100)}%</span>
          </div>
          <input
            type="range"
            min={0}
            max={MAX_SCROLL}
            step={10}
            value={manualProgress}
            onChange={(e) => setScrollProgress(Number(e.target.value))}
            className="w-full accent-aura-accent"
            aria-label="AI animation progress"
          />
        </div>
      </div>
    </div>
  );
}