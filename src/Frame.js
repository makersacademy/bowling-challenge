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

Frame.prototype.bonusBalls = function() {
  return this._bonusBalls;
};

Frame.prototype.lastFrame = function() {
  return this._lastFrame;
};
Frame.prototype.score = function(pins) {
  return this._score
};

Frame.prototype.isComplete = function() {
  return ( this._ballsRemaining === 0 ? true : false ) ;
};

Frame.prototype.ballsRemaining = function() {
  return this._ballsRemaining;
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

Frame.prototype.addScore = function(pins) {
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
Frame.prototype._validate = function(pins = "-") {
}
Frame.prototype.play = function(pins = "-") {
  this._validate();
  this._ballInPlay += 1;
  this.addScore(pins);
  switch (this._scoreType()) {
    case "Strike":
  // console.log("Strike");
      this._bonusBalls = 2;
      this._ballsRemaining = ( this.lastFrame() ? 2 : 0);
      break;
    case "Spare":
// console.log("Spare");
      this._bonusBalls = 1;
      this._ballsRemaining = ( this.lastFrame() ? 1 : 0);
      break;
    default:
      this._bonusBalls = 0;
      this._ballsRemaining -= 1;
// console.log("default");
  }
};
