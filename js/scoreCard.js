function ScoreCard() {
   this.frames = []
};

ScoreCard.prototype = {
   recordScore: function(pinsHit) {
      if (this.isGameEnded()) {
         throw new Error('Game already ended');
      }

      var currentFrame = this._currentFrame();

      if (currentFrame === undefined || currentFrame.isEnded()) {
         currentFrame = new Frame();
         this.frames.push(currentFrame);
      } 
      
      currentFrame.recordScore(pinsHit);

      var previousFrame = this._previousFrame();

      if (previousFrame !== undefined 
         && previousFrame.isSpare() 
         && currentFrame._rollCount === 1) {
         previousFrame.addBonus(pinsHit);
      }

      if (previousFrame !== undefined 
         && previousFrame.isStrike()) {
         previousFrame.addBonus(pinsHit);
      }
   },

   isGameEnded: function() {
      return this.frames.length === 10 && this._currentFrame().isEnded();
   },

   _currentFrame: function() {
      return this.frames.length > 0 
         ? this.frames[this.frames.length - 1] 
         : undefined;
   },

   _previousFrame: function() {
      return this.frames.length > 1 
         ? this.frames[this.frames.length - 2] 
         : undefined;
   }
};