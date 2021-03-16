class Scorecard {

  constructor() {
    this.player_rolls = []
  }


  player_roll(pins_knocked) {
    this.player_rolls.push(pins_knocked);
  };

  points() {
    var score = 0;
    var player_rolls_index = 0;
    for (let i = 0; i < 10; i++) {
        if (this.player_rolls[player_rolls_index] + this.player_rolls[player_rolls_index + 1] == 10){
          score += this.player_rolls[player_rolls_index] + this.player_rolls[player_rolls_index + 1] + this.player_rolls[player_rolls_index + 2]
          player_rolls_index += 2
        }
        else {
          score += this.player_rolls[player_rolls_index] + this.player_rolls[player_rolls_index + 1]
          player_rolls_index += 2
        }
      }
    return score;
  }

};
