import React, { useState } from "react";

const UI = ({ currentElement }) => {
  const [data, setData] = useState(false);

  const showHide = () => {
    setData(!data);
  };

  return (
    <>
      <div className="accordian">
        <div className="ques">
          <button onClick={showHide}>
            {data ? (
              <i class="fa-solid fa-minus"> </i>
            ) : (
              <i class="fa-solid fa-plus"></i>
            )}
          </button>
          <h3>{currentElement.q}</h3>
        </div>
        <p>{data ? currentElement.ans : ""}</p>
      </div>
    </>
  );
};

export default UI;
