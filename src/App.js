import React, { useState } from "react";
import Title from "./components/Title";
import Body from "./components/Body";
import "./App.css";

function App() {
  const [datas, setDatas] = useState([]);

  const vote = (userVote, dataId) => {};

  return (
    <div className="App">
      <Title />
      <Body datas={datas} />
    </div>
  );
}

export default App;
