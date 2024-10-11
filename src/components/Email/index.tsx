import classNames from "classnames";
import React from "react";

const Email: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={classNames("flex-col hidden w-4 gap-4 lg:flex", className)}>
      <a
        className="text-sm -rotate-90 text-red-800 hover:text-primary"
        href="mailto:oussamadaoumoum@gmail.com"
      >
        Looper@gmail.com
      </a>
      <div className="h-16 ml-[5px] border-l dark:border-background-light border-background" />
    </div>
  );
};

export default Email;
