"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";
import { gsap } from "gsap";

export let lenisInstance = null;

export default function SmoothScroll({ children }) {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    lenisInstance = lenis;

    // Sync GSAP ticker with Lenis’s RAF
    // Stop the native GSAP ticker first:
    gsap.ticker.remove(gsap.update);

    // Add Lenis's RAF update to GSAP ticker
    const lenisRaf = (time) => {
      lenis.raf(time * 1000); // Lenis expects ms
    };

    // Use Lenis's RAF to update GSAP ticker on each frame
    // Here we create our own RAF loop
    let rafId;
    const loop = (time) => {
      lenisRaf(time / 1000);
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(rafId);
      // Restore GSAP ticker back to default
      gsap.ticker.add(gsap.update);
    };
  }, [lenis]);

  return (
    <ReactLenis
      root
      options={{
        duration: 2.2, // longer for smoother feeling, tweak as needed
        easing: (x) => 1 - Math.pow(1 - x, 3), // smoother easing curve
        smooth: true,
        // Optional advanced tuning:
        lerp: 0.1, // controls how fast Lenis catches up
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
