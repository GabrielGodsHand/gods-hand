import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Event from "./pages/Event";
import Petitions from "./pages/Petitions";
import Petition from "./pages/Petition";
import Login from "./pages/Login";
import Documents from "./pages/Documents";
import KYB from "./pages/KYB";
import Testing from "./pages/Testing";
import Auth from "./pages/Auth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/event/:id" element={<Event />} />
      <Route path="/petitions" element={<Petitions />} />
      <Route path="/petition/:id" element={<Petition />} />
      <Route path="/login" element={<Login />} />
      <Route path="/documents" element={<Documents />} />
      <Route path="/kyb" element={<KYB />} />
      <Route path="/testing" element={<Testing />} />
      <Route path="/auth/*" element={<Auth />} />
    </Routes>
  );
}

export default App;
