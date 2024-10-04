import React from "react";
import Tile from "../tile/Tile";

export const TileList = ({ tiles, delContact }) => {
  return (
    <div>
      {tiles.map((tile, index) => {
        const { name, ...rest } = tile;
        return (
          <div key={index}>  
            <Tile name={name} description={rest} />
            <button onClick={() => delContact(name)}>Delete Contact</button>
          </div>  
        );
      })}
    </div>
  );
};
