class Scorecard {

  constructor() {
    this.player_rolls = []
  }


  player_roll(pins_knocked) {
    this.player_rolls.push(pins_knocked);
  };

  points() {
    return 0;
  };
};
