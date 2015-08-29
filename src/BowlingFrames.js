function BowlingFrame() {
  this.subFrame = {'one': 0, 'two': 0};
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

BowlingFrames = {
  list: [],
  scoreSum: function(){
    list
  }
};

var prepareGame = function() {
  for(var i=0; i < 10; i++){
    BowlingFrames.list[i] = new BowlingFrame();
  };
};
