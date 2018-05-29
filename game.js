//It is ugly but it finally works!
function Game () {
  this.frames = []
  this.currentFrame = -1
  this.scoreCard = {}
  this.gameOver = false
}

Game.prototype.addFrame = function () {
  this.frames.push([])
  this.currentFrame ++
}

Game.prototype.throwBall = function (num) {
  if (this.gameOver) {
    console.log('illegal throw - game is finished')
    return
  }
  if (this.currentFrame !== 9 && this.frames[this.currentFrame].length ===  1 && num + this.frames[this.currentFrame][0] !== 10) {
    this.frames[this.currentFrame].push(num)
    this.score(this.frames[this.currentFrame])
    this.addFrame()
    return
  }
  if (this.currentFrame !== 9 && this.frames[this.currentFrame].length ===  0 && num === 10){
    this.frames[this.currentFrame].push(num)
    this.score(this.frames[this.currentFrame])
    this.addFrame()
    return
  }
  if (this.currentFrame !== 9 && this.frames[this.currentFrame].length === 1 && num + this.frames[this.currentFrame][0] === 10) {
    this.frames[this.currentFrame].push(num)
    this.score(this.frames[this.currentFrame])
    this.addFrame()
    return
  }
  if (this.currentFrame === 9 && this.frames[this.currentFrame].length === 0 && num === 10) {
    this.frames[this.currentFrame].push(num)
    this.score(this.frames[this.currentFrame])
    return
  }
  if (this.currentFrame === 9 && this.frames[this.currentFrame].length === 0 && num !== 10) {
    this.frames[this.currentFrame].push(num)
    this.score(this.frames[this.currentFrame])
    console.log('Coming to end')
    return
  }
  if (this.currentFrame === 9 && this.frames[this.currentFrame].length === 1 && num === 10) {
    this.frames[this.currentFrame].push(num)
    this.score(this.frames[this.currentFrame])
    return
  }
  if (this.currentFrame === 9 && this.frames[this.currentFrame][0] !== 10 && this.frames[this.currentFrame].length === 1 && num !== 10 && this.frames[this.currentFrame][0] + num !== 10 ) {
    this.frames[this.currentFrame].push(num)
    this.score(this.frames[this.currentFrame])
    console.log('Game Over')
    this.gameOver = true
    return
  }
  if (this.currentFrame === 9 && this.frames[this.currentFrame][0] !== 10 && this.frames[this.currentFrame].length === 1 && num !== 10 && this.frames[this.currentFrame][0] + num === 10 ) {
    this.frames[this.currentFrame].push(num)
    this.score(this.frames[this.currentFrame])
    return
  }
  if (this.currentFrame === 9 && this.frames[this.currentFrame].length === 2) {
    this.frames[this.currentFrame].push(num)
    this.score(this.frames[this.currentFrame])
    this.gameOver = true
    return
  }
  this.frames[this.currentFrame].push(num)
}

Game.prototype.score = function (frame) {

  this.scoreCard[this.frames.indexOf(frame)] = frame.reduce(function (acc, val) { return acc + val })

  if (this.currentFrame !== 9 && this.frames.indexOf(frame) - 1 >= 0) {
    if (this.frames[this.frames.indexOf(frame) - 1][0] === 10 && frame.length === 2) {
      this.scoreCard[this.frames.indexOf(frame) - 1] += frame[0] + frame[1]
    }
    if (this.frames[this.frames.indexOf(frame) - 1][0] === 10 && frame[0] === 10) {
      this.scoreCard[this.frames.indexOf(frame) - 1] += frame[0]
    }
    if (this.frames.indexOf(frame) - 2 >= 0 && this.frames[this.frames.indexOf(frame) - 2].length === 1 && this.frames[this.frames.indexOf(frame) - 1].length === 1) {
      this.scoreCard[this.frames.indexOf(frame) - 2] += frame[0]
    }
    if (this.frames[this.frames.indexOf(frame) - 1].length === 2 && this.scoreCard[this.frames.indexOf(frame) - 1] === 10) {
      this.scoreCard[this.frames.indexOf(frame) - 1] += frame[0]
    }
  }
  if (this.currentFrame === 9) {
    if (this.frames[8][0] === 10 && frame.length === 1) {
      this.scoreCard[8] += frame[0]
    }
    if (this.frames[8][0] === 10 && frame.length === 2) {
      this.scoreCard[8] += frame[1]
    }
    if (this.frames[7].length === 1 && this.frames[8].length === 1 && frame.length === 1) {
      this.scoreCard[this.frames.indexOf(frame) - 2] += frame[0]
    }
    if (this.frames[8].length === 2 && this.scoreCard[8] === 10) {
      this.scoreCard[this.frames.indexOf(frame) - 1] += frame[0]
    }
  }
}

var game = new Game()

game.addFrame()
//frame 0
game.throwBall(2)
game.throwBall(8)

//frame 1
game.throwBall(10)

//frame 2
game.throwBall(10)

//frame 3
game.throwBall(10)
//frame 4
game.throwBall(10)
//frame 5
game.throwBall(10)
//frame 6
game.throwBall(10)

//frame 7
game.throwBall(10)

//frame 8
game.throwBall(10)
//frame 9
game.throwBall(1)
game.throwBall(8)

console.log('Frames: ')
for (var frame of game.frames) { console.log(game.frames.indexOf(frame), frame) }
console.log('Score: \n', game.scoreCard)