Game = function() {
  this._f1Score = 0;
  this._f1Roll1 = 0;
  this._f1Roll2 = 0;
  this._f1StrikeType = "";
  var f1_bonus = 0;

  this._f2Score = 0;
  this._f2Roll1 = 0;
  this._f2Roll2 = 0;
  this._f2StrikeType = "";
  var f2_bonus = 0;

  this._f3Score = 0;
  this._f3Roll1 = 0;
  this._f3Roll2 = 0;
  this._f3StrikeType = "";
  var f3_bonus = 0;

  this._f4Score = 0;
  this._f5Score = 0;
  this._f6Score = 0;
  this._f7Score = 0;
  this._f8Score = 0;
  this._f9Score = 0;
  this._f10Score = 0;

  this._totalScore = [];
  this._totalBonusScore = [];
};

Game.prototype.frame1 = function() {
  frame1 = new Frame();
  this._f1Roll1 = frame1.roll1();
  if (this._f1Roll1 === 10){ //if player gets a strike on 1st roll
    this._f1StrikeType = frame1.getStrikeType();
    var score1 = frame1.getFrameScore();
    this._f1Score = score1;
    // this._f1Score = frame1.getFrameScore();
    this._totalScore.push(this._f1Score);
    return this._f1Score;

  }
  else {
    this._f1Roll2 = frame1.roll2();
    this._f1StrikeType = frame1.getStrikeType();
    // this._f1Score = frame1.getFrameScore();
    var score1 = frame1.getFrameScore();
    this._f1Score = score1;
    this._totalScore.push(this._f1Score);
    return this._f1Score;
  }
};

Game.prototype.frame2 = function() {
  frame2 = new Frame();
  this._f2Roll1 = frame2.roll1();

  if (this._f2Roll1 === 10){ //if player gets a strike on 1st roll
    console.log("HERE1");
    this._f2StrikeType = frame2.getStrikeType();
    this._f2Score = frame2.getFrameScore();
    var previousStrike = frame1.getStrikeType();
    var lastScore = frame1.getFrameScore();
    console.log("score 1 is " + score1);

    this._totalScore.push(this._f2Score);
    // this._f1Score = frame1.getFrameScore();

        if (previousStrike === "X") {
            this._f1Score = lastScore + 10;
          }
        else if(previousStrike === "/"){
            this._f1Score = lastScore + this._f2Roll1; //i.e. first roll of next frame
            console.log("OH!" + this._f1Score);
        }
        else {
          this._f1Score;
        }
        return this._f2Score;
  }
  else { //in this frame the player rolls a spare or anything else.
    // this._f2Roll2 = frame2.roll2();
    // this._f2StrikeType = frame2.getStrikeType();
    //
    // this._f1StrikeType = frame1.getStrikeType();
    // this._f2Score = frame2.getFrameScore();
    // this._totalScore.push(this._f2Score);
    // this._f1Score = frame1.getFrameScore();
    // ///****************************
    //   if (this._f1StrikeType === "X") {
    //     this._f1Score = this._f1Score + this._f2Roll1 + this._f2Roll2;
    //   }
    //   else if(this._f1StrikeType === "/"){
    //     console.log("YO!" + this._f1Score );
    //     this._f1Score = this._f1Score + this._f2Roll1; //i.e. first roll of next frame
    //   }
    //   else{
    //     this._f1Score;
    //   }
      return this._f2Score;
  }

};


// Game.prototype.frame3 = function() {
//   frame3 = new Frame();
//   this._f3Roll1 = frame3.roll1();
//   if (this._f3Roll1 === 10){ //if player gets a strike on 1st roll
//     this._f3StrikeType = frame3.getStrikeType();
//     this._f3Score = frame3.getFrameScore();
//     this._totalScore.push(this._f3Score);
//
//     //add bonus to previous frame for strike or half-strike
//     this._f2Score = frame2.getFrameScore();
//     var bonus1 = this.addBonus(this._f3StrikeType, this._f3Score, this._f2Score);
//     this._f1Score = this._f1Score + bonus1;
//
//     //add bonus to previous, previous frame for strike
//     this._f1Score = frame1.getFrameScore();
//     console.log("F1 SCORE IS " + this._f1Score);
//     var bonus2 = this.addBonus(this._f3StrikeType, this._f3Score, this._f1Score);
//     console.log("BONUS IS " + bonus2);
//     this._f1Score = this._f1Score + bonus2;
//     console.log("F1 SCORE + BONUS IS NOW" + this._f1Score);
//
//   return this._f3Score;
//   }
//   else {
//     // this._f3Roll2 = frame3.roll2();
//     // this._f3StrikeType = frame3.getStrikeType();
//     // this._f3Score = frame3.getFrameScore();
//     // this._totalScore.push(this._f3Score);
//     // this._f2Score = this.addBonus(this._f3StrikeType, this._f3Score, this._f2Score); //add bonus to last frame for strike
//     // this._f1Score = this._f1Score + this.addBonus(this._f3StrikeType, this._f3Score, this._f1Score); //add bonus to previous, previous frame for strike
//     return this._f3Score;
//   }
// };

// Game.prototype.frame4 = function() {
//   frame4 = new Frame();
//   this._f4Roll1 = frame4.roll1();
//   if (this._f4Roll1 === 10){ //if player gets a strike on 1st roll
//     this._f4StrikeType = frame4.getStrikeType();
//     this._f4Score = frame4.getFrameScore();
//     this._totalScore.push(this._f4Score);
//     this._f3Score = this.addBonus(this._f4StrikeType, this._f4Score, this._f3Score); //add bonus to last frame for strike
//     this._f2Score = this._f2Score + this.addBonus(this._f4StrikeType, this._f4Score, this._f2Score); //add bonus to previous, previous frame for strike
//     return this._f4Score;
//   }
//   else {
//     this._f4Roll2 = frame4.roll2();
//     this._f4StrikeType = frame4.getStrikeType();
//     this._f4Score = frame4.getFrameScore();
//     this._totalScore.push(this._f4Score);
//     this._f3Score = this.addBonus(this._f4StrikeType, this._f4Score, this._f3Score); //add bonus to last frame for strike
//     this._f2Score = this._f2Score + this.addBonus(this._f4StrikeType, this._f4Score, this._f2Score); //add bonus to previous, previous frame for strike
//     return this._f4Score;
//   }
// };

Game.prototype.frame5 = function() {
};

Game.prototype.frame6 = function() {
};

Game.prototype.frame7 = function() {
};

Game.prototype.frame8 = function() {
};

Game.prototype.frame9 = function() {
};

Game.prototype.frame10 = function() {
};

// Game.prototype.addBonus = function(lastStrikeType, this1stRoll, lastScore) {
//   if (lastStrikeType === "X") {
//     lastScore = lastScore + 10;
//     return lastScore;
//   }
//   else if (strikeType === "/") {
//     lastScore = this1stRoll + lastScore;
//     return lastScore;
//   } else {
//     return lastScore;//remains the same if no bonus
//   }
// };
