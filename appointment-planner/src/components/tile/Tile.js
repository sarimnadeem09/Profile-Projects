import React from "react";

const Tile = ({name, description}) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {Object.values(description).map((value, index) => (<p key={index}>{value}</p>))}
    </div>
  );
};

export default Tile;