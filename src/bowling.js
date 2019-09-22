const strikeBonusRoll = 2;
const spareBonusRoll = 1;

class Bowling {
  constructor() {
    this._gameOver = false;
    this.frame = 1;
    this.roll = 1;
    this.pinsInLane = 10;
    this.score = [];
    this.totalScore = 0;
  }

  bowl(pinsHit) {
    this.validateInput(pinsHit);

    if (this.frame < 10) {
      this.normalFrame(pinsHit);
    } else {
      this.finalFrame(pinsHit);
    }
  }

  normalFrame(pinsHit) {
    if (this.isStrike(pinsHit)) {
      this.score.push([pinsHit, strikeBonusRoll]);
      this.nextFrame();
    } else if (this.roll === 1) {
      this.score.push([pinsHit, 0]);
      this.secondRoll(pinsHit);
    } else if (this.isSpare(pinsHit)) {
      this.score.push([pinsHit, spareBonusRoll]);   
      this.nextFrame();
    } else {
      this.score.push([pinsHit, 0]);
      this.nextFrame();
    }
  }

  nextFrame() {
    this.frame += 1;
    this.roll = 1;
    this.pinsInLane = 10;

    this.totalScore = this.calculateScore();
  }

  secondRoll(pinsHit) {
    this.roll = 2;
    this.pinsInLane = 10 - pinsHit;
  }

  finalFrame(pinsHit) {
    if (this.isStrike(pinsHit)) {
      this.score.push([pinsHit, 0]);
      this.bonusRoll();
    } else if (this.roll === 1) {
      this.score.push([pinsHit, 0]);
      this.secondRoll(pinsHit);
    } else if (this.roll === 2 && pinsHit === 10) {
      this.score.push([pinsHit, 0]);
      this.bonusRoll();
    } else if (this.isSpare(pinsHit)) {
      this.score.push([pinsHit, 0]);
      this.bonusRoll();
    } else {
      this.score.push([pinsHit, 0]);
      this.gameOver();
    }
  }

  bonusRoll() {
    this.roll += 1;
    this.pinsInLane = 10;
  }

  gameOver() {
    this._gameOver = true;
    this.totalScore = this.calculateScore();
  }

  calculateScore() {
    var totalScore = 0;
    for (var i = 0; i < this.score.length; i++) {
      var [pins, bonus] = this.score[i];
      totalScore += pins;
      for (var j = 1; j <= bonus && i + j < this.score.length; j++) {
        var [bonusPins, _] = this.score[i + j];
        totalScore += bonusPins;
      }
    }
    return totalScore;
  }

  validateInput(pinsHit) {
    if (this._gameOver) {
      throw 'Game over!';
    }
    if (pinsHit > this.pinsInLane) {
      throw 'Invalid input. Number greater than pins in lane.';
    }
  }

  isStrike(pinsHit) {
    return (this.roll === 1 && pinsHit === 10);
  }

  isSpare(pinsHit) {
    return (this.roll === 2 && pinsHit === this.pinsInLane);
  }
}

  