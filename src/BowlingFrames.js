Scorecard = {
  list: [],
  currentSum: 0,
  currentFrameIndex: 0,

  sum: function(){
    this.currentSum = 0;
    for (var i = this.currentFrameIndex; i >= 0; i--) {
      if(this.list[i].subFrame['current']==='two' && i === this.currentFrameIndex) { continue; }
      this.currentSum += this.list[i].score();
    };
    //return currentSum;
  },

  updateList: function(NumberOfPins) {

    if(this.list[this.currentFrameIndex].subFrame['current']==='two' || isStrike(NumberOfPins) === true) {
      this.list[this.currentFrameIndex].subFrame['two'] = NumberOfPins;
      this.list[this.currentFrameIndex].subFrame['current'] = 'two';
      this.currentFrameIndex += 1;
    }else {
      this.list[this.currentFrameIndex].subFrame['one'] = NumberOfPins;
      this.list[this.currentFrameIndex].subFrame['current'] = 'two';
    }
    //this.currentFrame = this.list[this.list.indexOf(this.currentFrame)+1];
  }
};

function BowlingFrame() {
  this.subFrame = {'one': 0, 'two': 0, 'current': 'one'};
  var subFrame = this.subFrame;

  var isInValidRange = function () {
    return subFrame['one'] <= 10 && subFrame['two']<= 10 - subFrame['one'];
  };

  this.score = function(){
    if(isInValidRange() === false) {
      throw new Error("Score could not be calculated");
    } else {
      return this.subFrame['one'] + this.subFrame['two'];
    };
  };
};



var prepareGame = function() {
  for(var i=0; i < 10; i++){
    Scorecard.list[i] = new BowlingFrame();
  };
};
