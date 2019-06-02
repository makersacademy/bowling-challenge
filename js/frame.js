function Frame() {
   this._firstRollScore = 0;
   this._secondRollScore = 0;
   this._rollCount = 0;
   this._bonus = 0;
   this._hasStrike = false;
   this._hasSpare = false;
   this._isEnded = false;
};

Frame.prototype = {
   getTotalScore: function() {
      return this._firstRollScore + this._secondRollScore + this._bonus;
   },

   hasStrike: function() {
      return this._hasStrike;
   },

   hasSpare: function() {
      return this._hasSpare;
   },

   isEnded: function() {
      return this._isEnded;
   },

   recordScore: function(pinsHit) {
      this._validateRollCount();
      this._validateScore(pinsHit);

      if (this._rollCount === 0) {
         this._firstRollScore += pinsHit;
         this._rollCount++;
      } else if (this._rollCount === 1) {
         this._secondRollScore += pinsHit;
         this._rollCount++;
      }
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
      if (this._rollCount >= 2) {
         throw new Error('Frame already ended with two rolls');
      }

      if (this._rollCount === 1 && this._firstRollScore === 10) {
         throw new Error('Frame already ended with a strike');
      }
   }

};