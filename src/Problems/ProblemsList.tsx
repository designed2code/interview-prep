import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import problems from "../data/jsProblems.json";
import accordionTitle from "../data/accordion.json";
import { useNavigate } from "react-router-dom";
export const ProblemsList = () => {
  const [accordionIndex, setAccordionIndex] = useState(0);
  const navigate = useNavigate();

  const [completedMap, setCompletedMap] = useState({
    0: new Set(), // basics
    1: new Set(), // jsProblems
  });

  const basics = problems.basics;
  const jsProblems = problems.jsProblems;
  const problemMap = {
    0: basics,
    1: jsProblems,
  };
  function renderProblemListBasedOnAccordion(idx) {
    setAccordionIndex(idx);
  }
  // Handle Mark Complete
  const handleCheckboxToggle = (sectionIdx, problemIdx) => {
    setCompletedMap((prev) => {
      const updated = new Set(prev[sectionIdx]);
      if (updated.has(problemIdx)) {
        updated.delete(problemIdx);
      } else {
        updated.add(problemIdx);
      }
      return { ...prev, [sectionIdx]: updated };
    });
  };
  const calculateProgress = (sectionIdx) => {
    const total = problemMap[sectionIdx]?.length || 0;
    const completed = completedMap[sectionIdx]?.size || 0;
    return total === 0 ? 0 : (completed / total) * 100;
  };

  return (
    <>
      <div className="problemsContainer">
        <h1>Problems List</h1>

        <Accordion type="single" collapsible>
          {accordionTitle.map((data, index) => {
            const total = problemMap[index]?.length || 0;
            const completed = completedMap[index]?.size || 0;
            return (
              <AccordionItem
                value={`item-${index}`}
                key={index}
                onClick={() => renderProblemListBasedOnAccordion(index)}
              >
                <AccordionTrigger
                  style={{
                    marginTop: "1rem",
                    border: "1px solid black",
                    padding: "1rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "1rem",
                      width: "100%",
                    }}
                  >
                    <div>{data.title}</div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <Progress
                        value={calculateProgress(index)}
                        className="w-[200px]"
                      />
                      <p>
                        {completed}/{total}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="mt-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">Status</TableHead>
                        <TableHead>Problem</TableHead>
                        <TableHead>Note</TableHead>
                        <TableHead className="text-right">Difficulty</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {problemMap[accordionIndex]?.map((data, i) => (
                        <TableRow key={index} className="p-4">
                          <TableCell className="">
                            <input
                              type="checkbox"
                              checked={completedMap[index]?.has(i)}
                              onChange={() => handleCheckboxToggle(index, i)}
                            />
                          </TableCell>
                          <TableCell
                            className="font-medium pointer cursor-pointer"
                            onClick={() => {
                              navigate(`/problem-details/${data.problem}`);
                            }}
                          >
                            {data.problem}
                          </TableCell>
                          <TableCell>+</TableCell>
                          <TableCell className="text-right">Easy</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </>
  );
};
