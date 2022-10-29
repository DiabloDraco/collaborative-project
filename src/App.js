import { Route, Router, Routes } from "react-router-dom";
import Header from "./container/header";
import './assets/settings/settings.css'
import Footer from "./container/footer";
import './assets/settings/settings.css'
import HomePage from "./pages/homePage/homePage";
import CapitalInvestment from "./pages/capitalInvestment/capitalInvestment";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/capital" element={<CapitalInvestment />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;