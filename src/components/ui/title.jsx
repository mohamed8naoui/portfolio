import React from "react";

function Title({ children }) {
  return (
    <h1 className="text-3xl uppercase text-purple-900 dark:text-purple-400">
      {children}
    </h1>
  );
}

export default Title;
