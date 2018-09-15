function Card() {
  this.framesPlayed = 0
  this.frames = []
  this.bonuses = [0, 0]
};

Card.prototype.store = function(frame) {
  this.frames.push(frame.bowls)
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
  
};
