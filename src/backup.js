function BowlingScoreUpdater() {
  this.currentFrameNumber = 1;
  this.prevFrameNumber = 0;
  this.currentFrameTotal = 0;
  this.currentFrameBonusRounds = 0;
  this.prevFrameTotal = 0;
  this.prevFrameBonusRounds = 0;
  this.prevPrevFrameTotal = 0;
  this.prevPrevFrameBonusRounds = 0;
  this.frameRoundsLeft = 2;
  // this.GameTotal = 0;
  // this.roundNumber = 0;
};

BowlingScoreUpdater.prototype.shiftFrames = function() {
  this.prevPrevFrameTotal = this.prevFrameTotal;
  this.prevPrevFrameBonusRounds = this.prevFrameBonusRounds;
  this.prevFrameTotal = this.currentFrameTotal;
  this.prevFrameBonusRounds = this.currentFrameBonusRounds;
  this.prevFrameNumber = this.currentFrameNumber;
  this.currentFrameNumber += 1;
  this.currentFrameTotal = 0;
  this.currentFrameBonusRounds = 0;
  this.frameRoundsLeft = 2;
};

BowlingScoreUpdater.prototype.updateBonus = function(score) {
  if (this.prevPrevFrameBonusRounds === 1) {
    // this.GameTotal += score;
    this.prevPrevFrameTotal += score;
    this.prevPrevFrameBonusRounds -= 1;
  };
  if (this.prevFrameBonusRounds > 0) {
    // this.GameTotal += score;
    this.prevFrameTotal += score;
    this.prevFrameBonusRounds -= 1;
  };
};

BowlingScoreUpdater.prototype.newRound = function(score) {
  // this.GameTotal += score;
  if (this.frameRoundsLeft === 0) {
    this.shiftFrames();
  };
  if (score === 10){
    // this.roundNumber += 1;
    this.frameRoundsLeft = 0;
    this.currentFrameBonusRounds = 2;
    this.currentFrameTotal = 10;
  } else if (this.currentFrameTotal + score === 10){
    this.frameRoundsLeft = 0;
    this.currentFrameBonusRounds = 1;
    this.currentFrameTotal += score;
  } else if (this.currentFrameTotal + score < 10){
    this.frameRoundsLeft -= 1;
    this.currentFrameTotal += score;
  };
  // this.roundNumber += 1;
  this.updateBonus(score);
};



//must had one round of frame 10 already for frame number to be 10
// if (this.currentFrameNumber === 10){
//   if(this.currentFrameTotal === 10 && this.frameRoundsLeft === 0){
//     this.frameTenBonusRounds == 1;
//     this.frameTenBonusOne = score;
//   };
//
//
// };



//deal with invalid input
//total at the end
//round at the end does not work when there are 3 x 10s

updater = new BowlingScoreUpdater();

var htmlRoundNumber = 1;



