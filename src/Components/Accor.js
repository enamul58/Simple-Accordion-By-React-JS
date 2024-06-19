import React from "react";
import { data } from "./Datas";
import UI from "./UI.js";
const Accor = () => {
  return (
    <>
      {data.map((currentElement, index) => {
        return <UI currentElement={currentElement} />;
      })}
    </>
  );
};

export default Accor;
