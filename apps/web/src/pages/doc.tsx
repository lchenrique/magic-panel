/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { CodeContainer } from "../components/code-container/code-container";

const Doc = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
      fetch("./doc.md")
        .then((response) => response.text())
        .then((text) => setMarkdown(text));
  }, []);
  
  return (
    <div className="container  mt-10">
        {!markdown && <div className="text-white text-2xl mx-auto">loading...</div>}
        <ReactMarkdown
          components={{
            code(props) {
              const { children, className, ...rest } = props;
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <CodeContainer className="px-3" language="jsx">
                  {String(children).replace(/\n$/, "")}
                </CodeContainer>
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              );
            },
          }}
          className="prose prose-pre:px-0 prose-pre:bg-transparent prose-code:text-base prose-invert w-full max-w-[100%]"
        >
          {markdown}
        </ReactMarkdown>
    </div>
  );
};

export { Doc };
