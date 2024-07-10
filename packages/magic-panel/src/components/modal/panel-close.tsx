import React from "react";
import { cn } from "../../utils";

export interface IPanelCloseProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  onClose: () => void;
  className?: string;
  
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PanelClose = React.forwardRef<any, IPanelCloseProps>(({ className, onClose, ...props }, ref) => {
  const cls = className && 
  (/(left|bottom)-(?:\d+|\d+\/\d+|auto|full|px)$/.test(className)) 
  ? className 
  : cn(className);

  return <div
    {...props}
    id="magic-close"
    ref={ref}
    className={cn("magic-close close:bg-white", cls)}
    onClick={() => onClose && onClose()}
    {...props} />
})

PanelClose.displayName = 'MagicPanel.Close'

export { PanelClose };