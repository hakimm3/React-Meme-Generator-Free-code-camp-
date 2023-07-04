import Navbar from "./components/Navbar";
import Meme from "./components/Meme";
import React from "react";

import "./App.css";
import { useState } from "react";

function App(props) {

  return (
    <div className="App">
      <Navbar />
      <Meme />
      {/* {showBox} */}
    </div>
  );
}

export default App;
