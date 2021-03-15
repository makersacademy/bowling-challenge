class Frame {
  constructor(number) {
    this.number = number;
    this.score = 0;
    this.bonusBowls = 0;
    this.complete = false;
    this.bowls = {};
    this.bowlCount = 0;
  }

  addBowl(pins, bowl) {
    let key = String(bowl)
    this.bowls[key] = pins;
    this._setBowlCount();
    this._updateScore(pins);
    this._checkBonus();
    this._checkComplete();
  }

  addBonusPoints(pins) {
    this.score += pins;
    this.bonusBowls -= 1;
    if (this.bonusBowls === 0) {
      this.complete = true;
    }
  }

  _updateScore(pins) {
    this.score += pins;
  }

  _checkComplete() {
    if (this.bowlCount === 2 && this.score < 10) {
      this.complete = true;
    } else if (this.bowlCount === 3) {
      this.complete = true;
    }
  }

  _checkBonus() {
    if (this.bowlCount === 1 && this.score === 10) {
      this.bonusBowls = 2;
    } else if (this.bowlCount === 2 && this.score === 10) {
      this.bonusBowls = 1;
    }
  }

  _setBowlCount() {
    this.bowlCount = Object.keys(this.bowls).length;
  }
 }