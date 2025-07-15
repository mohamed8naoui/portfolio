import { cn } from "@/lib/utils";
import React from "react";

function Container({ className, children }) {
  return (
    <div
      className={cn(
        "max-w-7xl lg:max-w-full px-[5vw] md:px-[7vw] mx-auto my-36",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Container;
