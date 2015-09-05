//scorecard = { Scorecard()}

function Scorecard () {
  this.list = [];
  this.currentSum = 0;
  this.currentFrameIndex = 0;
};

Scorecard.prototype.sum = function() {
  this.currentSum = 0;
  var isSpare = function(bowlingFrame){
    return (bowlingFrame.subFrame[one] +
    bowlingFrame.subFrame[two]) === 10 && bowlingFrame.subFrame[one] > 0;
  };

  var calculate = function() {
    for (var i = 0; i < this.currentFrameIndex - 2; i++) {
      if(this.list[i].subFrame[two] === 10 && i < 10) {
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
    calculate();
  };
};

Scorecard.prototype.updateList = function (NumberOfPins) {
  var scorecard = this;
  var subFrame = scorecard.list[scorecard.currentFrameIndex].subFrame;
  var isStrike = function(pinsDown) { return pinsDown === 10; };

  var isSecondShot = function () {
    return subFrame.current === 'second';
  };
  var setSubFrameResult = function() {
    isSecondShot(scorecard) ? subFrame.two = NumberOfPins :
    subFrame.one = NumberOfPins;
  };
  var increaseFrameIndex = function() {
    scorecard.currentFrameIndex += 1;
  };
  var moveFramePosition = function() {
    subFrame.current = 'second';
  };
  var setFrameScore = function(){
    scorecard.list[scorecard.currentFrameIndex].score();
  };

  setSubFrameResult();

  isStrike(NumberOfPins) ? (moveFramePosition(), increaseFrameIndex())
  :
  isSecondShot() ? (setFrameScore(), increaseFrameIndex())
  : moveFramePosition();
};

//Reason to use this vs prototype is to access private variables
// var A = function () {
//     var private_var = ...;

//     this.x = function () {
//         return private_var;
//     };

//     this.setX = function (new_x) {
//         private_var = new_x;
//     };
// };