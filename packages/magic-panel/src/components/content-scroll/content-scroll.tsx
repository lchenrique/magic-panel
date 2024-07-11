import { cn } from "../../utils";

export interface IContentScrollProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const ContentScroll = ({
  children,
  className,
  ...props
}: IContentScrollProps) => {
  return (
    <div
      className={cn(
        " flex flex-col gap-3 overflow-auto h-full max-h-[calc(100%-64px)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { ContentScroll };
