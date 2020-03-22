function Frames(rolls) {
  this.rolls = rolls;
  this.frameTotal = 0
}

Frames.prototype.calculateFrameTotal = function(frame, nextFrame, nextNextFrame) {
  if(isStrike(frame, nextFrame)) { // this will be a strike 
    this.frameTotal = eval(frame.join('+')) + eval(nextFrame.join('+'))
  } else if (isDoubleStrike(frame, nextFrame)) { // this will be a double strike 
    this.frameTotal = frame[0] + nextFrame[0] + nextNextFrame[0]
  } else if (isSpare(frame)) {// this will be a spare
    this.frameTotal = eval(frame.join('+')) + nextFrame[0]
  } else { // this will be any other normal score, no spare or strike
    this.frameTotal = eval(frame.join('+')) 
  }
}

Frames.prototype.lastFrameTotal = function() {
  if (this.rolls.length === 3) {
    return this.frameTotal = this.rolls[0] + this.rolls[1] + this.rolls[2]  
  } else {
    return this.frameTotal = this.rolls[0] + this.rolls[1] 
  }
}

function isSpare(frame) {
  return eval(frame.join('+')) === 10
}

function isDoubleStrike(frame, nextFrame) {
  return frame[0] === 10 && nextFrame[0] === 10
}

function isStrike(frame, nextFrame) {
  return frame[0] === 10 && nextFrame[0] !== 10
}

