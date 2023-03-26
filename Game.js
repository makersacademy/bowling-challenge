class Game {
  constructor(pins) {
    this.rolls = [];
  }

  roll(pins) {
  this.rolls.push(pins);
  }
}

module.exports = Game;



  // # record the number of pins knocked down on this roll
  // def roll(pins)
  //   raise 'Invalid number of pins' unless (0..10).include?(pins)
  //   @rolls << pins
  // end