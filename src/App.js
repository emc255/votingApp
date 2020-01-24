import React, { useState, useEffect } from "react";
import Title from "./components/Title";
import Body from "./components/Body";
import "./App.css";

function App() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("games.json")
      .then(res => res.json())
      .then(resData => {
        resData.map(data => (data.vote = Math.floor(Math.random() * 50 + 15)));
        setDatas(resData);
      })
      .catch(err => console.log(err));
  }, []);

  const getVote = vote => {
    let newData = {};

    const addData = datas.filter(data => {
      if (data.dataId === parseInt(vote)) {
        const plus = data.vote + 1;

        newData = {
          dataId: data.dataId,
          userImage: data.userImage,
          name: data.name,
          dateRelease: data.dateRelease,
          img: data.img,
          vote: plus
        };
      }
    });

    const newDatas = datas.filter(data => data.dataId !== parseInt(vote));

    setDatas([...newDatas, newData]);
  };

  return (
    <div className="App">
      <Title />
      <Body datas={datas} getVote={getVote} />
    </div>
  );
}

export default App;
