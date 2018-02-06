function Game() {
  this.rollCounter = 0;
  this.frameCounter = 1;
  this.scoreArray = [];
  this.finalScore = [];
  this.pinsDropped = 0;
}

Game.prototype.playerRolls = function (rollscore) {
  this.rollCounter += 1;
  this.pinsDropped += rollscore;
  this.isStrike();
  this.isSpare();

  if (this.rollCounter % 2 === 0) {
    this.frameCounter ++;
    this.scoreArray.push(this.pinsDropped);
    this.pinsDropped = 0;
    this.addingScore();
  }

  //console.log(this.scoreArray);
  return rollscore;
};

Game.prototype.isStrike = function () {

  if (this.pinsDropped === 10 && this.rollCounter % 2 !== 0) {
    this.rollCounter += 1;
    return true;
  }
};

Game.prototype.isSpare = function () {
  return this.playerRolls + this.scoreArray[this.scoreArray.length - 1] === 10;
};

Game.prototype.tenthFrame = function () {
  return this.frameCounter > 9;
};

Game.prototype.addingScore = function () {
console.log('addingScore');
for (var i = 0; i < this.scoreArray.length - 1; i++) {
  console.log('addingScore');

  if (isStrike()) {
    console.log('if strike');

    if (this.scoreArray[i + 1] === 10 && this.scoreArray[i + 2] === 10) {
      this.finalScore[i] = 30;

    } else if (this.scoreArray[i + 1] === 10 && this.scoreArray[i + 2] < 10){
      console.log('if spare');

      this.finalScore[i] = 20 + this.scoreArray[i + 2];

    }else {
      console.log('if neither');

      this.finalScore[i] = 10 + this.scoreArray[i + 1];
    }

  } else if (isSpare()) {

    if (this.scoreArray[i + 1] <= 10 ) {

      this.finalScore[i] = 10 + this.scoreArray[i + 1];
    }

  } else {
    this.finalScore[i] = this.scoreArray[i];
  }
}

Game.prototype.scorePerFrame = function (frame) {
  frameNo = frame - 1;
  return this.finalScore[frameNo];
};
};
