import React, { useState, useEffect } from "react";
import "./App.css";
import Calendar from "./components/Calendar/Calendar";
import Companies from "./components/Companies/Companies";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Home from "./components/Home/Home";
import Value from "./components/Value/Value";
import Stats from "./components/stats/stats";
import Customers from "./components/Customers/Customers";
import Footer1 from "./components/Footer1/Footer1";
import "bootstrap/dist/css/bootstrap.min.css";
import Community from "./components/Community/Community";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <button className="theme-toggle-button" onClick={toggleDarkMode}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <div className="grr">
        <Companies />
      </div>
      <Home />
      <Value />
      <Stats />
      <Calendar />
      <Customers />
      <Community />
      <Footer1 />
      <div className="foot">
        <Footer />
      </div>
    </div>
  );
}

export default App;
