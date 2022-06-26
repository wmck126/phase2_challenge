import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one

  const [bots, setBots] = useState([])

  useEffect(() => {
    fetch('http://localhost:8002/bots')
    .then(r => r.json())
    .then(data => setBots(data))
  }, [])

  function handleDeletedBot(deletedBot) {
    const updatedBots = bots.filter((robot) => robot.id !== deletedBot.id)
    setBots(updatedBots)
  }


  return (
    <div>
      <YourBotArmy />
      <BotCollection 
        bots={bots}
        onDelete={handleDeletedBot}
        />
    </div>
  )
}

export default BotsPage;
