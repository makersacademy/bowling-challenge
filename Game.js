class Game {
  constructor(pins) {
    this.rolls = [];
  }

  roll(pins) {
  this.rolls.push(pins);
  }

  score() {
    
    let total_score = 0
    let roll_index = 0

    total_score += this.rolls[roll_index] + this.rolls[roll_index+1];
    roll_index += 2;

    return total_score;
  }
}

module.exports = Game;
