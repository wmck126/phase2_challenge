import React from "react";
import BotCard from "./BotCard";
;


function YourBotArmy({botArmy, takeOutOfService}) {
  const botLineup = botArmy.map(data => (
    <BotCard 
      key={data.id}
      bot={data}
      onAddArmy={takeOutOfService}
    />))

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
        Your Bot Army
          {botLineup}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
