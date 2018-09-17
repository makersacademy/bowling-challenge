function Scorer() {
  this.scores = [];
}

Scorer.prototype.addFrame = function(firstBall, secondBall) {
  var rollArray = [firstBall, secondBall];
  this.scores.push(rollArray);
}

Scorer.prototype.totalScore = function() {
  var overallTotal = 0
  this.scores.forEach(function(element) {
    var frameTotal = (element[0] + element[1])
    overallTotal = overallTotal + frameTotal
  });
  return overallTotal
}

// I want to add to a variable

// I want a method for counting the array
// .length
// var arrayLength = this.scores.length