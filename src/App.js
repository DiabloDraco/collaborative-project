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
import Compliance from "./pages/compliance";
import JoinCapital from "./pages/joincapital";
import OurLocation from "./pages/our-location";
import Candidates from "./pages/candidates";
import Reasons from "./pages/reasons";
import Profile from "./pages/profile";
import Courses from "./pages/courses";
import Admin from "./pages/admin";
import AdminProfile from "./pages/adminProfile";
import Documents from "./pages/documents";
import PasswordForgot from "./pages/passwordForgot";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registration" element={<Registration/>}/>
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
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/join" element={<JoinCapital />} />
          <Route path="/our-location" element={<OurLocation />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/reasons" element={<Reasons />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin-profile" element={<AdminProfile />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/forgot" element={<PasswordForgot />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;