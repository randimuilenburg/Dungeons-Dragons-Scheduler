import "./App.css";
import Header from "./components/Header";
import LogIn from "./components/LogIn";
// import Views from "./components/Views";
import React from "react";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Header />
        <LogIn />
        {/* <Views /> */}
      </React.Fragment>
    </div>
  );
}

export default App;
