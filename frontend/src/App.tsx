import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Event from "./pages/Event";
import Testing from "./pages/Testing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/event/:id" element={<Event />} />
      <Route path="/testing" element={<Testing />} />
    </Routes>
  );
}

export default App;
