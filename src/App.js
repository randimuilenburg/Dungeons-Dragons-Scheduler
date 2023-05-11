import "./App.css";
import Header from "./components/Header";
import Views from "./components/Views";
import React from "react";
// import data from "./data.json";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        {/* {data.items.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))} */}
        <Header />
        <Views />
      </React.Fragment>
    </div>
  );
}

export default App;
