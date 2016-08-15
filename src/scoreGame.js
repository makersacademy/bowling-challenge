function ScoreGame() {
  this.resetGame();
}

ScoreGame.prototype.getScore = function(score) {
  if (this.gameOn === false) {
    var str = "Your game is finished."
    $('#message').html(str);
    return str;
  }
  switch (this.tryNth) {
    case 1:
      if (this.isUndefined(score)) {
      score = Math.floor(Math.random()*11);
      }
      this.game[this.frameNth][0][this.tryNth-1] = score;
      var cellData = "f"+this.frameNth+"r"+this.tryNth;
      $("#"+cellData).html(score);
      if (this.bonus === "spare") {
        this.totalScore += (10 + score);
        this.game[this.frameNth-1][1] = this.totalScore;
        var frScoreData = "frScore"+(this.frameNth-1);
        $("#"+frScoreData).html(this.totalScore);
        this.bonus = "";
      }

      if (this.frameNth >=3 && this.strikeFrames[this.frameNth-2] === true) {
        if (this.strikeFrames[this.frameNth-1] === true) {
          this.totalScore += 20 + score;
          this.game[this.frameNth-2][1]= this.totalScore;
        }
      }

      if (score === 10) {
        var str = "STRIKE!";
        $('#message').html(str);
        this.strikeFrames[this.frameNth] = true;

        if (this.frameNth <10){
          this.moveToNextFrame();
        } else if(this.frameNth === 10){
          this.moveToNextTry();
        }
      } else {
        this.moveToNextTry();
      }
      break;

    case 2:
      var try1 = this.game[this.frameNth][0][(this.tryNth-1)-1];

      if (this.isUndefined(score)) {
        score = Math.floor(Math.random()*(11-try1));
      }
      if (this.isUndefined(score) && this.frameNth === 10 && try1 === 10) {
        score = Math.floor(Math.random()*11);
      }

      this.game[this.frameNth][0][this.tryNth-1] = score;
      var cellData = "f"+this.frameNth+"r"+this.tryNth;
      $("#"+cellData).html(score);

      var try2 = this.game[this.frameNth][0][this.tryNth-1];
      if (this.strikeFrames[this.frameNth-1]=== true){
        this.totalScore += 10 + this.game[this.frameNth][0][0]+
                           score;
        this.game[this.frameNth-1][1]= this.totalScore;
        var frScoreData = "frScore"+(this.frameNth-1);
        $("#"+frScoreData).html(this.totalScore);
      }

      if (try1 < 10 && (try1+try2)===10) {
        this.bonus = "spare";
        var str = "Spare!";
        $('#message').html(str);
        if (this.frameNth ===10) {
          this.moveToNextTry();
        } else {
          this.moveToNextFrame();
        }

      } else if (this.frameNth === 10 && try1 === 10) {
        this.moveToNextTry();
      } else {
        this.totalScore += try1 + try2;
        this.game[this.frameNth][1] = this.totalScore;
        var frScoreData = "frScore"+this.frameNth;
        $("#"+frScoreData).html(this.totalScore);
        if (this.frameNth ===10) {
          this.gameOn = false;
        } else {
          this.moveToNextFrame();
        }
      }

      break;

    case 3:
      if (this.isUndefined(score)) {
      score = Math.floor(Math.random()*11);
      }
      this.game[this.frameNth][0][this.tryNth-1] = score;
      var cellData = "f"+this.frameNth+"r"+this.tryNth;
      $("#"+cellData).html(score);
      var try1 = this.game[this.frameNth][0][(this.tryNth-1)-2];
      var try2 = this.game[this.frameNth][0][(this.tryNth-1)-1];
      var try3 = this.game[this.frameNth][0][this.tryNth-1];
      this.totalScore += try1 + try2 + try3;
      this.game[this.frameNth][1] = this.totalScore;
      var frScoreData = "frScore"+this.frameNth;
      $("#"+frScoreData).html(this.totalScore);
      this.bonus = "";
      var str = "You finished the game. 10th frame with 3 tries";
      $('#message').html(str);
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

var scoreGame = new ScoreGame();
$('#rollButton').click(function(){
  scoreGame.getScore();
});

$('#restartButton').click(function(){
  location.reload();
});
