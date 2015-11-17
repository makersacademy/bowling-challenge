function Bowling(frame, numberOfFrames) {

  this.gameFrames = [];
  this.rolls = [];
  this.bonusIndexes = [];
  for (var i = 0; i < numberOfFrames; i++) {
    this.gameFrames.push(new frame);
  }

}

Bowling.prototype.roll = function (number) {
  this.rolls.push(number);
  var frameToHit = this.gameFrames.filter( function(frame) { return !frame.isOver() })[0]
  frameToHit.hit(number);
  if(frameToHit.isStrike()){
    this.bonusIndexes.push(this.rolls.length);
    this.bonusIndexes.push(this.rolls.length + 1);
  } else if(frameToHit.isSpare()){
    this.bonusIndexes.push(this.rolls.length);
  };
};

Bowling.prototype.bonusScore = function () {
  x = this.bonusIndexes.map(function(item){
    return this.rolls[item];
  });
  console.log(x);
  x.reduce(function(item, sum){
    return item + sum;
  });
};

Bowling.prototype.score = function() {

  var rolls = this.rolls;
  var bonusTotal = this.bonusIndexes.map(function(item){return rolls[item]}).reduce(function(item, sum){
    return item + sum;
  });

  var rollTotal = this.rolls.reduce( function(item, sum) {
    return item + sum;
  });

  return(bonusTotal + rollTotal);
};
