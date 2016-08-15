function ScoreGame() {
  this.resetGame();
}

ScoreGame.prototype.getScore = function(score) {
  if (this.gameOn === false) {
    return "Your game is finished.";
  }
  switch (this.tryNth) {
    case 1:
      if (this.isUndefined(score)) {
      score = Math.floor(Math.random()*11);
      }
      this.game[this.frameNth][0][this.tryNth-1] = score;
      console.log("try1:", this.game[this.frameNth][0][this.tryNth-1]);
      console.log(
       "Frame:", this.frameNth, "try:", this.tryNth,
       "score:", this.game[this.frameNth][0][this.tryNth-1]
      );

      if (this.bonus === "spare") {
        this.totalScore += (10 + score);
        this.game[this.frameNth-1][1] = this.totalScore;
        console.log("previous frameTotal:",this.game[this.frameNth-1][1]);
        this.bonus = "";
      }

      // if (this.bonus === "strike") {
      //   this.strikeSum.push(score);
      //   if (this.strikeSum.length === 2) {
      //     this.totalScore += 10 + this.strikeSum.reduce(function(a,b){return a+b});;
      //     this.game[this.strikeFrame][1] = this.totalScore;
      //     console.log("previous frameTotal:",this.game[this.strikeFrame][1]);
      //     this.bonus = "";
      //   }
      // }

      if (this.frameNth >=3 && this.strikeFrames[this.frameNth-2] === true) {
        if (this.strikeFrames[this.frameNth-1] === true) {
          this.totalScore += 20 + score;
          this.game[this.frameNth-2][1]= this.totalScore;
        }
      }

      if (score === 10) {
        console.log("STRIKE!");
        // this.frameNth === 10 ? this.bonus = "TFStrike" : this.bonus = "strike";
        this.strikeFrames[this.frameNth] = true;

        if (this.frameNth <10){
          this.moveToNextFrame();
        } else if(this.frameNth === 10){
          console.log("moving on to 2nd try. Score for 1st try is:",   this.game[this.frameNth][0][this.tryNth-1] );
          console.log("total score is:", this.totalScore);
          this.moveToNextTry();
        }
      } else {
        console.log(
         "Frame:", this.frameNth, "try:", this.tryNth,
         "score:", score
        );
        this.moveToNextTry();
      }
      break;

    case 2:
      var try1 = this.game[this.frameNth][0][(this.tryNth-1)-1];

      if (this.isUndefined(score)) {
        score = Math.floor(Math.random()*(11-try1));
      }
      // else if (this.isUndefined(score) && this.bonus === "TFStrike"){
      //   score = Math.floor(Math.random()*11);
      // }
      this.game[this.frameNth][0][this.tryNth-1] = score;
      var try2 = this.game[this.frameNth][0][this.tryNth-1];
      console.log("try2:", try2);

      if (this.strikeFrames[this.frameNth-1]=== true){
        this.totalScore += 10 + this.game[this.frameNth][0][0]+
                           score;
        this.game[this.frameNth-1][1]= this.totalScore;
      }
      // if (this.bonus === "strike") {
      //   this.strikeSum.push(score);
      //   if (this.strikeSum.length === 2) {
      //     this.totalScore += 10 + this.strikeSum.reduce(function(a,b){return a+b});;
      //     this.game[this.strikeFrame][1] = this.totalScore;
      //     console.log("previous frameTotal:",this.game[this.strikeFrame][1]);
      //     this.bonus = "";
      //   }
      // }

      if (try1 < 10 && (try1+try2)===10) {
        this.bonus = "spare";
        console.log(
         "Frame:", this.frameNth, "try:", this.tryNth,
         "score:", score, "bonus:", this.bonus
        );
        if (this.frameNth ===10) {
          this.moveToNextTry();
        } else {
          this.moveToNextFrame();
        }

      } else {
        this.totalScore += try1 + try2;
        this.game[this.frameNth][1] = this.totalScore;
        console.log(
         "Frame:", this.frameNth, "try:", this.tryNth,
         "score:", score
        );
        if (this.frameNth ===10) {
          this.gameOn = false;
        } else {
          this.moveToNextFrame();
        }
      }

      // else if(this.bonus === "spare" || this.bonus === "TFStrike"){
      //   this.bonus = "";
      //   console.log("moving on to 3rd try. Score for 2nd try is:",   this.game[this.frameNth][0][this.tryNth-1] );
      //   console.log("total score is:", this.totalScore);
      //   this.moveToNextTry();
      // } else {
      //   console.log("You finished the game. 10th frame with 2 tries");
      //   this.gameOn = false;
      // }
      break;

    case 3:
      if (this.isUndefined(score)) {
      score = Math.floor(Math.random()*11);
      }
      this.game[this.frameNth][0][this.tryNth-1] = score;
      console.log("try3:", this.game[this.frameNth][0][this.tryNth-1]);
      var try1 = this.game[this.frameNth][0][(this.tryNth-1)-2];
      var try2 = this.game[this.frameNth][0][(this.tryNth-1)-1];
      var try3 = this.game[this.frameNth][0][this.tryNth-1];
      this.totalScore += try1 + try2 + try3;
      this.game[this.frameNth][1] = this.totalScore;
      console.log("try 1 score:", try1, "try 2 score:", try2, "try 3 score:", try3);
      console.log("totalScore is:", this.totalScore);
      this.bonus = "";
      console.log("You finished the game. 10th frame with 3 tries");
      this.gameOn = false;
  }

};

ScoreGame.prototype.resetGame = function(){
  this.totalScore = 0;
  this.game =[ [[0,0],0], [[0,0],0], [[0,0],0], [[0,0],0], [[0,0],0], [[0,0],0],
              [[0,0],0], [[0,0],0], [[0,0],0], [[0,0],0], [[0,0,0],0]];
  this.strikeFrames = [0,false,false,false,false,false,
                         false,false,false,false,false];
  this.frameNth = 1;
  this.tryNth = 1;
  this.bonus = "";
  this.strikeFrame = 0;
  this.strikeSum = [];
  this.gameOn = true;
}

ScoreGame.prototype.isUndefined = function(score){
  return typeof score === 'undefined';
}

ScoreGame.prototype.moveToNextTry = function() {
  this.tryNth +=1;
}

ScoreGame.prototype.moveToNextFrame = function(){
  this.frameNth += 1;
  this.tryNth = 1;
}

// ScoreGame.prototype.calcBonus = function(score) {
//   return score+10;
// };
//
// ScoreGame.prototype.total = function(score, bonus) {
//   this.frameScore += score + bonus;
//   this.frame.push(this.frameScore);
//   return this.totalScore;
// };
