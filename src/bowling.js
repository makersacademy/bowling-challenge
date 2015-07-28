function ScoreCard() {
  this.scoreTotal = 0;
  this.frameScores = [];
  this.rollArray = [];
  this.rollCount = 0;
  this.frameCount = 0;
};

// var evenRoll = function () {
//   if (this.rollCount % 2 == 0) {
//     return(true);
//   } else {
//     return(false);
//   };
// };

ScoreCard.prototype.fillFrameScores = function() {
  var lastScore = this.rollArray[this.rollCount-2]
  var secondLastScore = this.rollArray[this.rollCount-1]
  if (this.rollCount % 2 == 0) {
    var frameScore = (lastScore + secondLastScore);
    this.frameScores.push(frameScore);
    this.addBonus();
  };
  if (this.rollArray.length == 21) {
    this.addBonus();
  };
};

ScoreCard.prototype.addBonus = function() {
  if (this.rollArray[this.rollCount-4] == 10) {
    this.frameScores[(this.frameScores.length-2)] += this.frameScores[(this.frameScores.length-1)];

  } else if ((this.rollArray[this.rollCount-4]) + (this.rollArray[this.rollCount-3]) == 10) {
    this.frameScores[(this.frameScores.length-2)] += this.rollArray[this.rollCount-2];
  };

  if ((this.rollArray[this.rollCount-4] == 10) && (this.rollArray[this.rollCount-6] == 10)) {
    this.frameScores[(this.frameScores.length-3)] += this.rollArray[this.rollCount-2];

  // LAST BONUS SECTION NEEDS WORK. MIGHT NEED TO CUT IT OFF
  // IN THE EVENT OF MORE THAN 3 CONSECUTIVE STRIKES.

  };
  if (this.rollArray.length == 21) {
    this.frameScores[9] += this.rollArray[20];
  };
};

ScoreCard.prototype.checkEnd = function() {
  if (this.rollArray[18] + this.rollArray[19] < 10) {
    alert("End of game!");
  } else if ((this.rollArray[18] == 10) && (this.rollArray.length == 21)) {
    alert("End of game!");
  } else if ((this.rollArray[18] + this.rollArray[19] == 10) && (this.rollArray.length == 21)) {
    alert("End of game!");
  }
};

ScoreCard.prototype.totalScore = function() {
  // var checkStrikes = 0;
  // for (var i = 0; i < 21; i += 2) {
  //   checkStrikes += this.frameScores[i]};
  //
  // if (checkStrikes == 110) {
  //   this.scoreTotal = 300;
  if (this.rollArray[0] + this.rollArray[2] + this.rollArray[4] + this.rollArray[6] + this.rollArray[8] + this.rollArray[10] + this.rollArray[12] + this.rollArray[14] + this.rollArray[16] + this.rollArray[18] + this.rollArray[20] == 110) {
    this.scoreTotal = 300;
  } else if (this.frameCount == 10) {
    for(var i in this.frameScores) {
      this.scoreTotal += this.frameScores[i]; }
  };
};

ScoreCard.prototype.roll = function(num) {

  this.rollCount ++;

  if (this.rollCount % 2 == 0) {
    this.frameCount ++;
  };

  if (this.frameCount <= 9) {

    if ((this.rollCount % 2 == 0) && (this.rollArray[(this.rollCount-2)] == 10)) {
      this.rollArray.push(0);
    } else {
      this.rollArray.push(num);
    };
  } else {
    this.rollArray.push(num);
  };

  this.fillFrameScores();
  this.totalScore();
  this.checkEnd();
};
