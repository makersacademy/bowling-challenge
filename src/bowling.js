function Bowling() {
  this.pins = 10
  this.current_frame = 1
  this.current_roll = 1
  this.frame_score = []
  this.score_card = []
}

// Knocking down pins in a frame
Bowling.prototype.knock_pins = function(num) {

  //If the current frame is the 10th frame, abide by a different set of rules
  if (this.current_frame === 10) {
    this.frame_ten();
  };

  // If the number of pins to knock is more than there are, raise error
  if (this.pins - num < 0 || num > 10) {
    throw("You cannot knock over more pins than there are standing")
  } else {
    // Otherwise, knock over that many pins, and update the frame score
    this.pins -= num;
    this.frame_score.push(num)
  };
// If on any frame except the first
  if (this.current_frame > 1) {


//STRIKE SCORING

  //If on the second roll of the current frame, and the last frame score was 10
    if (this.current_roll === 2 && (this.score_card[this.score_card.length - 1]).length === 1 ) {
      //Add to the previous frame score, the two scores of the current frame
      this.score_card[this.score_card.length - 1].push(this.frame_score[0]);
      this.score_card[this.score_card.length - 1].push(num);
    }
    //If on the first roll of the current frame, and the prevous frame score was 10, and the current roll is 10
    if ((this.current_roll === 1) && ((this.score_card[this.score_card.length - 1]).length === 1) && (num === 10)) {
      //Add the current score of 10 to the previous frame score
      this.score_card[this.score_card.length - 1].push(num);
    }


//SPARE SCORING

  //If on the first roll of the current frame, and the previous frame score was a spare
    if (this.current_roll === 1 && (this.score_card[this.score_card.length - 1]).length === 2 && (this.score_card[this.score_card.length - 1]).reduce(function(acc, val) { return acc + val; }) == 10) {
      //Add to the previous frame score, the score of this first roll
      this.score_card[this.score_card.length - 1].push(num);
    };
  }


//CONDITIONAL FOR GETTING A STRIKE, FOLLOWED BY A STRIKE, FOLLOWED BY FURTHER SCORING

  //If on any frame beyond the second
  if (this.current_frame > 2) {
    //If on the first roll of the current frame, and the score of the frame before the last is currently a strike plus a single score
    if ((this.current_roll === 1) && ((this.score_card[this.score_card.length - 2]).length === 2) && ((this.score_card[this.score_card.length - 2]).includes(10))) {
      //Add to the frame score before last, the score of this first roll
      this.score_card[this.score_card.length - 2].push(num);
    };
  };

//If on the second roll of the frame, or all the pins have been knocked over
  if (this.current_roll === 2 || this.pins === 0) {
    //End the frame
    this.end_frame();
    //Otherwise, set the current roll to be the second of the frame
  } else {
  this.current_roll = 2;
  };
};

//End frame only occurs if completed 2 rolls in a frame, or all pins have been knocked over, i.e a strike has occured
Bowling.prototype.end_frame = function() {
  //If the current frame is 10, and all pins have been knocked, or two rolls have been taken
  if (this.current_frame === 10) {
    //Reset all game variables
    this.reset_game();
    //Otherwise, reset the appropriate variables, and start a new frame
  } else {
    this.pins = 10
    this.current_frame += 1
    this.current_roll = 1
    this.score_card.push(this.frame_score)
    this.frame_score = []
  };
};

//If frame 10 has been completed, reset all game variables
Bowling.prototype.reset_game = function() {
  this.pins = 10
  this.current_frame = 1
  this.current_roll = 1
  this.frame_score = []
  this.score_card = []
}









Bowling.prototype.frame_ten = function() {
  //follows same scoring rules in terms of past frames

  //Does not end frame if first roll is a strike

  //Does not end frame if second roll is a strike

  //Does not end frame if second roll is a spare

  //Ends game after two normal rolls

  //Ends game after 3 rolls

}
