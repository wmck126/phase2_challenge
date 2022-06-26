import React from "react";
import BotCard from "./BotCard"

function BotCollection({bots}) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((data) => {
          <BotCard bot={data}/>
        })}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
