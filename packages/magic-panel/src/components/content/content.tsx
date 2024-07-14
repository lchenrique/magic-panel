import { cn } from "../../utils";

export interface IContentProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const Content = ({
  children,
  className,
  ...props
}: IContentProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 h-full",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { Content  };
