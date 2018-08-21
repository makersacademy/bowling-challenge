function ScoreCard() {
  this.rolls = [];
  this.final_frame_rolls = [];
  this.frame_scores = [];
  this.current_roll = 1;
  this.current_frame = 1;
  this.last_frame_was_strike = false;
  this.two_frames_ago_was_strike = false;
  this.last_frame_was_spare = false;
};

ScoreCard.prototype.enter_roll = function (roll) {
  if (roll > 10 ) {
    throw new Error("Can not knock more than 10 pins in a single roll");
  }
  if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].includes(roll) === false) {
    throw new Error("Please enter a valid integer equal to or greater than 0");
  }
  if (this.first_roll_of_frame()) { //if on the first roll of a frame
    this.rolls.push(roll);
    if (this.on_last_frame()) {
      this.final_frame_rolls.push(roll);
    }
    this.update_twoStrikesAgo_midframe(roll);
    if (roll < 10) { // if not a strike on the first roll of a frame
      if (this.last_frame_was_spare) {
        this.update_spare_midframe(roll);
      }
      this.current_roll ++;
    }
    else { //if strike on the first roll of a frame
      this.rolls.push(0);
      this.update_previous_scores("strike");
      this.update_strikes_and_spares("strike");
      this.current_roll += 2;
      this.current_frame ++;
    }
  }
  else { //if not on the first roll of a frame
    if (this.over_ten_pins_in_one_frame(roll)) {
      throw new Error("Can not knock more than 10 pins in a single frame");
    }
    else {
      if (this.spare(roll)) {
        this.update_previous_scores("spare");
        this.update_strikes_and_spares("spare");
      }
      else {
        this.update_previous_scores(this.last_roll() + roll);
        this.update_strikes_and_spares(roll);
      }
      this.rolls.push(roll);
      if (this.on_last_frame()) {
        this.final_frame_rolls.push(roll)
      }
      this.current_roll ++;
      this.current_frame ++;
    }
  }
};

ScoreCard.prototype.update_strikes_and_spares = function (current_frame_score) {
  if (this.last_frame_was_strike === true) {
    this.two_frames_ago_was_strike = true;
  }
  else {
    this.two_frames_ago_was_strike = false;
  };
  switch (current_frame_score) {
    case "strike":
    this.last_frame_was_spare = false;
    this.last_frame_was_strike = true;
    break;
    case "spare":
    this.last_frame_was_spare = true;
    this.last_frame_was_strike = false;
    break;
    default:
    this.last_frame_was_spare = false;
    this.last_frame_was_strike = false;
  };
};

ScoreCard.prototype.update_previous_scores = function (current_frame_score) {
  switch (current_frame_score) {
    case "strike":
      if (this.last_frame_was_spare === true) {
        this.frame_scores.push(20);
      }
    break;
    case "spare":
      if (this.last_frame_was_strike === true) {
        this.frame_scores.push(20);
      }
    break;
    default:
      if (this.last_frame_was_strike === true) {
        this.frame_scores.push(10 + current_frame_score);
      };
    this.frame_scores.push(current_frame_score);
  }
};

ScoreCard.prototype.update_spare_midframe = function (roll) {
  if (this.last_frame_was_spare === true) {
    this.frame_scores.push(10 + roll);
  }
};

ScoreCard.prototype.update_twoStrikesAgo_midframe = function (roll) {
  if (this.last_frame_was_strike === true) {
    if (this.two_frames_ago_was_strike === true) {
      this.frame_scores.push(20 + roll)
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

ScoreCard.prototype.spare = function (roll) {
  return ((this.last_roll() + roll) === 10);
};

ScoreCard.prototype.total_score = function () {
  return this.frame_scores.reduce((a, b) => a + b, 0)
};

ScoreCard.prototype.gameOver = function () {
  if (this.frame_scores.length >= 10) {
    return true;
  }
  else {
    return false;
  }
}

ScoreCard.prototype.on_last_frame = function () {
  if (this.rolls.length > 18) {
    return true;
  }
}
