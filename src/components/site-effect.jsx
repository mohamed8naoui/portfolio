"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "./ui/particles";

function SiteEffect() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <Particles
      className="absolute inset-0"
      quantity={300}
      ease={80}
      color={color}
      refresh
    />
  );
}

export default SiteEffect;
