import { Route, Router, Routes } from "react-router-dom";
import Header from "./container/header";
import './assets/settings/settings.css'
import Footer from "./container/footer";
import './assets/settings/settings.css'
import HomePage from "./pages/homePage/homePage";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;