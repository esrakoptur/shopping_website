import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Second from "./pages/Second";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/second" element={<Second /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
