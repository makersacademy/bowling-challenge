
function BowlingFrame() {
  this.subFrame = { one: 0, two: 0, current: 'first' };
  this.currentScore = 0;
  var subFrame = this.subFrame;

  var isInValidRange = function () {
    return subFrame.one <= 10 && subFrame.two<= 10 - subFrame.one;
  };

  this.score = function() {
    if(isInValidRange()) {
      this.currentScore += this.subFrame.one + this.subFrame.two;
    } else {
       throw new Error("Score could not be calculated");
    };
  };
};
