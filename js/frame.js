function Frame(isFinal = false) {
   this._firstRollScore = 0;
   this._secondRollScore = 0;
   this._thirdRollScore = 0;
   this._rollCount = 0;
   this._bonus = 0;
   this._isFinalFrame = isFinal;
};

Frame.prototype = {
   getTotalScore: function() {
      return this._firstRollScore 
               + this._secondRollScore 
               + this._thirdRollScore 
               + this._bonus;
   },

   isStrike: function() {
      return this._firstRollScore === 10;
   },

   isSpare: function() {
      return this._firstRollScore + this._secondRollScore === 10
             && !this.isStrike();
   },

   isEnded: function() {
      return this._isFinalFrame
         ? this.isStrike() && this._rollCount === 3
            || this.isSpare() && this._rollCount === 3
            || !this.isStrike() && !this.isSpare() && this._rollCount == 2
         : this.isStrike() || this._rollCount === 2;
   },

   recordScore: function(pinsHit) {
      this._validateRollCount();
      this._validateScore(pinsHit);

      if (this._rollCount === 0) {
         this._firstRollScore += pinsHit;
      } else if (this._rollCount === 1) {
         this._secondRollScore += pinsHit;
      } else if (this._rollCount === 2) {
         this._thirdRollScore += pinsHit;
      }

      this._rollCount++;
   },
   
   addBonus: function(bonusScore) {
      this._bonus += bonusScore;
   },

   _validateScore: function(pinsHit) {
      if (this._isFinalFrame){
         if (this.isStrike() || this.isSpare()){
            if (pinsHit < 0 && pinsHit > 10) {
               throw new Error("Invalid score");
            }
         } else if (this._firstRollScore + this._secondRollScore + pinsHit > 10) {
            throw new Error("Invalid score");
         } else if (pinsHit < 0) {
            throw new Error("Invalid score");
         }
      }
      else {
         if (this._firstRollScore + this._secondRollScore + pinsHit > 10) {
            throw new Error("Invalid score");
         }
   
         if (pinsHit < 0) {
            throw new Error("Invalid score");
         }
      }
   },

   _validateRollCount: function() {
      if (this.isEnded()) {
         throw new Error('Frame already ended');
      }
   }

};