import React from "react";
import { cn } from "../../utils";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/coldark-dark'

export interface ICodeContainerProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children: string
  language?: string
}

const CodeContainer = ({ children, className, language, ...props }: ICodeContainerProps) => {
  return (
    <div className={cn('bg-card border border-border  rounded-lg', className)} {...props}>
      <SyntaxHighlighter language={language} style={prism} customStyle={{ background: "transparent", borderRadius: "0.375rem" , padding:16}}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export { CodeContainer };