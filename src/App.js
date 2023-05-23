import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Astro from "./Astrologer/shared/Astro";
import AstroSkillDetails from "./Astrologer/shared/AstroSkillDetails";
import AstroOtherDetails from "./Astrologer/shared/AstroOtherDetails";
import AstroAssignment from "./Astrologer/shared/AstroAssignment";
import AstroLogin from "./Astrologer/shared/AstroLogin";
import SidebarLayout from "./Astrologer/layout/sidebarLayout";
import Dashboard from "./Astrologer/shared/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/astro/" element={<Astro />}></Route>

          <Route path="/astrodetails/" element={<AstroSkillDetails />}></Route>
          <Route
            path="/astroOtherDetails/"
            element={<AstroOtherDetails />}
          ></Route>
          <Route path="/astroAssignment/" element={<AstroAssignment />}></Route>
          <Route path="/astrologin" element={<AstroLogin />}></Route>

          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
