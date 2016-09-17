function Game(frameClass) {
  this.frameClass = frameClass;
  this.framesHistory = [];
}

Game.prototype = {
  _currentFrame: function(){
    return this.framesHistory[this.framesHistory.length-1]
  },
  _nextFrameType: function(){
    if (this.framesHistory.length == 0) {return}
    else if (this.framesHistory.length == 9) {return 'final'}
    else {return this._currentFrame().frameResult()}
  },
  nextFrame: function() {
    this.framesHistory.push(new this.frameClass(this._nextFrameType()));
  },
  addScore: function(score) {
    this._currentFrame().addScore(score);
  },
  calculateGameScore: function() {
    scores = this.framesHistory.map(function(frame){ return frame.calculateScore() });
    return scores.reduce( ( acc, cur ) => acc + cur, 0 );
  }
};
