class Scorecard {
  constructor() {
    this.scores = [];
  };

  roll(score) {
    if(this.#is_an_invalid_roll(score)) {
      throw this.#invalid_roll_message(score);
    } else if(this.#is_the_extra_roll()) {
      this.#add_to_frame(score);
    } else if(this.#is_a_new_frame()) {
      this.#start_new_frame(score);
    } else {
      this.#add_to_frame(score);
    };
  };

  show() {
    if(this.#is_an_incomplete_game()) throw this.#incomplete_game_message();
    return this.#bonus() + this.#total_pins();
  }


  #is_a_new_frame() {
    if(this.#is_the_first_roll_of_game()) return true;
    if(this.#is_after_a_strike() && this.#is_not_the_last_frame()) return true;
    if(this.#is_after_a_2_roll_frame() && this.#is_not_the_last_frame()) return true;
  };

  #is_an_invalid_roll(score) {
    if(score > 10) return true;
    if(typeof score !== 'number') return true;
    if(Number.isInteger(score) !== true) return true;
    if(score < 0) return true;
    if(this.#is_the_first_roll_of_game()) return false;
    if(this.#is_the_last_frame() && this.#is_an_illegal_extra_roll()) return true;
    if(this.#is_the_last_frame() && this.#is_after_3rd_roll()) return true;
    if(this.#is_going_to_make_frame_score_impossible(score)) return true;
    return false;
  };
  
  #is_the_extra_roll() {
    return (this.#is_the_last_frame()
        && (this.#is_after_a_strike() || this.#is_after_a_spare())
        && this.#is_after_a_2_roll_frame());
  };

  #is_the_first_roll_of_game() {
    return this.scores.length === 0;
  };

  #is_after_a_strike() {
    return this.scores[this.scores.length - 1][0] === 10;
  };

  #is_after_a_spare() {
    return this.scores[this.scores.length - 1][0] + this.scores[this.scores.length - 1][1] === 10;
  };

  #is_after_a_2_roll_frame() {
    return this.scores[this.scores.length - 1].length === 2;
  };

  #is_an_incomplete_frame() {
    return this.scores[this.scores.length - 1].length === 1;
  };

  #is_an_illegal_extra_roll() {
    return this.scores[9].length === 2 && (this.scores[9][0] + this.scores[9][1] < 10);
  };
  
  #is_after_3rd_roll() {
    return this.scores[9].length > 2;
  };
  
  #is_the_last_frame() {
    return this.scores.length === 10;
  };

  #is_not_the_last_frame() {
    return this.scores.length !== 10;
  };

  #is_going_to_make_frame_score_impossible(score) {
    if(this.#is_the_extra_roll()) {
      return this.#is_making_the_code_DRY(score, 1)
    } else {
      return this.#is_making_the_code_DRY(score, 0)
    };
  };

  #is_making_the_code_DRY(score, previous_roll_index) {
    if(this.scores[this.scores.length - 1][previous_roll_index] + score > 10 
      && this.scores[this.scores.length - 1][previous_roll_index] !== 10) {
      return true;
    } else {
      return false;
    };
  };

  #is_an_incomplete_game() {
    if(this.#is_the_last_frame() === false) {
      return true;
    } else if(this.#is_the_last_frame() 
    && (this.#is_after_a_strike() || this.#is_after_a_spare()) 
    && this.#is_after_3rd_roll() === false) {
      return true;
    } else if(this.#is_the_last_frame()
    && this.#is_an_incomplete_frame()) {
      return true;
    } else {
    return false;
    };
  };

  #start_new_frame(score) {
    this.scores.push([score]);
  };

  #add_to_frame(score) {
    this.scores[this.scores.length - 1].push(score);
  };

  #invalid_roll_message(score) {
    if(score > 10) return "The maximum score for one roll is 10! Try again...";
    if(typeof score !== 'number') return "Input scores as numbers please! Try again...";
    if(Number.isInteger(score) !== true) return "Seems impossible to knock over part of a pin!";
    if(score < 0) return "Seems very unlikely that you would be able to put pins up with a bowling ball!";
    if(this.#is_the_last_frame() && this.#is_an_illegal_extra_roll()) return "This game is over, call show() to get your final score...";
    if(this.#is_the_last_frame() && this.#is_after_3rd_roll()) return "No more rolls, three was already quite generous!";
    if(this.#is_going_to_make_frame_score_impossible(score)) return "The maths don't work on those last two rolls! Try again...";
  };

  #incomplete_game_message() {
    return `Hey, you still have frames to roll! ${this.#how_many_to_go()} to complete`;
  };

  #how_many_to_go() {
    if(this.scores.length === undefined) {
      return 10;
    } else if(this.scores.length === 10) {
      return 1;
    } else if(this.#is_after_a_strike() || this.#is_after_a_2_roll_frame()) {
      return 10 - this.scores.length;
    } else {
      return 11 - this.scores.length;
    };
  };

  #bonus() {
    let points = 0

    for(i = 0; i < 9; i++) {
      if (i === 8 && this.scores[8][0] === 10) {
        points += (this.scores[9][0] + this.scores[9][1]);
      } else if (this.scores[i][0] === 10 && this.scores[i + 1][0] === 10) {
        points += (10 + this.scores[i + 2][0]);
      } else if (this.scores[i][0] === 10) {
        points += (this.scores[i + 1][0] + this.scores[i + 1][1]);
      } else if ((this.scores[i][0] + this.scores[i][1]) === 10) {
        points += this.scores[i + 1][0];
      };
    };
    return points;
  }; 
  
  #total_pins() {
    return this.scores.flat().reduce((rolling, score) => rolling + score);
  };

};

module.exports = Scorecard;