import ReactMarkdown from "react-markdown";
import markdown from "../data/parallelExecution.md?raw";

export function ProblemDetails() {
  return (
    <div className="prose max-w-4xl p-6">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}
