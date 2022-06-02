import React from "react";

const TwoCols = () => {
  let box = {
    width: "50px",
    height: "50px",
    background: "red",
    marginLeft: "2rem",
  };

  return (
    <div>
      <div className="d-inline-block" style={box}></div>
      <div className="d-inline-block" style={box}></div>
    </div>
  );
};

export default TwoCols;
