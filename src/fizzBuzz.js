var fizzBuzz = function () {};

fizzBuzz.prototype.isDivisibleByThree = function(number) {
  return number % 3 === 0;
};

fizzBuzz.prototype.isDivisibleByFive = function (number) {
  return number % 5 === 0;
}

fizzBuzz.prototype.isDivisibleByFifteen = function (number) {
  return number % 15 ==0;
}

fizzBuzz.prototype.number = function (number) {
  return number;
}

fizzBuzz.prototype.play = function(number) {
  if (number === 0) return number
  if (this.isDivisibleByFifteen(number)) return "FizzBuzz"
  if (this.isDivisibleByThree(number)) return "Fizz";
  if (this.isDivisibleByFive(number)) return "Buzz";
  return number
}
