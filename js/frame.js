function Frame() {
   this._firstRollScore = 0;
   this._secondRollScore = 0;
   this._rollCount = 0;
   this._bonus = 0;
};

Frame.prototype = {
   getTotalScore: function() {
      return this._firstRollScore + this._secondRollScore + this._bonus;
   },

   hasStrike: function() {
      return this._rollCount === 1 && this._firstRollScore === 10;
   },

   hasSpare: function() {
      return this._firstRollScore + this._secondRollScore === 10
             && !this.hasStrike();
   },

   isEnded: function() {
      return this.hasStrike() || this._rollCount === 2;
   },

   recordScore: function(pinsHit) {
      this._validateRollCount();
      this._validateScore(pinsHit);

      if (this._rollCount === 0) {
         this._firstRollScore += pinsHit;
      } else if (this._rollCount === 1) {
         this._secondRollScore += pinsHit;
      }

      this._rollCount++;
   },

   _validateScore: function(pinsHit) {
      if (this._firstRollScore + this._secondRollScore + pinsHit > 10) {
         throw new Error("Invalid score");
      }

      if (pinsHit < 0) {
         throw new Error("Invalid score");
      }
   },

   _validateRollCount: function() {
      if (this.isEnded()) {
         throw new Error('Frame already ended');
      }
   }

};