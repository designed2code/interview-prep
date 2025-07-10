import { CodeBlock } from "@/components/ui/codeblock";
export const ProblemDetails = () => {
  const codeSnippet = `// Input:
executeParallel([asyncTask(3), asyncTask(1), asyncTask(2)], (result) => {
  console.log(result);
});

// Output:
// output in the order of execution
[2, 1, 3]`;
  return (
    <>
      <p>
        Implement a function in JavaScript that takes a list of async functions
        as input and a callback function and executes the async tasks in
        parallel that is all at once and invokes the callback after every task
        is executed.
      </p>
      <CodeBlock language="javascript" code={codeSnippet} />
    </>
  );
};
