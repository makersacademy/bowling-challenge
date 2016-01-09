function Game() {
  this._frames = [];
  this._score = 0;
}

Game.prototype.addFrame = function(frame){
  this._frames.push(frame);
  this._score += frame._frameScore;
}

function Frame() {
  this._pins = 10
  this._rolls = 0
  this._frameScore = 0
}

Frame.prototype.bowl = function(pinsdowned){
  if(this._rolls >= 2){
    throw new TypeError("You have used all your rolls in this frame");
  } else {
    this._pins -= pinsdowned;
    this._rolls += 1;
  }
  if(this.isSpare === true) {
    this._bonus = "spare"
  } else {
    this._frameScore += pinsdowned

  }
};

Frame.prototype.isSpare = function(){
  if(this._pins === 0 && this._rolls === 2){
    return true;
  } else {
    return false;
  }
};
