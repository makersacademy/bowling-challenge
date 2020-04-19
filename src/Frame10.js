class Frame10 {
  constructor() {
    this.roll1 = null;
    this.roll2 = null;
    this.roll3 = null;
    this.strikeBonus = null;
    this.spareBonus = null;
  }

  isComplete() {
    if (this.roll3 != null) {
      return true;
    }
    if (this.roll2 == null) {
      return false
    }
    if (this.roll1 === 10 && this.roll2 === 10) {
      return false;
    }
    if (this.roll1 == 10 && this.roll2 != null) {
      return true;
    }
    if (this.roll1 != null && this.roll1 + this.roll2 < 10) {
      return true;
    }
    return false;
  }



  bonusRoll() {
    return this.roll1 + this.roll2 >= 10;
  }

  isStrike() {
    return this.roll1 === 10;
  }

  isSpare() {
    return this.isStrike() ? false : this.roll1 + this.roll2 === 10;
  }
  
  total() {
    return (
      this.roll1 + this.roll2 + this.roll3 + this.spareBonus + this.strikeBonus
    );
  }
}
