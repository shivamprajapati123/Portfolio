"use client";

import React, { useRef, useEffect, useState } from "react";
import { useMousePosition } from "@/utils/mouse";

export default function Particles({
  className = "",
  quantity = 30,
  staticity = 50,
  ease = 50,
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const context = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const canvasSize = useRef({ w: 0, h: 0 });
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;
  const particles = useRef([]);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const mousePosition = useMousePosition();

  useEffect(() => {
    const checkScreen = () => setIsSmallScreen(window.innerWidth < 640);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    mouse.current.x = mousePosition.x - canvasSize.current.w / 2;
    mouse.current.y = mousePosition.y - canvasSize.current.h / 2;
  }, [mousePosition]);

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d");
      resizeCanvas();
      particles.current = []; // <-- Clear old particles
      createParticles();
      animate();
      window.addEventListener("resize", handleResize);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line
  }, [isSmallScreen]);

  const handleResize = () => {
    resizeCanvas();
    particles.current = [];
    createParticles();
  };

  const resizeCanvas = () => {
    if (containerRef.current && canvasRef.current && context.current) {
      canvasSize.current.w = containerRef.current.offsetWidth;
      canvasSize.current.h = containerRef.current.offsetHeight;
      canvasRef.current.width = canvasSize.current.w * dpr;
      canvasRef.current.height = canvasSize.current.h * dpr;
      canvasRef.current.style.width = `${canvasSize.current.w}px`;
      canvasRef.current.style.height = `${canvasSize.current.h}px`;
      context.current.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
      context.current.scale(dpr, dpr);
    }
  };

  // Calculate count inside the component
  const count = isSmallScreen ? 30 : 300;
  const createParticles = () => {
    for (let i = 0; i < count; i++) {
      particles.current.push({
        x: Math.random() * canvasSize.current.w,
        y: Math.random() * canvasSize.current.h,
        size: Math.random() * 1.5 + 0.3,
        alpha: Math.random() * 0.5 + 0.3,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        magnetism: 0.1 + Math.random() * 10,
        translateX: 0,
        translateY: 0,
      });
    }
  };

  const animate = () => {
    if (!context.current) return;

    context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);

    particles.current.forEach((p) => {
      p.x += p.dx;
      p.y += p.dy;

      // bounce off edges
      if (p.x <= 0 || p.x >= canvasSize.current.w) p.dx *= -1;
      if (p.y <= 0 || p.y >= canvasSize.current.h) p.dy *= -1;

      // magnetism to mouse
      p.translateX +=
        (mouse.current.x / (staticity / p.magnetism) - p.translateX) / ease;
      p.translateY +=
        (mouse.current.y / (staticity / p.magnetism) - p.translateY) / ease;

      context.current.save();
      context.current.translate(p.translateX, p.translateY);
      context.current.beginPath();
      context.current.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      context.current.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
      context.current.fill();
      context.current.restore();
    });

    requestAnimationFrame(animate);
  };

  return (
    <div
      className={`${className} fixed inset-0 w-full h-full pointer-events-none`}
      ref={containerRef}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
