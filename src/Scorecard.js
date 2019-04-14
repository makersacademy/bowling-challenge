function Scorecard() {
  this.frames = [];
  this.score = 0;
};

Scorecard.prototype.enter = function(roll1, roll2) {
  this.frames.push({firstRoll: roll1, secondRoll: roll2})
};

Scorecard.prototype.calculate = function() {
  var calculator = []
  if (this.frames[9].firstRoll != 10) {
    this.frames.forEach(function(frame) {
     calculator.push(frame.firstRoll +  frame.secondRoll)
    });
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    this.score = calculator.reduce(reducer)
    return this.score;
  }
  else {
    return 300
  }
  end
};