Array.prototype.isSpare = function () {
  if (this[1] != null && this[0] + this[1] === 10) {
    return true;
  } else {
    return false;
  }
};

Array.prototype.isStrike = function () {
  if (this[1] == null && this[0] === 10) {
    return true;
  } else {
    return false;
  }
};

Array.prototype.sum = function () {
  return this.reduce((acc, val) => acc + val, 0);
};

class Bowling {
  constructor(array) {
    this.total_Scores = 0;
    this.scores = [];
    this.frame = 0;
    this.array = array;
  }

  next_roll() {
    return this.array[this.frame + 1];
  }

  next_second_roll() {
    return this.array[this.frame + 2];
  }

  frame_ten() {
    this.total_Scores += this.array[9].sum();
    this.scores.push(this.total_Scores);
  }

  spare_add() {
    this.total_Scores += 10 + this.next_roll()[0];
    this.scores.push(this.total_Scores);
    this.frame++;
  }

  strike_add() {
    if (this.next_roll().length === 3) {
      this.total_Scores += 10 + this.next_roll()[0] + this.next_roll()[1];
    } else if (
      this.next_roll().isStrike() &&
      this.next_second_roll().isStrike()
    ) {
      this.total_Scores += 30;
    } else if (this.next_roll().isStrike()) {
      this.total_Scores += 20 + this.next_second_roll()[0];
    } else {
      this.total_Scores += 10 + this.next_roll().sum();
    }
    this.scores.push(this.total_Scores);
    this.frame++;
  }

  open_add() {
    this.total_Scores += this.array[this.frame].sum();
    this.scores.push(this.total_Scores);
    this.frame++;
  }

  score_Calculator() {
    if (this.frame === 9) {
      this.frame_ten();
    } else if (this.array[this.frame].isSpare()) {
      this.spare_add();
    } else if (this.array[this.frame].isStrike()) {
      this.strike_add();
    } else {
      this.open_add();
    }
  }

  get_scores() {
    for (let i = 0; i < 10; i++) {
      this.score_Calculator();
    }
    return this.scores;
  }
}

module.exports = Bowling;
