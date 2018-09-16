function Card() {
  this.framesPlayed = 0
  this.frames = []
  this.bonuses = [0, 0]
};

Card.prototype.store = function(frame) {
  this.frames.push(frame.bowls)
  // apply bonuses for the last frame before storing bonus for current frame
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

  // adds first bowl of recent round to frame two before, only happens
  // when two strikes occur in a row
  if (this.bonuses[0]) {
    antepenultimateFrame.push(ultimateFrame[0])
    this.bonuses[0] = 0
  }

  // adds bonus to previous frame
  //   if previous frame was spare, adds first roll
  if (this.bonuses[1] === 1) {
    penultimateFrame.push(ultimateFrame[0])
    this.bonuses[1] = 0
  }
  //   if prevous frame was strike and most recent was not
  else if (this.bonuses[1] === 2 && ultimateFrame.length === 2) {
    penultimateFrame.push(ultimateFrame[0])
    penultimateFrame.push(ultimateFrame[1])
    this.bonuses[1] = 0
  }
  // if previous frame was strike and most recent was strike
  //   recent frames roll is pushed to previous frames score
  //   next frames first roll will be added by the first if statement
  else if (this.bonuses[1] === 2 && ultimateFrame.length === 1) {
    penultimateFrame.push(ultimateFrame[0])
    this.bonuses[0] = 1
  }
};
