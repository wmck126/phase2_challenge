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
    for (const i of botArmy) {
      if (i === addedBot) return (alert("Can only add the same robot once!"))
    }
    setBotArmy([...botArmy, addedBot])
  }

  function takeOutOfService(badBot) {
    setBotArmy(botArmy.filter(bot => (bot !== badBot)))
  }

  const filteredBots = bots.filter(bot => {
    for (const i of botArmy) {
      if (i === bot.id) return true
    }
    return false
  })

  return (
    <div>
      <YourBotArmy botArmy={filteredBots} takeOutOfService={takeOutOfService}/>
      <BotCollection 
        bots={bots}
        onDelete={handleDeletedBot}
        onAddArmy={handleBotArmy}
        />
    </div>
  )
}

export default BotsPage;
