import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Astro from "./Astrologer/shared/Astro";
import AstroSkillDetails from "./Astrologer/shared/AstroSkillDetails";
import AstroOtherDetails from "./Astrologer/shared/AstroOtherDetails";
import AstroAssignment from "./Astrologer/shared/AstroAssignment";
import AstroLogin from "./Astrologer/shared/AstroLogin";
import SidebarLayout from "./Astrologer/layout/sidebarLayout";
import Dashboard from "./Astrologer/shared/Dashboard";
import Transactions from "./Astrologer/shared/Transactions";
import AddMoney from "./Astrologer/shared/AddMoney";
import PaymentDetails from "./Astrologer/shared/PaymentDetails";
import Callnow from "./Astrologer/shared/Callnow";
import Chatnow from "./Astrologer/shared/Chatnow";
import Thank from "./Astrologer/shared/Thank";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Home />}></Route>
          <Route path="/callnow" element={<Callnow />}></Route>
          <Route path="/chatnow" element={<Chatnow />}></Route>
          <Route path="/transactions" element={<Transactions />}></Route>
          <Route path="/Addmoney" element={<AddMoney />}></Route>
          <Route path="/paymentdetails" element={<PaymentDetails />}></Route>
          <Route path="/thank" element={<Thank />}></Route>

          <Route path="/astro" element={<Astro />}></Route>

          <Route path="/astrodetails" element={<AstroSkillDetails />}></Route>
          <Route
            path="/astroOtherDetails"
            element={<AstroOtherDetails />}
          ></Route>
          <Route path="/astroAssignment" element={<AstroAssignment />}></Route>
          <Route path="/astrologin" element={<AstroLogin />}></Route>

          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
