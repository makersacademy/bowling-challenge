var BowlingGame = function() {};

BowlingGame.prototype.isDivisibleByThree = function(number) {
  return (number % 3 === 0);
};

BowlingGame.prototype.isDivisibleByFive = function(number) {
  return (number % 5 === 0);
};

BowlingGame.prototype.isDivisibleByFifteen = function(number) {
  return (number % 15 === 0)
};
