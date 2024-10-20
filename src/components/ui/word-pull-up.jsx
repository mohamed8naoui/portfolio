"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function WordPullUp({
  words,

  wrapperFramerProps = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06, // Smooth stagger
        ease: "easeInOut", // Smooth easing
      },
    },
  },

  framerProps = {
    hidden: { y: 30, opacity: 0 }, // Slightly larger initial offset
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4, // Longer duration for smoother effect
        ease: "easeInOut", // Smooth easing
      },
    },
  },

  className,
}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.h1
      ref={ref}
      variants={wrapperFramerProps}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={cn(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className
      )}
    >
      {words.split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={framerProps}
          style={{ display: "inline-block", paddingRight: "8px" }}
        >
          {word === "" ? <span>&nbsp;</span> : word}
        </motion.span>
      ))}
    </motion.h1>
  );
}
