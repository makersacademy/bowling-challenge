class Frame {
  strike (roll) {
    if (roll === 10) {
      return true;
    } else {
      return false;
    }
  }

  spare (roll1, roll2) {
    if (roll1 + roll2 === 10) {
      return true;
    } else {
      return false;
    }
  }

  calcBonus (roll1, roll2) {
    if (this.strike(roll1) === true) {
      return 2;
    } else if (this.spare(roll1, roll2)) {
      return 1;
    } else {
      return 0;
    }
  }
}
