function Frames(frame){
  this.collection = []
  this.index = 1
  this.currentFrame = frame
}

Frames.prototype.add = function(roll) {
  if (this.isEnd()) {
    console.log("end game!")
  } else {
    this.currentFrame.add(roll)
    this.update()
  }
}

Frames.prototype.isEnd = function() {
  return (this.index > 10)
}

Frames.prototype.update = function() {
  if (this.isEndBonus() && this.currentFrame.rolls.length < 3) {
    return false
  } else if (this.currentFrame.isFull()) {
    this.collection[this.index-1] = this.currentFrame.rolls
    this.index++
    this.currentFrame.reset()
  }
}

Frames.prototype.isEndBonus = function() {
  return (this.index == 10 && this.currentFrame.allKnocked())
}
