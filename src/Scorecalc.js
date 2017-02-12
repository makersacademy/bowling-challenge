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
