function Bowling() {
  this.frameCount = 0;
  this.score = 0;
};

  Bowling.prototype.firstBowl = function() {
    if (this.frameCount >= 10)
    return ("Game over. Please reset.")
    else {
      var firstScore = Math.floor(Math.random() * 11);
    }
    if (firstScore === 10)
    this.strike()
    else {
      this.secondBowl(firstScore)
    };
    this.score += firstScore
    console.log("first" + firstScore)
  };

  Bowling.prototype.secondBowl = function(firstScore) {
    var secondScore = Math.floor(Math.random() * (10 - firstScore));
    this.frameCount +=1
    if ((firstScore + secondScore) === 10 )
      this.spare()
    this.score += secondScore
    console.log("second" + secondScore)
  };

  Bowling.prototype.strike = function() {
    console.log("Strike");
    this.frameCount +=1
  };

  Bowling.prototype.spare = function() {
    console.log("Spare");
  };
