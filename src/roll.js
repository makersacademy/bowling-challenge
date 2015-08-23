var Roll = function Roll() {
  this.potentialHits = [0,1,2,3,4,5,6,7,8,9,10]
  this.counter = 0
  this.firstRoundScore = 0
};

Roll.prototype.getRandomNumber = function() {
  var roll = new Roll();
  return roll.potentialHits[Math.floor(Math.random() * roll.potentialHits.length)];
};

Roll.prototype.firstRound = function() {
  return this.firstRoundScore = this.getRandomNumber();
};