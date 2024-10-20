import { cn } from "@/lib/utils";
import React from "react";

function Container({ className, children }) {
  return (
    <div className={cn("max-w-7xl mx-auto mb-36", className)}>{children}</div>
  );
}

export default Container;
