import React, { ReactNode } from "react";
import { cn } from "../../utils";

export interface IPanelHeaderProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode;
}

const PanelHeader = ({ children, className, ...props }: IPanelHeaderProps) => {
  return (
    <h1
      className={cn(
        "panel-header text-xl text-left w-full text-white font-semibold  mb-6",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

PanelHeader.displayName = "MagicPanel.Header";

export { PanelHeader };
