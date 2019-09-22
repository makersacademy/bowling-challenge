function Game(numbers) {
  this.score = 0
  this.numbers = numbers
  this.currentGameState = 'standard'
}

Game.prototype.play = function () {
  for (let i = 0; i < 10; i++) {
    this.addRolls(numbers[i], this.currentGameState)
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
    return (numbers[10][0] * 2 + numbers[10][1])
  } else if (this.numbers[9][0] === 10) {
    return (numbers[10][0] + numbers[10][1])
  } else if (this.numbers[9][1] + this.numbers[9][0] === 10) {
    return (numbers[10][0])
  } else {
    return 0
  }
}

numbers = [[2, 3], [4, 2], [5, 2], [3, 1], [8, 1], [7, 2], [6, 3], [5, 2], [4, 1], [1, 6]]
game = new Game(numbers)

game.play()






