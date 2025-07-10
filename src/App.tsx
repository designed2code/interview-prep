import { ProblemsList } from "./Problems/ProblemsList";
import { ProblemDetails } from "./pages/ProblemDetails";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<ProblemsList />} />
      <Route path="/problem-details/:id" element={<ProblemDetails />} />
    </Routes>
  );
}

export default App;
