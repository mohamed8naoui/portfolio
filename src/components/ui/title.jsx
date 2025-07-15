import { cn } from "@/lib/utils";
import React from "react";

function Title({ className, children }) {
  return (
    <h1
      className={cn(
        "text-3xl uppercase text-purple-900 dark:text-purple-400",
        className
      )}
    >
      {children}
    </h1>
  );
}

export default Title;
