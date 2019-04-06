// As a player
// So that I can keep track of my bowling score
// I want to record the number of pins knocked down in a frame

// Frame object

var Frame = function() {
  this.rolls = [];
  this.strike = false;
  this.spare = false;
};

Frame.prototype.roll = function(roll) {
  this.rolls.push(roll);
};

Frame.prototype.getFrameRolls = function() {
  return this.rolls;
};

Frame.prototype.getFrameScore = function() {
  return this.rolls.reduce((acc, val) => acc + val);
};

// ScoreTracker Object
var scoreTracker = {
  rollsSheet: [],
  scoreSheet: [],
  addFrameRolls: function(rolls) {
    this.rollsSheet.push(rolls);
  },
  addFrameScores: function(score) {
    this.scoreSheet.push(score);
  },
  seeScore: function() {
    return this.scoreSheet;
  },
  seeRolls: function() {
    return this.rollsSheet;
  },
  totalScore: function() {
    return this.scoreSheet.reduce((acc, val) => acc + val);
  }
};

// APP Example
var scoreTracker = Object.create(scoreTracker);

// simulation of 10x2 rolls
for (let i = 0; i < 10; i++) {
  let frame = new Frame();

  var randomNumber1 = Math.floor(Math.random() * 10 + 1);
  var randomNumber2 = Math.floor(Math.random() * 10 + 1);

  frame.roll(randomNumber1);
  frame.roll(randomNumber2);

  let frameRolls = frame.getFrameRolls();
  let frameRollsScore = frame.getFrameScore(); //gets a frame score - adds the 2 rolls

  scoreTracker.addFrameRolls(frameRolls); //adds to rollsSheet
  scoreTracker.addFrameScores(frameRollsScore); //adds to the scoreSheet
}

console.log(scoreTracker.seeRolls()); //gets rollsSheet [[1,2],..]
console.log(scoreTracker.seeScore()); //gets scoreSheet [0,0,...]
console.log("Total score");
console.log(scoreTracker.totalScore()); //gets a total from the score sheet

// roll 1 frame 1
// is roll 1 10?
// close frame {roll1: 10, roll2: null}
// save 10
// create temporary bonus to keep track of next frame
// roll 1 frame 1
// 5
// add to bonus and update frame1 roll 1 score Frame 1 {roll1: 15}
