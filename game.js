class Game {

  constructor() {
    this.rolls = 0;
  }
  
  
  roll(pins){
    this.rolls += pins;
  }

  get points() {
    return this.rolls;
  }





}

module.exports = Game;