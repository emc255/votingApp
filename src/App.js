import React, { useState } from "react";
import Title from "./components/Title";
import Body from "./components/Body";
import "./App.css";

function App() {
  const [datas, setDatas] = useState([
    {
      dataId: 0,
      userImage: "http://placekitten.com/g/100/100",
      name: "final fantasy",
      dateRelease: "Square Enix, 2018",
      img: "http://placekitten.com/g/200/200",
      vote: 0
    }
  ]);

  const vote = (userVote, dataId) => {};

  return (
    <div className="App">
      <Title />
      <Body datas={datas} />
    </div>
  );
}

export default App;
