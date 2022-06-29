import React from "react";
import BotCard from "./BotCard"


function BotCollection({bots, onDelete, onAddArmy}) {

  const botLineup = bots.map(bot => (
    <BotCard 
      bot={bot}
      key={bot.id}
      onDelete={onDelete}
      onAddArmy={onAddArmy}
      />
  ))

  return (
    <div className="ui four column grid">
      <div className="row">
        {botLineup}
      </div>
    </div>
  );
}

export default BotCollection;
