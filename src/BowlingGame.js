function BowlingGame(){
  this._currentScore = 0;
  this._currentFrame = 1;
  this._frames = [];
}

BowlingGame.prototype.getCurrentFrame = function() {
  return this._frames.last();
};

BowlingGame.prototype.startGame = function () {
  this.addFrame(new Frame());
};

BowlingGame.prototype.enterScore = function(score) {
  this._currentScore = score;
};

BowlingGame.prototype.addFrame = function(frame) {
  this._frames.push(frame);
};

if (!Array.prototype.last){
    Array.prototype.last = function(){
        return this[this.length - 1];
    };
}
