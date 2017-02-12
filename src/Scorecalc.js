var self = this;

function Scorecalc() {
  self = this;
  self.bonusScore = 0;
  self.scoreboard = {};
  self._totalScore = 0;
}

Scorecalc.prototype.updateScoreBoard = function(frame, rolls){
  if(self.bonusScore > 0){
    self.scoreboard["Frame" + (frame -1)][1] = 10 + self.bonusScore
  }
    self.scoreboard["Frame" + frame] = [rolls, self.frameScoreCalc(rolls)];
}

Scorecalc.prototype.frameScoreCalc = function(rolls){
  var sum = rolls.reduce(function(a, b) { return a + b; }, 0);
  return sum;
}

Scorecalc.prototype.addBonus = function(pins){
    self.bonusScore += pins;
}

Scorecalc.prototype.resetBonus = function(){
  self.bonusScore = 0;
}

Scorecalc.prototype.updateTotalScore = function(frame){
  self._totalScore += (self.scoreboard["Frame" + frame][1] + self.bonusScore);
}

Scorecalc.prototype.gutterGame = function(){
  if (self._totalScore === 0){
    return true
  }
}

Scorecalc.prototype.perfectGame = function(){
  var perfectCheck = []
  for(var i = 1; i < 10; i++){
      console.log(self.scoreboard["Frame" + i][0])
      perfectCheck.push(self.scoreboard["Frame" + i][0][0])
    }
  for(var p = 1; p <= perfectCheck.length; p++){
    if(perfectCheck[p] !== 10) {
      return false;
    }
  }
  return true;
}
