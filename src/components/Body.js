import React from "react";

function Body(props) {
  const sortedArr = [...props.datas].sort((a, b) => b.vote - a.vote);

  return (
    <div className="outer-main-container">
      {sortedArr.map((data, index) => (
        <div className="main-container" key={data.dataId}>
          <p className="ranking-number">{index + 1}</p>
          <img className="poster" src={data.img} alt="kitty" />
          <div className="main-inner-container">
            <p className="inner-container-content">{data.vote} Votes</p>
            <button
              className="inner-container-content"
              data-id={data.dataId}
              onClick={e => props.getVote(e.target.dataset.id)}
            >
              vote
            </button>
            <p className="inner-container-content">
              <a className="atag" href={data.atag}>
                {data.name}
              </a>
            </p>
            <p className="inner-container-content">{data.dateRelease}</p>
            <p className="inner-container-content">Submitted by:</p>
            <div className="uploader-img-container">
              <img className="uploader-img inner-container-content" src={data.userImage} alt="kitty" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Body;
