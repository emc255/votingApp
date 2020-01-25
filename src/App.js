import React, { useState, useEffect } from "react";
import Title from "./components/Title";
import Body from "./components/Body";
import "./App.css";

function App() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("datas.json")
      .then(res => res.json())
      .then(resDatas => {
        resDatas.map(data => (data.vote = Math.floor(Math.random() * 50 + 15)));
        setDatas(resDatas);
      })
      .catch(err => console.log(err));
  }, []);

  const getVote = vote => {
    let newData = {};

    datas.filter(data => {
      if (data.dataId === parseInt(vote)) {
        data.vote += 1;
        newData = {
          dataId: data.dataId,
          userImage: data.userImage,
          name: data.name,
          dateRelease: data.dateRelease,
          img: data.img,
          vote: data.vote,
          atag: data.atag
        };
      }
    });

    const updateDatas = datas.filter(data => data.dataId !== parseInt(vote));

    setDatas([...updateDatas, newData]);
  };

  return (
    <div className="App">
      <Title />
      <Body datas={datas} getVote={getVote} />
    </div>
  );
}

export default App;
