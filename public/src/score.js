function Score(completeGame) {
  this.game = completeGame
}

Score.prototype.isStrike = function(frame) {
  return (this.sum(frame) == 10 && frame.length == 1)
}

Score.prototype.isSpare = function(frame) {
  return (this.sum(frame) == 10 && frame.length == 2)
}

Score.prototype.sum = function(frame) {
  return frame.reduce((a,b) => (a + b))
}

Score.prototype.result = function(game) {
  let total = 0
  for (let i = 0; i < game.length; i++){
    if (i < 9) {
      if (this.isStrike(game[i])) {
        total += this.strikeBonus(game.slice(i+1))
      } else if (this.isSpare(game[i])) {
        total += this.spareBonus(game[i+1])
      }
    }
    total += this.sum(game[i])
  }
  return total
}


Score.prototype.spareBonus = function(nextFrame) {
  return nextFrame[0]
}

Score.prototype.strikeBonus = function(restFrames) {
  if (this.isStrike(restFrames[0])){
    return restFrames[0][0] + restFrames[1][0]
  } else {
    return restFrames[0][0] + restFrames[0][1]
  }
}
