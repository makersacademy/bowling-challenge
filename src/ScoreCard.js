function ScoreCard() {
  this.rolls = [];
  this.frame_scores = [];
  this.current_roll = 1;
  this.current_frame = 1;
};

ScoreCard.prototype.enter_roll = function (roll) {
  if (this.first_roll_of_frame()) { //if on the first roll of a frame
    this.rolls.push(roll);
    if (roll < 10) { // if not a strike on the first roll of a frame
      this.current_roll ++;
    }
    else { //if strike on the first roll of a frame
      this.rolls.push(0);
      this.current_roll += 2;
      this.current_frame ++;
    }
  }
  else { //if not on the first roll of a frame
    if (this.over_ten_pins_in_one_frame(roll)) {
      throw new Error("Can not knock more than 10 pins in a single frame");
    }
    else {
      this.rolls.push(roll);
      this.current_roll ++;
      this.current_frame ++;
    }
  }
};



ScoreCard.prototype.last_roll = function () {
  return this.rolls[this.current_roll - 2];
}

ScoreCard.prototype.first_roll_of_frame = function () {
  return (this.current_roll % 2 === 1);
};

ScoreCard.prototype.over_ten_pins_in_one_frame = function (roll) {
  return ((this.last_roll() + roll) > 10);
};

ScoreCard.prototype.last_frame_was_strike = function () {

};

ScoreCard.prototype.two_frames_ago_was_strike = function () {

};
