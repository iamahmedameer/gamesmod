import React from "react";
import Menu from "./Menu/Menu";
import Navbar from "./Navbar/Navbar";

const Disclaimer = () => {
  return (
    <div
      style={{
        width: "100%",
        fontSize: 12,
        color: "white",
        textAlign: "end",
      }}
    >
      Not mobile responsive
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Menu />
      <Navbar />
      <Disclaimer />
    </div>
  );
};

export default App;
