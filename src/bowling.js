function ScoreCalculator() {

  this.score = [
    {1: [0,0]},
    {2: [0,0]},
    {3: [0,0]},
    {4: [0,0]},
    {5: [0,0]},
    {6: [0,0]},
    {7: [0,0]},
    {8: [0,0]},
    {9: [0,0]},
    {10: [0,0]},
    {11: [0,0]}
  ];


  this.finalScore = 0;
}

ScoreCalculator.prototype.addFrame = function(frameIndex, frameNumber, rollOne = 0, rollTwo = 0) {
  this.score[frameIndex][frameNumber] = [rollOne, rollTwo];
};

ScoreCalculator.prototype.calculate = function(score = this.score) {

  var scoreLength = this.score.length;
  for (var frame = 0; frame < scoreLength; frame++) {
    if (this.score[frame][frame + 1][0] === 10 && frame == 9) {
      this.finalScore += (10 + this.score[frame + 1][11].sum());
      // console.log(frame + 1);
      // console.log(this.finalScore);
      break; /// Strike on last frame
    } else if (this.score[frame][frame + 1].sum() === 10 && frame == 9) {
      this.finalScore += (10 + this.score[frame + 1][11][0]);
      // console.log(frame + 1);
      // console.log(this.finalScore);
      break; /// Spare on last frame
    } else if (this.score[frame][frame + 1][0] === 10 && frame == 8 && this.score[frame + 1][10][0] === 10) {
      this.finalScore += (10 + this.score[frame + 1][10][0] + this.score[frame + 2][11][0]);
      /// strike on frame 9 and 10
      // console.log(frame + 1);
      // console.log(this.finalScore);
    } else if (this.score[frame][frame + 1][0] === 10 && this.score[frame + 1][frame + 2][0] === 10) {
      this.finalScore += 10 + this.score[frame + 1][frame + 2][0] + this.score[frame + 2][frame + 3].sum();
      ///two strikes in a row
      // console.log(frame + 1);
      // console.log(this.finalScore);
    } else if (this.score[frame][frame + 1][0] === 10) {
      this.finalScore += 10 + this.score[frame + 1][frame + 2].sum();
      // console.log(frame + 1);
      // console.log(this.finalScore);
      /// normal strikes
    } else if (this.score[frame][frame + 1].sum() === 10) {
      this.finalScore += 10 + this.score[frame + 1][frame + 2][0];
      // console.log(frame + 1);
      // console.log(this.finalScore);
      /// normal spares
    } else {
      this.finalScore += this.score[frame][frame + 1].sum();
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


// var test = new ScoreCalculator();
//
// test.score = [
//   {1: [10,0]},
//   {2: [10,0]},
//   {3: [10,0]},
//   {4: [10,0]},
//   {5: [10,0]},
//   {6: [10,0]},
//   {7: [10,0]},
//   {8: [10,0]},
//   {9: [10,0]},
//   {10: [10,0]},
//   {11: [10,10]} ];
//
//
// var scoreLength = test.score.length;
// for (var frame = 0; frame < scoreLength; frame++) {
//   console.log( frame + " : " + test.score[frame][frame + 1]);
// }
//
// console.log("output of calculate(): " + test.calculate());
// console.log(typeof(test.score[1 + 1]));