var htmlWriter = function(score){

  if ((updater.frameRoundsLeft === 1 && updater.currentFrameTotal + score > 10) || htmlRoundNumber > 21) {
    return;
  };

  updater.newRound(score);

  if (score === 10){
    if (htmlRoundNumber < 19) {htmlRoundNumber += 1};
    document.getElementById('round'+ htmlRoundNumber.toString()).innerHTML = 'X';
  } else if (updater.currentFrameTotal === 10 && updater.frameRoundsLeft === 0) {
    document.getElementById('round'+ htmlRoundNumber.toString()).innerHTML = '/';
  } else {
    document.getElementById('round'+ htmlRoundNumber.toString()).innerHTML = score;
  };
  htmlRoundNumber += 1;

  // if (score === 10){
  //   htmlRoundNumber += 1;
  //   document.getElementById('round'+ updater.roundNumber.toString()).innerHTML = 'X';
  // } else if (updater.currentFrameTotal === 10 && updater.frameRoundsLeft === 0) {
  //   document.getElementById('round'+ updater.roundNumber.toString()).innerHTML = '/';
  // } else {
  //   document.getElementById('round'+ updater.roundNumber.toString()).innerHTML = score;
  // };
  // htmlRoundNumber += 1;

  var currentFrameNumber = updater.currentFrameNumber;
  var prevFrameNumber = updater.currentFrameNumber - 1;
  var prevPrevFrameNumber = updater.currentFrameNumber - 2;

  if (currentFrameNumber >= 1 && currentFrameNumber <= 10){
    document.getElementById('f'+ currentFrameNumber.toString()).innerHTML
      = updater.currentFrameTotal;
  };

  if (prevFrameNumber >= 1 && prevFrameNumber <= 10){
    document.getElementById('f'+ prevFrameNumber.toString()).innerHTML
      = updater.prevFrameTotal;
  };

  if (prevPrevFrameNumber >= 1 && prevPrevFrameNumber <= 10){
    document.getElementById('f'+prevPrevFrameNumber.toString()).innerHTML
      = updater.prevPrevFrameTotal;
  };

  // document.getElementById('total_score').innerHTML = updater.GameTotal;

  var scoreTotal = 0;

  for(i = 1; i < 11; i++){
    scoreTotal += Number(document.getElementById('f' + i.toString()).innerHTML);
  };

  document.getElementById('total_score').innerHTML = scoreTotal;

};



document.addEventListener('DOMContentLoaded', function() {

  // console.log(document.getElementById('f1').innerHTML);

  for(i = 0; i < 11; i++){
    document.getElementById('btn' + i.toString()).addEventListener("click", function() {
      htmlWriter(Number(this.id.replace('btn', '')));
    });
  };
});





//
// document.addEventListener('DOMContentLoaded', function() {
//
//   document.getElementById("btn0").addEventListener("click", function() {
//     alert("Button clicked, id "+this.id+", text"+this.innerHTML);
//     htmlWriter(0);
//   });
//
//   document.getElementById("btn1").addEventListener("click", function() {
//     htmlWriter(1);
//   });
//
//   document.getElementById("btn2").addEventListener("click", function() {
//     htmlWriter(Number(this.id.replace('btn', '')));
//   });
//
//   document.getElementById("btn3").addEventListener("click", function() {
//     htmlWriter(3);
//   });
//
//   document.getElementById("btn4").addEventListener("click", function() {
//     htmlWriter(4);
//   });
//
//   document.getElementById("btn5").addEventListener("click", function() {
//     htmlWriter(5);
//   });
//
//   document.getElementById("btn6").addEventListener("click", function() {
//     htmlWriter(6);
//   });
//
//   document.getElementById("btn7").addEventListener("click", function() {
//     htmlWriter(7);
//   });
//
//   document.getElementById("btn8").addEventListener("click", function() {
//     htmlWriter(8);
//   });
//
//   document.getElementById("btn9").addEventListener("click", function() {
//     htmlWriter(9);
//   });
//
//   document.getElementById("btn10").addEventListener("click", function() {
//     htmlWriter(10);
//   });
// });





