function Game() {
  this._frames = [];
  this._score = 0;
}

Game.prototype.addFrame = function(frame){
  this._frames.push(frame);
  this._score += frame._rolls[0];

  if(frame._rolls[0] != 10) {
    this._score += frame._rolls[1];
  }

  if(this._frames.length > 1) {
    if((this._frames[this._frames.length - 2]).isSpare()){
      this._score += frame._rolls[0];
    }
    if((this._frames[this._frames.length - 2]).isStrike()) {
      this._score += frame._rolls[0];
      if(frame._rolls[0] != 10) {
        this._score += frame._rolls[1];
      }
    }
  }

  if(this._frames.length > 2) {
    if((this._frames[this._frames.length - 3]).isStrike &&  (this._frames[this._frames.length - 2]).isStrike) {
      this._score += frame._rolls[0];
    }
  }
  if(frame._tenthFrame === true) {
    if(frame.isSpare()){
      this._score += frame._rolls[2];
    }
    if(frame.isStrike()){
      this._score += frame._rolls[1];
      this._score += frame._rolls[2];
    }
  }

};

function Frame(tenthFrame) {
  this._pins = 10;
  this._rolls = [];
  this._tenthFrame = tenthFrame;
}

Frame.prototype.bowl = function(pinsdowned){

  if(this._rolls.length >= 2) {
    if(this._tenthFrame && (this.isSpare() || this.isStrike())) {
      if(this._rolls.length >= 3) {
        throw new TypeError("You have used all your rolls in this frame");
      }
    } else {
      throw new TypeError("You have used all your rolls in this frame");
    }
  }

  if(this.isStrike()){
    if(this._tenthFrame && this._rolls.length >= 3){
      throw new TypeError("You have used all your rolls in this frame");
    }
  }

  this._frameScore += pinsdowned;
  this._pins -= pinsdowned;
  this._rolls.push(pinsdowned);
};

Frame.prototype.isSpare = function(){
  if(this._rolls[0]+this._rolls[1] === 10){
    return true;
  } else {
    return false;
  }
};

Frame.prototype.isStrike = function() {
  if(this._rolls[0] === 10) {
    return true;
  } else {
    return false;
  }
};
