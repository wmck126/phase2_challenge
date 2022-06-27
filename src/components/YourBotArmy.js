import React from "react";
import BotCard from "./BotCard";
import BotSpecs from "./BotSpecs";


function YourBotArmy({botArmy}) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {botArmy.map(function (data) {
            return (
            <BotCard bot={data} />
            )
          })}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
