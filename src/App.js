import { Route, Routes } from "react-router-dom";
import Header from "./container/header";
import './assets/settings/settings.css'
import Footer from "./container/footer";
import './assets/settings/settings.css'

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="container main">

        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;