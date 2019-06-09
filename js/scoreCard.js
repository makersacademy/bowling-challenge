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
         if (this.frames.length === 9) {
            currentFrame = new Frame(true);
         } else {
            currentFrame = new Frame(false);
         }
         
         this.frames.push(currentFrame);
      } 
      
      currentFrame.recordScore(pinsHit);

      var previousFrame = this._previousFrame();
      var secondPreviousFrame = this._secondPreviousFrame();

      // First roll contributes to previous frame's bonus if it was a spare.
      if (previousFrame !== undefined 
         && previousFrame.isSpare() 
         && currentFrame._rollCount === 1) {
            previousFrame.addBonus(pinsHit);
      }

      // Roll contributes to previous frame's bonus if it was a strike.
      if (previousFrame !== undefined 
         && previousFrame.isStrike()
         && currentFrame._rollCount <= 2) {
            previousFrame.addBonus(pinsHit);
      }

      // First roll contributes to second previous frame's bonus if that
      // was a strike and the previous was also a strike.
      if (previousFrame !== undefined
         && previousFrame.isStrike()
         && secondPreviousFrame !== undefined
         && secondPreviousFrame.isStrike()
         && currentFrame._rollCount === 1) {
            secondPreviousFrame.addBonus(pinsHit);
      }
   },

   getTotalScore: function() {
      var totalScore = 0;

      for(var i = 0; i < this.frames.length; i++) {
         totalScore += this.frames[i].getTotalScore();
      }

      return totalScore;
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
   },

   _secondPreviousFrame: function() {
      return this.frames.length > 2
         ? this.frames[this.frames.length - 3] 
         : undefined;
   }
};