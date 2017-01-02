function Game() {

 this.frames = [];

  Game.prototype.newFrame = function(){
    this.frame = new Frame();
  }

  Game.prototype.getCurrentFrame = function() {
    var current;
    if(this.frames.length>0) { current = this.frames[this.frames.length-1]; }

    if(undefined==current || current.isDone()) {
      current = new Frame();
      this.frames.push(current);
    }

    return current;
  };

  Game.prototype.getFrameIndex = function() {
    return this.frames.length;
  };

  Game.prototype.getFrameScore = function() {
    var current = this.getCurrentFrame();
    if (current.secondScore === 0) {
      return current.firstScore;
    } else {
      return current.firstScore + current.secondScore;
    }
  };

Game.prototype.getPreviousFrame = function() {
  if(this.frames.length<2) { return null; }

  return this.frames[this.frames.length-2];
};

  Game.prototype.getPreviousScore = function(previous, current) {
    if (previous.firstScore === 10) {
      return +previous.firstScore + +previous.secondScore + +current.firstScore + +current.secondScore;
    } else if (+previous.firstScore + +previous.secondScore === 10) {
      return +previous.firstScore + +previous.secondScore + +current.firstScore + +current.secondScore;
    } else {
      return +previous.firstScore + +previous.secondScore;
    }
  };

  Game.prototype.bowl = function(pins) {
    var current = this.getCurrentFrame();
    current.bowl(pins);
  }

}
