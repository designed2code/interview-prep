import { useEffect } from "react";
import Prism from "prismjs";

export const CodeBlock = ({ language = "javascript", code }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre>
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
};
