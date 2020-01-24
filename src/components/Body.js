import React from "react";

function Body(props) {
  const sortedArr = props.datas.slice(0);
  sortedArr.sort((a, b) => {
    return b.vote - a.vote;
  });
  console.log(sortedArr);

  return (
    <div>
      {sortedArr.map(data => (
        <div key={data.dataId}>
          <img className="poster" src={data.img} alt="kitty" />
          <p>{data.vote}</p>
          <button data-id={data.dataId} onClick={e => props.getVote(e.target.dataset.id)}>
            click
          </button>
          <p>{data.name}</p>
          <p>{data.dateRelease}</p>
          <img className="uploader-img" src={data.userImage} alt="kitty" />
        </div>
      ))}
    </div>
  );
}

export default Body;
