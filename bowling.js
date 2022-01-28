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
        total += this.spareScore(index)
        index += 2
      } else {
        total += this.rolls[index] + this.rolls[index + 1];
        index += 2
      }
      
    }
    return total
    }
  
    //private methods

    spare(index){
      return this.rolls[index] + this.rolls[index + 1] == 10;
    }

    spareScore(index){
      return this.rolls[index] + this.rolls[index + 1] + this.rolls[index + 2];
    }
}

module.exports = Bowling;