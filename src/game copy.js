var Game = function(arrayOfRolls){
  this.arrayOfRolls = arrayOfRolls
  this.allFrames = []
  this.rolls = []
  this.asignInputToFrames(this.arrayOfRolls);
};

Game.prototype.asignInputToFrames = function() {
  while(this.arrayOfRolls.length > 0){
    var frame = new Frame();
    // console.log(frame)
    this.putRollIn(frame);
    if (!frame.is_over){
      this.putRollIn(frame);
    }
    this.allFrames.push(frame);
  };
};

Game.prototype.putRollIn = function(frame) {
  var currRoll = this.arrayOfRolls.shift();
  frame.roll(currRoll)
  this.rolls << currRoll
};


// could I split below here into a score card class
// and above into a frame sorting class

//score card class would take an int n and an array of frames with rolls in

Game.prototype.scoreForFrame = function(n) {
  var upToN = new Array(n);
  var cumulativeScore = 0;

  for(var i=0;i<upToN.length;i++){
    if (this.allFrames[i].spare){
      cumulativeScore += this.allFrames[i + 1].rolls[0]
    }
    if (this.allFrames[i].strike){
      cumulativeScore += this.strikeBonus(i);

    }
    cumulativeScore += this.allFrames[i].score
  }
  return cumulativeScore;
};

Game.prototype.strikeBonus = function(i) {
    if(this.allFrames[i + 1]){
      return (this.allFrames[i + 1].score + this.allFrames[i + 2].rolls[0]);
    }else{
      return this.allFrames[i + 1].score;
    }
};


var ScoreCard = function(n, frames){
  this.allFrames = frames;
  var upToN = new Array(n);
  var cumulativeScore = 0;
  for(var i=0;i<upToN.length;i++){
    if (this.allFrames[i].spare){
      cumulativeScore += this.allFrames[i + 1].rolls[0]
    }
    if (this.allFrames[i].strike){
      cumulativeScore += this.strikeBonus(i);

    }
    cumulativeScore += this.allFrames[i].score
  };
  this.score = cumulativeScore
}; 

ScoreCard.prototype.strikeBonus = function(i) {
    if(this.allFrames[i + 1]){
      return (this.allFrames[i + 1].score + this.allFrames[i + 2].rolls[0]);
    }else{
      return this.allFrames[i + 1].score;
    }
};