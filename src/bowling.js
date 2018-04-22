function ScoreCalculator() {
  this.score = {
    1: [0,0],
    2: [0,0],
    3: [0,0],
    4: [0,0],
    5: [0,0],
    6: [0,0],
    7: [0,0],
    8: [0,0],
    9: [0,0],
    10: [0,0],
    'bonus': [0,0]
  };

  this.finalScore = 0;
}

ScoreCalculator.prototype.addFrame = function(frameNumber, rollOne = 0, rollTwo = 0) {
  this.score[frameNumber] = [rollOne, rollTwo];
};

ScoreCalculator.prototype.calculate = function(score = this.score) {

  for(var frame in this.score) {
    if (this.score[frame][0] && frame == 10) {
      this.finalScore += (10 + this.score['bonus'].sum());
      break;
    } else if (this.score[frame].sum() === 10 && frame == 10) {
      this.finalScore += (10 + this.score['bonus'][0]);
      break;
    } else if (this.score[frame][0] === 10 && frame == 9 && this.score[10][0] === 10) {
      this.finalScore += (10 + this.score['bonus'][0] + this.score[10][0]);
    } else if (this.score[frame][0] === 10) {
      this.finalScore += (10 + this.score['bonus'].sum());
    }
  };

  return this.finalScore;

};



/// HELPER METHODS BELOW:


Array.prototype.sum = function() {
 return this.reduce(add, 0);
};


function add(a , b){
  return a + b;
}


/// MANUAL TESTING STUFF:


var test = new ScoreCalculator();

test.score = {
  1: [10,0],
  2: [10,0],
  3: [10,0],
  4: [10,0],
  5: [10,0],
  6: [10,0],
  7: [10,0],
  8: [10,0],
  9: [10,0],
  10: [10,0],
  'bonus': [10,10] };


for(var frame in test.score) {
  console.log( frame + " : " + test.score[frame]);
}

console.log("output of calculate(): " + test.calculate());
console.log(typeof(test.score['bonus' + 1]));
