function Score(game) {
  this._game = game;
  this.gameScore = [];
  this.frameScore = [];
}

Score.prototype.calculate = function() {

  var frameScore;

  (this._game).forEach(function (frame, index) {

  if (frame.length === 1 && (this._game)[index+1][0] === 10){
    frameScore = 10 + 10 + (this._game)[index+2][0];
    this.addFrameScore(frameScore); }

  else if (frame.length === 1) {
    frameScore = (10 + (this._game)[index+1][0] + (this._game)[index+1][1]);
    this.addFrameScore(frameScore); }

  else if (frame[0] + frame[1] < 10) {
    frameScore = frame[0] + frame[1];
    this.addFrameScore(frameScore);}

  else if (frame[0] + frame[1] === 10) {
    frameScore = 10 + (this._game)[index+1][0];
    this.addFrameScore(frameScore);}

});
};

Score.prototype.gameScore = function() {
  return this.gameScore;
};




Score.prototype.addFrameScore = function (score) {
  this.gameScore.push(score);
};
