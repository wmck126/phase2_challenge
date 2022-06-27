import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one

  const [bots, setBots] = useState([])
  const [botArmy, setBotArmy] = useState([])

  useEffect(() => {
    fetch('http://localhost:8002/bots')
    .then(r => r.json())
    .then(data => setBots(data))
  }, [])

  function handleDeletedBot(deletedBot) {
    const updatedBots = bots.filter((robot) => robot.id !== deletedBot.id)
    setBots(updatedBots)
  }

  function handleBotArmy(addedBot) {
    console.log("Added to army", addedBot)
    // const updatedBots = bots.filter((addBot) => addBot.id !== addedBot.id)
    // setBots(updatedBots)
    
    setBotArmy([...botArmy, addedBot])
    
  }

  console.log("bots in the army: ",botArmy)

  return (
    <div>
      <YourBotArmy botArmy={botArmy}/>
      <BotCollection 
        bots={bots}
        onDelete={handleDeletedBot}
        onAddArmy={handleBotArmy}
        />
    </div>
  )
}

export default BotsPage;
