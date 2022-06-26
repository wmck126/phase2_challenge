import React, { useEffect } from "react";
import BotCard from "./BotCard"


function BotCollection({bots, onDelete}) {
  // Your code here
  

  // () => {
  //   

  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map(function (data) {
          return (
            <BotCard 
              bot={data}
              onDelete={onDelete}
              />
          )
        })}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
