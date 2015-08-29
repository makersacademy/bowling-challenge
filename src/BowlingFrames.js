Scorecard = {
  list: [],

  sum: function(){
    var result = 0;
    for (var i = this.list.length - 1; i >= 0; i--) {
      result += this.list[i].score();
    };
    return result;
  },

  currentFrame: 0,

  updateList: function(NumberOfPins) {
    this.currentFrame = this.list[this.currentFrame];
    this.currentFrame.subFrame[this.currentFrame.subFrame['current']] = NumberOfPins;
    this.currentFrame.subFrame['current'] = 'two';
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
