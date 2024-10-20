import React from "react";

function MoreMessage({ children }) {
  return (
    <p className="text-lg md:text-2xl font-normal text-muted-foreground leading-9 text-center">
      {children}
    </p>
  );
}

export default MoreMessage;
