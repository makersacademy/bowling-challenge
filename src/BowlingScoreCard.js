function Frame() {
  this.id = 0
  this.struck = false
  this.spared = false
  this.array = []
  this.score = this.array.reduce
}



function Game() {
  this.frames = []
  this.latestFrameIndex = ((this.frames.length - 1) < 0) ? (this.frames.length) : (this.frames.length - 1)
  this.strike = false
}

var game = new Game()

Game.prototype.roll = function(pins) {
  pins
}

Game.prototype.ThereIsOneElementInTheFrame = function() {
  if (this.frames.length === 0) {
    return false
  } else if (this.frames[this.frames.length - 1].array.length === 1) {
    return true
  } else {
    return false
  }
}

Game.prototype.rollValidity = function (pins) {
  pinsLeft = 10 - this.frames[this.frames.length - 1].array[0]
  if (pins > pinsLeft) {
    throw new Error('There are fewer pins standing')
  } else {
    "ok"
  }
}

Game.prototype.createFrame = function(pins) {
  newFrame = new Frame();
  newFrame.id += 1
  newFrame.array.push(pins)
  this.frames.push(newFrame)
}


Game.prototype.checkFrame = function() {
  if (this.frames.length === 0) {
    return 10;
  } else if (this.frames.length === 0) {
    return 0;
  } else {
    return (this.frames.length)
  }
};

Game.prototype.completeFrame = function(pins) {
  this.frames[this.frames.length - 1].array.push(pins)
}

Game.prototype.isItStrike = function() {
  if (this.frames[this.frames.length - 1].array[0] === 10) {
    this.frames[this.frames.length - 1].array.push(0)
    return true
  } else {
    return false
  }
}

Frame.prototype.isItAStruckFrame = function() {
  if (game.frames.length === 0) {
    this.struck = false
  } else if ( game.frames[0].array.length === 1) {
    this.struck = false
  } else if ( game.frames[game.frames.length - 2].array[0] === 10 ) {
    this.struck = true
  } else {
    this.struck = false
  }
}

Frame.prototype.isItASparedFrame = function() {
  if (game.frames.length === 0) {
    this.struck = false
  } else if ( game.frames[0].array.length === 1) {
    this.struck = false
  } else if ( ((game.frames[game.frames.length - 2].array[0] + game.frames[game.frames.length - 2].array[1]) === 10 ) && ( game.frames[game.frames.length - 2].array[0] !== 10 ) ) {
    this.spared = true
  } else {
    this.spared = false
  }
}

Game.prototype.play = function(pins) {
  if (this.ThereIsOneElementInTheFrame() === true) {
    this.roll(pins)
    this.rollValidity(pins)
    this.completeFrame(pins)
  } else {
    this.roll(pins)
    this.createFrame(pins)
    this.frames[this.frames.length - 1].isItAStruckFrame()
    this.frames[this.frames.length - 1].isItASparedFrame()
    this.isItStrike()
  }
}