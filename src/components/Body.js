import React from "react";

function Body(props) {
  return (
    <div>
      {props.datas.map(data => (
        <div key={data.dataId}>
          <img src={data.img} alt="kitty" />
          <p>{data.vote}</p>
          <button>click</button>
          <p>{data.name}</p>
          <p>{data.dateRelease}</p>
          <img src={data.userImage} alt="kitty" />
        </div>
      ))}
    </div>
  );
}

export default Body;
