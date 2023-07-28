import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import AppRoutes from "./components/AppRoutes";
import LandingPage from "./components/LandingPage";
import Profile from "./components/Profile";
import Friends from "./components/Friends";
import UpcomingSessions from "./components/UpcomingSessions";
import LogOut from "./components/LogOut";

// import data from "./data.json";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        {/* {data.items.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))} */}
        <BrowserRouter>
          <Banner />
        </BrowserRouter>
        <Header />
        <AppRoutes />
      </React.Fragment>
    </div>
  );
}

export default App;
