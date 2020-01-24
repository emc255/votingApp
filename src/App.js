import React, { useState } from "react";
import Title from "./components/Title";
import "./App.css";

function App() {
  const [data, setData] = useState([{ name: "final fantasy", img: "http://placekitten.com/g/200/200", vote: 0 }]);

  return (
    <div className="App">
      <Title />
    </div>
  );
}

export default App;
