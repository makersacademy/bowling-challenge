function Frame(index) {
  this.isFrame = index;
  this.pins = 10;
  this.score = 0;
}

Frame.prototype = {
  showCurrentFrame: function(index) {
    return this.isFrame;
  },

    standingPins: function() {
      return this.pins;
    },

      frameScore: function(){
        return this.score;
      },

        firstRoll: function(pin){
          this.pins -= pin;
          this.score += pin;
          return this.score;
        },

          secondRoll: function(pin){
            this.pins -= pin;
            this.score += pin;
            return this.score;
          },

            thirdRoll: function(pin) {
              if (this.isFrame === 10 && this.isSpare() ||
                  this.isFrame === 10 && this.isStrike()) {
                this.pins = pin;
                this.score += pin;
              }
              return this.score;
            }
};

Frame.prototype.isSpare = function() {
  if (this.score !== 10 && this.pins === 0) {
    return true;
  }
  else {
    return false;
  }
};

Frame.prototype.isStrike = function() {
  return this.score ===10;
}
