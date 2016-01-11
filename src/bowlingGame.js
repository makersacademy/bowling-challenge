function Game() {
  this._frames = [];
  this._score = 0;
}

Game.prototype.addFrame = function(frame){
  this._frames.push(frame);
  this._score += frame._rolls[0];
  this._score += frame._rolls[1];
  if(this._frames.length > 1) {
    if((this._frames[this._frames.length - 2]).isSpare()){
      this._score += frame._rolls[0];
    }
  }
};

function Frame() {
  this._pins = 10;
  this._rolls = [];
  this._frameScore = 0;
  this._bonus = null;
}

Frame.prototype.bowl = function(pinsdowned){
  if(this._rolls.length >= 2){
    throw new TypeError("You have used all your rolls in this frame");
  } else {
    this._pins -= pinsdowned;
    this._rolls.push(pinsdowned);
  }

  if(this.isSpare() === true) {
    this._bonus = "spare";
  } else {
    this._frameScore += pinsdowned;

  }
};

Frame.prototype.isSpare = function(){
  if(this._pins === 0 && this._rolls.length === 2){
    return true;
  } else {
    return false;
  }
};
