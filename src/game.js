function Game () {
  this.rollScores = [];
}


Game.prototype.rollBall = function(pins) {
  if (this.isValidInput(pins)){
    this.rollScores.push(pins);
  } else {
    return "that is not a valid entry"
  }
}
Game.prototype.score = function() {
  var score = 0; 
  for (var rollScoresIndex = 0; rollScoresIndex < 20; rollScoresIndex+=2) {
    var thisRoll = this.rollScores[rollScoresIndex];
    var nextRoll = this.rollScores[rollScoresIndex+1];
    var secondNextRoll = this.rollScores[rollScoresIndex + 2];
    var thirdNextRoll = this.rollScores[rollScoresIndex + 3];
    if (isSpare(rollScoresIndex)) {
      score += spareScore(rollScoresIndex) 
    } else if (isStrike(rollScoresIndex)) {
      this.addZeroAfterStrike(rollScoresIndex);
      score += strikeScore(rollScoresIndex) }
    else {
      score += standardScore(rollScoresIndex)
    }
  }
  return score
  
    function isSpare(rollScoresIndex) {
      return thisRoll + nextRoll === 10;
    }
    
    function spareScore(rollScoresIndex) {
      return thisRoll + nextRoll + secondNextRoll;
    }

    function isStrike(rollScoresIndex) {
      return thisRoll === 10;
    }

    function strikeScore(rollScoresIndex) {
      return thisRoll + nextRoll + secondNextRoll;
    }  

    function standardScore(rollScoresIndex) {
      return thisRoll + nextRoll;
    }

} 


Game.prototype.isValidInput = function(pins) {
  return (pins < 11) && (pins > -1) && (pins % 1 === 0) 
}

Game.prototype.addZeroAfterStrike = function(rollScoresIndex) {
  this.rollScores.splice(rollScoresIndex + 1, 0, 0)
}

