function Scorecard() {
  this.frames = [];
  this.score = 0;
};

Scorecard.prototype.enter = function(roll1, roll2) {
  
    if(roll1 + roll2 > 10){
      throw Error()
    }
 else{
  this.frames.push({firstRoll: roll1, secondRoll: roll2})

 }
};

Scorecard.prototype.calculate = function() {
  var calculator = []
  if ((this.frames).every(isStrike)) {
    return 300
  }
  else {
    this.frames.forEach(function(frame) {
     calculator.push(frame.firstRoll +  frame.secondRoll)
    })
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    this.score = calculator.reduce(reducer)
    return this.score;
  };
};

function isStrike(frame) {
    return frame.firstRoll === 10
  }


