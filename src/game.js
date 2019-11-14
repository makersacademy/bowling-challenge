function Game(numbers) {
  this.score = 0
  this.numbers = numbers
  this.currentGameState = 'standard'
}

[[4, 5], [5, 5], [6, 2]]

Game.prototype.play = function () {
  for (let i = 0; i < 10; i++) {
    this.addRolls(this.numbers[i], this.currentGameState)
  }
  this.score += this.checkFinalRoll()
  return this.score
}

Game.prototype.addRolls = function (frame, currentGameState) {
  if (currentGameState === 'doubleStrike') {
    this.score += (frame[0] * 3 + frame[1] * 2)
  } else if (currentGameState === 'strike') {
    this.score += (frame[0] * 2 + frame[1] * 2)
  } else if (currentGameState === 'spare') {
    this.score += (frame[0] * 2 + frame[1])
  } else {
    this.score += (frame[0] + frame[1])
  }
  this.updateGameState(frame)
}

Game.prototype.updateGameState = function (frame) {
  if (frame[0] === 10 && (this.currentGameState === 'strike' || this.currentGameState === 'doubleStrike')) {
    this.currentGameState = 'doubleStrike'
  } else if (frame[0] === 10) {
    this.currentGameState = 'strike'
  } else if (frame[0] + frame[1] === 10) {
    this.currentGameState = 'spare'
  } else {
    this.currentGameState = 'standard'
  }
}

Game.prototype.checkFinalRoll = function () {
  if (this.numbers[9][0] === 10 && this.numbers[8][0] === 10) {
    return (this.numbers[10][0] * 2 + this.numbers[10][1])
  } else if (this.numbers[9][0] === 10) {
    return (this.numbers[10][0] + this.numbers[10][1])
  } else if (this.numbers[9][1] + this.numbers[9][0] === 10) {
    return (this.numbers[10][0])
  } else {
    return 0
  }
}