//Updater engine only need to hold current frame number.  or maybe not even that.
//
// updater = new BowlingScoreUpdater();
//
// var htmlRoundNumber = 1;
//
//
//
// var htmlWriter = function(score){
//
//   if ((updater.frameRoundsLeft === 1 && updater.currentFrameTotal + score > 10) || htmlRoundNumber > 21) {
//     return;
//   };
//
//   updater.newRound(score);
//
//   if (score === 10){
//     if (htmlRoundNumber < 19) {htmlRoundNumber += 1};
//     document.getElementById('round'+ htmlRoundNumber.toString()).innerHTML = 'X';
//   } else if (updater.currentFrameTotal === 10 && updater.frameRoundsLeft === 0) {
//     document.getElementById('round'+ htmlRoundNumber.toString()).innerHTML = '/';
//   } else {
//     document.getElementById('round'+ htmlRoundNumber.toString()).innerHTML = score;
//   };
//   htmlRoundNumber += 1;
//
//   var currentFrameNumber = updater.currentFrameNumber;
//   var prevFrameNumber = updater.currentFrameNumber - 1;
//   var prevPrevFrameNumber = updater.currentFrameNumber - 2;
//
//   if (currentFrameNumber >= 1 && currentFrameNumber <= 10){
//     document.getElementById('f'+ currentFrameNumber.toString()).innerHTML
//       = updater.currentFrameTotal;
//   };
//
//   if (prevFrameNumber >= 1 && prevFrameNumber <= 10){
//     document.getElementById('f'+ prevFrameNumber.toString()).innerHTML
//       = updater.prevFrameTotal;
//   };
//
//   if (prevPrevFrameNumber >= 1 && prevPrevFrameNumber <= 10){
//     document.getElementById('f'+prevPrevFrameNumber.toString()).innerHTML
//       = updater.prevPrevFrameTotal;
//   };
//
//   var scoreTotal = 0;
//   for(i = 1; i < 11; i++){
//     scoreTotal += Number(document.getElementById('f' + i.toString()).innerHTML);
//   };
//   document.getElementById('total_score').innerHTML = scoreTotal;
//
// };
//
// document.addEventListener('DOMContentLoaded', function() {
//   for(i = 0; i < 11; i++){
//     document.getElementById('btn' + i.toString()).addEventListener("click", function() {
//       htmlWriter(Number(this.id.replace('btn', '')));
//     });
//   };
// });

//
// function BowlingScoreUpdater() {
//   this.currentFrameNumber = 1;
//   this.prevFrameNumber = 0;
//   this.currentFrameTotal = 0;
//   this.currentFrameBonusRounds = 0;
//   this.prevFrameTotal = 0;
//   this.prevFrameBonusRounds = 0;
//   this.prevPrevFrameTotal = 0;
//   this.prevPrevFrameBonusRounds = 0;
//   this.frameRoundsLeft = 2;
// };
//
// BowlingScoreUpdater.prototype.shiftFrames = function() {
//   this.prevPrevFrameTotal = this.prevFrameTotal;
//   this.prevPrevFrameBonusRounds = this.prevFrameBonusRounds;
//   this.prevFrameTotal = this.currentFrameTotal;
//   this.prevFrameBonusRounds = this.currentFrameBonusRounds;
//   this.prevFrameNumber = this.currentFrameNumber;
//   this.currentFrameNumber += 1;
//   this.currentFrameTotal = 0;
//   this.currentFrameBonusRounds = 0;
//   this.frameRoundsLeft = 2;
// };
//
// BowlingScoreUpdater.prototype.updateBonus = function(score) {
//   if (this.prevPrevFrameBonusRounds === 1) {
//     this.prevPrevFrameTotal += score;
//     this.prevPrevFrameBonusRounds -= 1;
//   };
//   if (this.prevFrameBonusRounds > 0) {
//     this.prevFrameTotal += score;
//     this.prevFrameBonusRounds -= 1;
//   };
// };
//
// BowlingScoreUpdater.prototype.newRound = function(score) {
//   if (this.frameRoundsLeft === 0) {
//     this.shiftFrames();
//   };
//   if (score === 10){
//     this.frameRoundsLeft = 0;
//     this.currentFrameBonusRounds = 2;
//     this.currentFrameTotal = 10;
//   } else if (this.currentFrameTotal + score === 10){
//     this.frameRoundsLeft = 0;
//     this.currentFrameBonusRounds = 1;
//     this.currentFrameTotal += score;
//   } else if (this.currentFrameTotal + score < 10){
//     this.frameRoundsLeft -= 1;
//     this.currentFrameTotal += score;
//   };
//   this.updateBonus(score);
// };
//
