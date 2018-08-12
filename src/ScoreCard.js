function ScoreCard() {
  this.rolls = [];
  this.frame_scores = [];
  this.current_roll = 1;
  this.current_frame = 1;
  this.last_frame_was_strike = false;
  this.two_frames_ago_was_strike = false;
  this.last_frame_was_spare = false;
  this.last_frame_score = 0;
  this.two_frames_ago_score = 0;
};

ScoreCard.prototype.enter_roll = function (roll) {
  if (this.first_roll_of_frame()) { //if on the first roll of a frame
    this.rolls.push(roll);
    if (roll < 10) { // if not a strike on the first roll of a frame
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

ScoreCard.prototype.spare = function (roll) {
  return ((this.last_roll() + roll) === 10);
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
      if (this.last_frame_was_strike === true) {
        if (this.two_frames_ago_was_strike  === true) {
          this.frame_scores.push(30);
        };
      }
      else if (this.last_frame_was_spare === true) {
        this.frame_scores.push(20);
      }
    break;
    case "spare":
      if (this.last_frame_was_strike === true) {
        if (this.two_frames_ago_was_strike === true) {
          this.frame_scores.push(20 + this.last_roll());
        };
        this.frame_scores.push(20);
      }
      else if (this.last_frame_was_spare === true) {
        this.frame_scores.push(10 + this.last_roll());
      }
    break;
    default:
      if (this.last_frame_was_strike === true) {
        if (this.two_frames_ago_was_strike === true) {
          this.frame_scores.push(20 + this.last_roll());
        };
        this.frame_scores.push(10 + current_frame_score);
      };
      this.frame_scores.push(current_frame_score);
  }
};
