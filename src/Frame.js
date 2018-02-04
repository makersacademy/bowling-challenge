function Frame(lastFrame = false) {
  this._ballsRemaining = 2
  this._lastFrame = lastFrame
  this._ball1 = 0
  this._ball2 = 0
  this._ball3 = 0
  this._bonusBalls = 0
  this._score = 0
  this._ballInPlay = 0
};

Frame.prototype.isComplete = function() {
  return ( this._ballsRemaining === 0 ? true : false ) ;
};

Frame.prototype._decode = function(pins) {
  switch (pins) {
      case "X": return 10; break;
      case "/": return 10; break;
      case "-": return 0; break;
      default: return parseInt(pins)
  }
};

Frame.prototype._addBallScore = function(pins) {
  if (this._ballInPlay === 1) {this._ball1 = pins};
  if (this._ballInPlay === 2) {this._ball2 = pins};
  if (this._ballInPlay === 3) {this._ball3 = pins};
};

Frame.prototype._validateFrameScore = function(pins){
  if ( !this._lastFrame && this._ballInPlay <= 2 && this._score + this._decode(pins) > 10){
    throw new Error('Score for this game should not exceed 10')
  } else
  if ( this._lastFrame && this._ballInPlay === 2 && this._score + this._decode(pins) > 20){
    throw new Error('Score for this game should not exceed 20')
  } else
  if ( this._lastFrame && this._ballInPlay === 3 && this._score + this._decode(pins) > 30){
    throw new Error('Score for this game should not exceed 30')
  };
};

Frame.prototype.addScore = function(pins) {
  this._validateFrameScore(pins)
  this._addBallScore(pins);
  this._score += this._decode(pins);
};

Frame.prototype.isStrike = function() {
  return (this._score === 10
          && this._ballInPlay === 1
          ? true: false );
};

Frame.prototype.isSpare = function() {
  return (this._score === 10
          && this._ballInPlay === 2
          ? true: false );
};

Frame.prototype._scoreType = function() {
  if ( this.isStrike() ) {return "Strike"};
  if ( this.isSpare() ) {return "Spare"};
  return "default";
}

Frame.prototype._validatePlay = function(pins){

  if (this.isComplete()) {throw new Error('This game is complete')};

  valid_scores = ["-","/","X",0,1,2,3,4,5,6,7,8,9,10];
  if (!valid_scores.includes(this._decode(pins))) {throw new Error('Invalid score: ' + pins)};
};

Frame.prototype.play = function(pins = "-") {
  this._validatePlay(pins);
  this._ballInPlay += 1;
  this.addScore(pins);
  switch (this._scoreType()) {
    case "Strike":
      this._bonusBalls = 2;
      this._ballsRemaining = ( this._lastFrame ? 2 : 0);
      break;
    case "Spare":
      this._bonusBalls = 1;
      this._ballsRemaining = ( this._lastFrame ? 1 : 0);
      break;
    default:
      this._bonusBalls = 0;
      this._ballsRemaining -= 1;
  }
};
