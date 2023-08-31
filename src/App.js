import React from "react";
 import "./components/style.css"
 import { Cric } from "./components/Cric";
import { Foot } from "./components/Foot";
import { HTMLProps } from "react";
import { Hokey } from "./components/Hokey";
import { Khoko } from "./components/Kohko";
import { Kab } from "./components/Kab";

 function App() {
  return (
    <div className="main">
    <h3>Home</h3>
     <Cric/>
     <Foot/>
     <Hokey/>
     <Khoko/>
     <Kab/>
     
    </div>
  );
}

export default App;
