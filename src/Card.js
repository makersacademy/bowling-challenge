function Card() {
  this.framesPlayed = 0
  this.frames = []
  this.bonuses = [0, 0]
};

Card.prototype.store = function(frame) {
  this.frames.push(frame.bowls)
  this.applyBonuses()
  this.trackBonus(frame)
  this.framesPlayed += 1
};

Card.prototype.trackBonus = function(frame) {
  if (frame.spare) {
    this.bonuses[1] = 1
  } else if (frame.strike) {
    this.bonuses[1] = 2
  }
};

Card.prototype.applyBonuses = function() {

  ultimateFrame = this.frames[this.frames.length -1]
  penultimateFrame = this.frames[this.frames.length -2]
  antepenultimateFrame = this.frames[this.frames.length -3]

  // second element of bonuses refers to previous frame
  // current frame roll/s get pushed to previous frame
  // if current frame has one roll and previous frame bonus needs two
  //  the current frame roll is pushed to the previous frame
  //  and the first element of the bonuses array is modified
  //  to show two rounds earlier still needs a bonus roll applied

  if (this.bonuses[0]) {
    antepenultimateFrame.push(ultimateFrame[0])
    this[0] = 0
  }
  if (this.bonuses[1] === 1) {
    penultimateFrame.push(ultimateFrame[0])
    this.bonuses[1] = 0
  } else if (this.bonuses[1] === 2 && ultimateFrame.length === 2) {
    penultimateFrame.push(ultimateFrame[0])
    penultimateFrame.push(ultimateFrame[1])
    this.bonuses[1] = 0
  } else if (this.bonuses[1] === 2 && ultimateFrame.length === 1) {
    penultimateFrame.push(ultimateFrame[0])
    this.bonuses[0] = 1
  }
};
