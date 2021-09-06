document.addEventListener('DOMContentLoaded', () => {
  const game = new Game();


  const updateRollsRow = () => {
    const id='frame' + game.scoring.frameCounter + 'Rolls'
    newRollsCell = document.createElement('td')
    newRollsCell.setAttribute("id", id)
    document.querySelector('#rolls').appendChild(newRollsCell)

    const scoreBoard = new ScoreBoard(
      game.scoring.currentFrame,
      game.scoring.arrayOfScores
    )

    newRollsCell.innerText = scoreBoard.displayRolls()
  };

  const updateScoresRow = () => {
    frameCount = game.scoring.frameCounter
    const scoreBoard = new ScoreBoard(
      game.scoring.currentFrame,
      game.scoring.arrayOfScores
    )

    for (let i = 1; i <= frameCount; i++) {
      id=`frame${i}Score`
      document.getElementById(id).innerText = scoreBoard.displayScores()[i-1]
    }

    document.querySelector('#totalScore').innerText = scoreBoard.runningTotal()
  };

  const bonusRolls = () => {
    for (let i=1; i <= game.bonusRollsAwarded; i++) {
      bonusRollInput = document.createElement('input')
      bonusRollInput.setAttribute("type", "text")
      bonusRollInput.setAttribute("id", `${i}`)
      bonusRollInput.setAttribute("placeholder",`Enter bonus roll ${i} score...`)
      document.querySelector('#bonusRolls').appendChild(bonusRollInput)
      document.querySelector('#bonusRolls').appendChild(document.createElement('br'))
    }
    submitBonusRolls = document.createElement('button')
    submitBonusRolls.setAttribute("id","submitBonusRolls")
    submitBonusRolls.setAttribute("type","button")
    submitBonusRolls.innerText = "Submit bonus role scores"
    document.querySelector('#bonusRolls').appendChild(submitBonusRolls)
    document.querySelector('#rollInput').removeChild(document.getElementById("submitScore"))
  };

  document.querySelector('#submitScore').addEventListener("click", () => {
    const rollOne = document.getElementById("rollOneScoreInput").value
    const rollTwo = document.getElementById("rollTwoScoreInput").value
    
    const validation = new Validation(rollOne,rollTwo)

    if (validation.isValid()) {
      
  
      game.gamePlay(rollOne, rollTwo)
  
      updateRollsRow()
      updateScoresRow()
  
      if (game.scoring.frameCounter === 10) { bonusRolls() }
     
      document.getElementById("rollOneScoreInput").value = ''
      document.getElementById("rollTwoScoreInput").value = ''

      console.log(game.scoring.frameCounter)
      console.log(game.bonusRollsAwarded)
    } else {
      alert("Invalid input, please enter a number between 0 and 10 for both rolls");
    }

  });


  document.querySelector('#submitBonusRolls').addEventListener("click", () => {
    const finalScore = scoreBoard.runningTotal() + 10

    for (let i=1; i <= game.bonusRollsAwarded; i++) {
      const bonusRoll = Number(document.getElementById(`${i}`).value)
      finalScore + bonusRoll
    }
    document.querySelector('#totalScore').innerText = finalScore
    
  });
  

  

});