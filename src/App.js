import { Route, Router, Routes } from "react-router-dom";
import Header from "./container/header";
import './assets/settings/settings.css'
import Footer from "./container/footer";
import './assets/settings/settings.css'
import HomePage from "./pages/homePage/homePage";
import CapitalInvestment from "./pages/capitalInvestment/capitalInvestment";
import Counsel from "./pages/counsel";
import InvestmentAdvisory from "./pages/investment-advisory";
import Administrators from "./pages/administrators";
import Mortgage from "./pages/mortgage";
import Trustservice from "./pages/trustservice";
import Affiliates from "./pages/affiliates";
import Registration from "./pages/registration";
import Login from "./pages/login";
import Capitalbankpartners from "./pages/capitalbankpartners";
import Resources from "./pages/resources";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registraion" element={<Registration/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/groupandb" element={<CapitalInvestment />} />
          <Route path="/counsel" element={<Counsel />} />
          <Route path="/investment-advisory" element={<InvestmentAdvisory />} />
          <Route path="/administrators" element={<Administrators />} />
          <Route path="/mortgage" element={<Mortgage />} />
          <Route path="/trustservice" element={<Trustservice />} />
          <Route path="/affiliates" element={<Affiliates />} />
          <Route path="/capitalbankpartners" element={<Capitalbankpartners />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;