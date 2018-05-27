function Bowling() {
  this.pins = 10
  this.current_frame = 1
  this.current_roll = 1
  this.frame_score = []
  this.score_card = []
  this.game_scores = []
}

Bowling.prototype.knock_pins = function(num) {
  if (this.current_frame === 10) {
    this.frame_ten(num);
  } else {
    this.pins_knocked(num);
    this.calculate_scoring(num);

    if (this.current_roll === 2 || this.pins === 0) {
      this.end_frame();
    } else {
      this.current_roll = 2;
    };
  };
};

Bowling.prototype.pins_knocked = function(num) {
  if (this.pins - num < 0 || num > 10) {
    throw("You cannot knock over more pins than there are standing")
  } else {
    this.pins -= num;
    this.frame_score.push(num)
  };
};

Bowling.prototype.end_frame = function() {
  if (this.current_frame === 10) {
    this.score_card.push(this.frame_score)
    this.score();
    this.reset_game();
  } else {
    this.new_frame();
  };
};

Bowling.prototype.reset_game = function() {
  this.pins = 10
  this.current_frame = 1
  this.current_roll = 1
  this.frame_score = []
  this.score_card = []
};

Bowling.prototype.score = function() {
  var total = 0
  this.score_card.forEach(function(frame_score) {
    frame_score.forEach(function(roll) {
      total += roll
    });
  });
  this.game_scores.push(total)
};

Bowling.prototype.new_frame = function() {
  this.pins = 10
  this.current_frame += 1
  this.current_roll = 1
  this.score_card.push(this.frame_score)
  this.frame_score = []
};

Bowling.prototype.previous_frame = function() {
  return (this.score_card[this.score_card.length - 1])
}

Bowling.prototype.frame_before_last = function() {
  return (this.score_card[this.score_card.length - 2])
}

Bowling.prototype.previous_frame_was_a_spare = function() {
  return (this.previous_frame().length === 2 && this.previous_frame().reduce(function(acc, val) { return acc + val; }) == 10)
}

Bowling.prototype.previous_frame_was_a_strike = function() {
  return (this.previous_frame().length === 1)
}

 Bowling.prototype.frame_ten = function(num) {
   this.pins_knocked(num);
   this.frame_10_scoring(num)
    //If the third roll has been taken, or two rolls have been taken and the second roll has not knocked all pins
    if (this.current_roll === 3 || (this.current_roll === 2 && this.pins > 0)) {
      this.end_frame();
      //Else if it is the second roll and all pins have been knocked
    } else if (this.current_roll === 2 && this.pins === 0) {
      this.current_roll = 3;
      this.pins = 10;
      //Else if it is the first roll and it is a strike
    } else if (this.current_roll === 1 && num === 10) {
      this.current_roll = 2;
      this.pins = 10;
      //Else if it is the first roll
    } else if (this.current_roll === 1) {
      this.current_roll = 2;
    };
  };




//METHODS THAT ARE TOO LONG



Bowling.prototype.frame_10_scoring = function(num) {
  //SPARE SCORING
  if (this.current_roll === 1 && this.previous_frame_was_a_spare()) {
    this.previous_frame().push(num);
  };
    //STRIKE SCORING
  if (this.current_roll === 2 && this.previous_frame_was_a_strike()) {
    this.previous_frame().push(this.frame_score[0]);
    this.previous_frame().push(num);
  };
    //If on the first roll of the current frame, and the score of the frame before the last is currently a strike plus a single score
  if ((this.current_roll === 1) && (this.frame_before_last().length === 2) && (this.frame_before_last().includes(10))) {
    //Add to the frame score before last, the score of this first roll
    this.frame_before_last().push(num);
  };
};

Bowling.prototype.calculate_scoring = function(num) {
  if (this.current_frame > 1) {
//STRIKE SCORING
    if (this.current_roll === 2 && this.previous_frame_was_a_strike()) {
      this.previous_frame().push(this.frame_score[0]);
      this.previous_frame().push(num);
    };
    //If on the first roll of the current frame, and the prevous frame score was 10, and the current roll is 10
    if ((this.current_roll === 1) && (this.previous_frame_was_a_strike()) && (num === 10)) {
      this.previous_frame().push(num);
    };
//SPARE SCORING
    if (this.current_roll === 1 && this.previous_frame_was_a_spare()) {
      this.previous_frame().push(num);
    };
  };
//CONDITIONAL FOR GETTING A STRIKE, FOLLOWED BY A STRIKE, FOLLOWED BY FURTHER SCORING
  //If on any frame beyond the second
  if (this.current_frame > 2) {
    //If on the first roll of the current frame, and the score of the frame before the last is currently a strike plus a single score
    if ((this.current_roll === 1) && (this.frame_before_last().length === 2) && (this.frame_before_last().includes(10))) {
      this.frame_before_last().push(num);
    };
  };
};
