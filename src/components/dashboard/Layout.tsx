import React, { ReactNode } from "react";

const DashboadInnerLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="pt-[150px] px-[200px] max-w-[calc(100vw-200px)]">
      {children}
    </div>
  );
};

export default DashboadInnerLayout;
