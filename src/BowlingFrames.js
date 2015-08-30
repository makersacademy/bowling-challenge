Scorecard = {
  list: [],
  currentSum: 0,
  currentFrameIndex: 0,

  sum: function() {
    this.currentSum = 0;
    for (var i = this.currentFrameIndex; i >= 0; i--) {
      if(this.list[i].subFrame['current'] === 'two' && i === this.currentFrameIndex) { continue; }
      if(this.list[i].subFrame['two'] === 10){ this.list[i].currentScore = 10; continue; }
      this.currentSum += this.list[i].score();
      this.sumStrikes(i-1);
    };
  },

  sumStrikes: function(frameIndex) {
    if(frameIndex < 1){ return };
    if(this.list[frameIndex].subFrame['two'] === 10) {
      this.list[frameIndex].currentScore = 5// THIS DOESNT WORK - this.list[frameIndex-1].currentScore;
      console.log(this.list[frameIndex], this.list[frameIndex].currentScore);
      } else { this.sumStrikes(frameIndex - 1); };
  },

  updateList: function(NumberOfPins) {
    var isStrike = function(pinsDown) {
      return pinsDown === 10;
    };

    var isSpare = function(pinsDown){
    };

    if(this.list[this.currentFrameIndex].subFrame['current']==='two' || isStrike(NumberOfPins) === true) {
      this.list[this.currentFrameIndex].subFrame['two'] = NumberOfPins;
      this.list[this.currentFrameIndex].subFrame['current'] = 'two';
      this.currentFrameIndex += 1;
    }else {
      this.list[this.currentFrameIndex].subFrame['one'] = NumberOfPins;
      this.list[this.currentFrameIndex].subFrame['current'] = 'two';
    }
  }
};

function BowlingFrame() {
  this.subFrame = {'one': 0, 'two': 0, 'current': 'one'};
  this.currentScore = 0;
  var subFrame = this.subFrame;

  var isInValidRange = function () {
    return subFrame['one'] <= 10 && subFrame['two']<= 10 - subFrame['one'];
  };

  this.score = function() {
    if(isInValidRange() === false) {
      throw new Error("Score could not be calculated");
    } else {
       this.currentScore += this.subFrame['one'] + this.subFrame['two'];
       return this.currentScore;
      // return this.subFrame['one'] + this.subFrame['two'];
    };
  };
};



var prepareGame = function() {
  for(var i=0; i < 10; i++){
    Scorecard.list[i] = new BowlingFrame();
  };
};
