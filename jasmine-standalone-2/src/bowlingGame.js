var BowlingGame = function() {
  this._possibleScore = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  this._rollCount = 0;
  this._score = [];
};

// BowlingGame.prototype.roll = function() {
//   this._rollCount += 1;
//   console.log(Math.floor(Math.random() * this._possibleScore.length));
//   this._score.push(this._possibleScore[Math.floor(Math.random() * this._possibleScore.length)]);
//   return this._score[0]
// };

BowlingGame.prototype.roll = function(roll) {
  this._rollCount += 1;
  this._score.push(roll);
  console.log(this._score)
};


BowlingGame.prototype.rollCount = function() {
  return this._rollCount;
};

BowlingGame.prototype.score = function() {
  if (this._score[0] === 10 && this._rollCount == 1){
    return 'strike';
  } else if ((this._score[0] + this._score[1]) === 10 && this._rollCount == 2){
    return 'spare';
  }
    return this._score[0];
  };

BowlingGame.prototype.result = function() {
  var sum = this._score.reduce(function(pv, cv) { return pv + cv; }, 0);
  // console.log(sum);
  return sum;s
  console.log(this._score)
};
