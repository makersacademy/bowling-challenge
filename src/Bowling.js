function Bowling() {
  this.frames = [];
  this.framesScores = [];
  this.strikeBonuses = [];
  this.spareBonuses = [];
  this.pins1 = [];
  this.pins2 = [];
  this.frameTotal = 0;
}

Bowling.prototype.addFrame = function() {
  this.frames.push(1);
};

Bowling.prototype.playRoll = function(index) {
  if (index == 1) {
    var pins1 = Math.floor(Math.random() * 11);
    this.pins1.push(pins1);
    return pins1;
  }
  if (index == 2) {
    var pins2 = Math.floor(Math.random() * (11 - this.pins1));
    this.pins2.push(pins2);
    //this.addFrame();
    return pins2;
  }
};

// Bowling.prototype.currentRoll = function() {
//   if (index === 1) {
//     return 1;
//   }
//   if (index === 2) {
//     return 2;
//   }
// };

Bowling.prototype.currentFrame = function() {
  return (this.frames.length + 1);
};

Bowling.prototype.currentFramePoints = function() {
  if (this.currentFrame()-1 === this.frames.length){
    this.frameTotal = this.pins1 + this.pins2;
    this.framesScores.push(this.frameTotal);
    return this.frameTotal;
  }
  if (this.currentFrame() === this.frames.length){
  this.frameTotal = this.pins1;
  }
};

Bowling.prototype.isAStrike = function() {
  return (this.pins1 === 10);
};

Bowling.prototype.strikeBonus = function() {
  var bonus = this.framesScores[(this.currentFrame()+1)];
  this.strikeBonuses.push(bonus);
  return bonus;
};

Bowling.prototype.isASpare = function() {
  return (this.currentFramePoints() === 10);
};

Bowling.prototype.spareBonus = function() {
  var bonus = this.pins1[this.frames.length];
  this.spareBonuses.push(bonus);
  return bonus;
};

Bowling.prototype.calculateScore = function() {
  var score = (this.framesScores.reduce(add, 0)) + (this.spareBonuses.reduce(add, 0)) + (this.strikeBonuses.reduce(add, 0));
  return score;
};

function add(a, b) {
    return a + b;
};

Bowling.prototype.isGutterGame = function() {
  return (this.calculateScore() === 0);
};

Bowling.prototype.isPerfectGame = function() {
  return (this.calculateScore() === 300);
};
