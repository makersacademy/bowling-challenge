class Game {

  constructor() {
    this.rolls = [];
  }
  
  
  roll(pins){
    this.rolls.push(pins);
  }

  get points() {
    let points = 0;
    let rollIndex = 0;

    // calculates points per game frames(therefore 10 is the iteration value)
    for (let frame = 0; frame < 10; frame++) {
      
      // isStrike?
      if(this.rolls[rollIndex] === 10) {
        points += 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
        rollIndex ++;
        continue;
      } 

      const framePoints = this.rolls[rollIndex] + this.rolls[rollIndex + 1];  
      
      if (framePoints === 10) {
        points += 10 + this.rolls[rollIndex + 2];
      } else {
        points += framePoints;
      }
      rollIndex += 2;
    } 
      return points; 
  }

}

module.exports = Game;