Scorecard = {
  list: [],
  currentSum: 0,
  currentFrameIndex: 0,

  sum: function() {
    this.currentSum = 0;
    var isSpare = function(bowlingFrame){
      return bowlingFrame.subFrame['one'] +
      bowlingFrame.subFrame['two'] === 10;
    };

    for (var i = 0; i < this.currentFrameIndex; i++) {
      if(this.list[i].subFrame['two'] === 10 && i + 1 < this.list.length) {
        this.sumStrikes(i);
        this.currentSum += this.list[i].currentScore;
        this.list[i].currentScore = this.currentSum;
        continue;
        }

      if(isSpare(this.list[i]) === true && i + 1 < this.list.length) {
        this.sumSpares(i);
        this.currentSum += this.list[i].currentScore;
        this.list[i].currentScore = this.currentSum;
        continue;
      }

      this.list[i].currentScore += this.currentSum;
      this.list[i].score();
      this.currentSum = this.list[i].currentScore;
    };
  },

  sumSpares: function(frameIndex) {
    this.list[frameIndex].score();
    if(this.list[frameIndex + 1].subFrame['two'] === 10){
      this.list[frameIndex].currentScore += 10;
    } else {
      this.list[frameIndex].currentScore += this.list[frameIndex + 1].subFrame['one'];
      };
  },

  sumStrikes: function(frameIndex) {
    this.list[frameIndex].score();
    if(this.list[frameIndex + 1].subFrame['two'] === 10 &&
      this.list[frameIndex + 2].subFrame['two'] === 10) {
        this.list[frameIndex].currentScore +=
        this.list[frameIndex + 2].subFrame['two'] +
        this.list[frameIndex + 1].subFrame['two'];
        return;
    };

    if(this.list[frameIndex + 1].subFrame['two'] === 10) {
      this.list[frameIndex].currentScore +=
      this.list[frameIndex + 1].subFrame['two'] + this.list[frameIndex + 2].subFrame['one'];
      return;
    };

    this.list[frameIndex + 1].score();
    this.list[frameIndex].currentScore += this.list[frameIndex + 1].currentScore;
    this.list[frameIndex + 1].currentScore = 0;
  },

  updateList: function(NumberOfPins) {
    var isStrike = function(pinsDown) {
      return pinsDown === 10;
    };

    if((this.list).length === this.currentFrameIndex) {
        throw new Error('The Game is Over');
    }
    if(this.list[this.currentFrameIndex].subFrame['current'] === 'two' ||
      isStrike(NumberOfPins) === true) {
        this.list[this.currentFrameIndex].subFrame['two'] = NumberOfPins;
        this.list[this.currentFrameIndex].subFrame['current'] = 'two';
        this.currentFrameIndex += 1;
    } else {
      this.list[this.currentFrameIndex].subFrame['one'] = NumberOfPins;
      this.list[this.currentFrameIndex].subFrame['current'] = 'two';
    }
  }
};

function BowlingFrame() {
  this.subFrame = { 'one': 0, 'two': 0, 'current': 'one' };
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
    };
  };
};
