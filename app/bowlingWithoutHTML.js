
function Game() {
  this.frameNo = 1;
  this.ball = 1;
  this.firstGo;
  this.secondGo;
  this.frameTotal;
  this.game = {frame:[], total: 0};
  this.slider;
}

Game.prototype.randomAngle = function() {
  // var angle = Math.floor(Math.random() * 21) - 10;
  // $("#throwAngle").val(angle);
}

Game.prototype.bonusForStrike = function() {
  var strikeFrame = this.game.frame[this.frameNo - 2];
  this.game.total += this.frameTotal;
  strikeFrame[0]['frameTotal'] += this.frameTotal;
  // $("#frame" + (this.frameNo - 2) + " #ball3").text(strikeFrame[0]['frameTotal']); 
};

Game.prototype.bonusForSpareOrStrike = function(){
  var spareFrame = this.game.frame[this.frameNo - 1];
  this.game.total += this.frameTotal;
  spareFrame[0]['frameTotal'] += this.frameTotal;
  if(spareFrame[1] != 10) {
    // $("#frame" + (this.frameNo - 1) + " #ball3").text(spareFrame[0]['frameTotal']);
  }
};

Game.prototype.checkBonus = function() {
  if(this.frameNo > 2 && this.game.frame[this.frameNo - 2][1] === 10) {
    this.bonusForStrike();
  }
  if(this.frameNo > 1 && this.frameNo < 12 && this.game.frame[this.frameNo - 1][0]['frameTotal'] === 10) {
    this.bonusForSpareOrStrike();
  }
}

Game.prototype.play = function() {
  // this.slider = 10 - Math.abs($("#throwAngle").val());
  // var cellOne = $("#frame" + this.frameNo + " #ball1");
  // var cellTwo = $("#frame" + this.frameNo + " #ball2");
  // var cellFrameTot = $("#frame" + this.frameNo + " #ball3");

  if((this.frameNo === 11 && this.game.frame[10][0]['frameTotal'] === 10) || (this.frameNo === 12 && this.game.frame[10][1] === 10)) {
    if(this.ball === 1) {
      this.firstGo = this.slider;
      if(this.firstGo === 10) {
        second = 0;
        this.frameTotal = this.firstGo
        this.game.frame[this.frameNo] = [{'frameTotal': this.frameTotal}, this.firstGo, ];
        this.checkBonus();
        console.log(this);
        this.frameNo++;
        // $('#total').text(this.game.total);
      }
    }
  }
  if(this.frameNo < 11) {
    if(this.ball === 1) {
      this.firstGo = this.slider;
      // cellOne.text(this.firstGo);
      if(this.firstGo === 10) {
        second = 0;
        this.frameTotal = this.firstGo;
        this.game.frame[this.frameNo] = [{'frameTotal': this.frameTotal}, this.firstGo, 0];
        this.checkBonus();
        this.game.total += this.firstGo;
        console.log(this);
        this.frameNo++;
        // $('#total').text(this.game.total);
        this.randomAngle();
      } else {
        this.randomAngle();
        this.ball++;
      }
    }
    if(this.ball === 2 ) {
      this.secondGo = this.slider - this.firstGo < 1 ? 0 : this.slider - this.firstGo;
      this.frameTotal = this.firstGo + this.secondGo;
      // cellTwo.text(this.secondGo);
      if(this.frameTotal < 10) {
        // cellFrameTot.text(this.frameTotal);
      }
      this.game.frame[this.frameNo] = [{'frameTotal': this.frameTotal}, this.firstGo, this.secondGo];
      this.checkBonus();
      this.game.total += this.frameTotal;
      console.log(this);
      this.ball = 1;
      this.frameNo++;
      // $('#total').text(this.game.total);
      this.randomAngle();
    }
  }
};