'use strict';

function Game(frameClass) {
    var defaultFrames = {frame: Frame,
                         strike: StrikeFrame,
                         spare: SpareFrame,
                         final: FinalFrame};
    this.frameClass = frameClass || defaultFrames;
    this.framesHistory = [];
}

Game.prototype = {
    _currentFrame: function () {
      return this.framesHistory[this.framesHistory.length-1]
    },
    _nextFrameType: function () {
      if (this.framesHistory.length === 0) {return 'frame'}
      else if (this.framesHistory.length === 9) {return 'final'}
      else {return this._currentFrame().frameResult()}
    },
    nextFrame: function () {
      this.framesHistory.push(new this.frameClass[this._nextFrameType()]());
    },
    addScore: function (score) {
      this._currentFrame().addScore(score);
    },
    calculateGameScore: function () {
      var scores = this.framesHistory.map(
        function(frame){ return frame.calculateScore()}
      );
      return scores.reduce(function(a, b) { return a + b; }, 0);
    },
    displaySymbols: function(position){
      var currentFrame = this._currentFrame();
      var currentSymbols = currentFrame.getDisplaySymbols();
      return currentSymbols[position];
    }
};
