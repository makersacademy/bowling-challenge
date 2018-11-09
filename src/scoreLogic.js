function ScoreLogic() {
};

ScoreLogic.prototype._isNoMoreThanTen = function(a, b) {
  return ( a + b <= 10);
}

ScoreLogic.prototype._isNoLessThanZero = function(a, b) {
  return ( a + b >= 0);
}

ScoreLogic.prototype._isAStrike = function(a, b) {
  return (a === 10);
}

ScoreLogic.prototype._isASpare = function(a, b) {
  return ( a + b === 10);
}

ScoreLogic.prototype.frame = function(a, b) {
  if (!this._isNoMoreThanTen(a,b)) {
    throw "Incorrect score entered.";
  }
}


// FizzBuzz.prototype.fizzBuzz = function(number) {
//     if (this.isDivisibleByFifteen(number)) {
//       return 'fizzbuzz';
//     } else if (this.isDivisibleByFive(number)) {
//       return 'buzz';
//     } else if (this.isDivisibleByThree(number)) {
//       return 'fizz';
//     } else {
//       return number;
//     }
// };
