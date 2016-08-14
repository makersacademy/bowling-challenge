function ScoreGame() {
  this.resetGame();
}

ScoreGame.prototype.getScore = function(score) {

  switch (this.tryNth) {
    case 1:
      if (typeof score === 'undefined') {
      score = Math.floor(Math.random()*11);
      }
      this.game[this.frameNth-1][0][this.tryNth-1] = score;
      if (this.bonus === "spare") {
        this.game[(this.frameNth-1)-1][1] = 10 + score;
        console.log("previous frameTotal:",this.game[(this.frameNth-1)-1][1]);
        this.bonus = "";
      }

      if (score === 10) {
        this.bonus = "strike";
        console.log(
         "Frame:", this.frameNth, "try:", this.tryNth,
         "score:", score, "Bonus:", this.bonus
        );
        this.frameNth += 1;
        this.tryNth = 1;
      } else {
        console.log(
         "Frame:", this.frameNth, "try:", this.tryNth,
         "score:", score, "Bonus:", this.bonus
        );
        this.tryNth +=1;
      }
      break;
    case 2:
      if (typeof score === 'undefined') {
        score = Math.floor(Math.random()*(11-this.game[this.frameNth-1][0][(this.tryNth-1)-1]));
      }
      this.game[this.frameNth-1][0][this.tryNth-1] = score;

      var try1 = this.game[this.frameNth-1][0][(this.tryNth-1)-1];
      var try2 = this.game[this.frameNth-1][0][this.tryNth-1];
      if ((try1+try2)===10) {
        this.bonus = "spare";
        console.log(
         "Frame:", this.frameNth, "try:", this.tryNth,
         "score:", score, "Bonus:", this.bonus
        );
      } else {
        this.game[this.frameNth-1][1] = try1 + try2;
        console.log(
         "Frame:", this.frameNth, "try:", this.tryNth,
         "score:", score, "Bonus:", this.bonus
        );
      }
      this.frameNth += 1;
      this.tryNth = 1;
  }

};

ScoreGame.prototype.resetGame = function(){
  this.totalScore = 0;
  this.game =[ [[0,0],0], [[0,0],0], [[0,0],0], [[0,0],0], [[0,0],0],
              [[0,0],0], [[0,0],0], [[0,0],0], [[0,0],0], [[0,0,0],0]];
  this.frameNth = 1;
  this.tryNth = 1;
  this.bonus = "";
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
