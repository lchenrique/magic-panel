import { cn } from "../../utils";

export interface IPanelOverlayProps  extends React.HTMLAttributes<HTMLDivElement>  {
  onClose?: () => void;
}

const PanelOverlay = ({onClose, className, ...props}:IPanelOverlayProps) => {
  return (
    <div
        className={cn("magic-overlay opacity-100  bg-black/80", className)}
        onClick={() => onClose && onClose()}
        {...props}
      />
  );
};

PanelOverlay.displayName = "MagicPanel.Overlay";

export {PanelOverlay};