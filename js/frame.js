function Frame() {
   this._firstRollScore;
   this._secondRollScore;
   this.rollCount = 0;
   this._bonus = 0;
   this._totalScore = 0;
   this._hasStrike = false;
   this._hasSpare = false;
   this._isEnded = false;
};

Frame.prototype = {
   getTotalScore: function() {
      return this._totalScore;
   },

   hasStrike: function() {
      return this._hasStrike;
   },

   hasSpare: function() {
      return this._hasSpare;
   },

   isEnded: function() {
      return this._isEnded;
   }
};