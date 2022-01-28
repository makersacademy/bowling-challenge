class Bowling {

  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    this.rolls.push(pins)
  }

  calculateScore(){
    let total = 0;
    let index = 0;

    for(let i = 0; i < 10; i ++){

      if (this.spare(index)){
        total += this.bonusScore(index)
        index += 2
      } else if (this.strike(index)) {
        total += this.bonusScore(index)
        index += 1
      } else {
        total += this.standardFrame(index);
        index += 2
      }
      
    }
    return total
    }
  
    //private methods

    standardFrame(index){
      return this.rolls[index] + this.rolls[index + 1];
    }

    spare(index){
      return this.rolls[index] + this.rolls[index + 1] == 10;
    }

    strike(index){
      return this.rolls[index] == 10
    }

    bonusScore(index){
      return this.rolls[index] + this.rolls[index + 1] + this.rolls[index + 2];
    }

}

module.exports = Bowling;