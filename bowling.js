class Bowling {

  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    this.rolls.push(pins)
  }

  calculateCurrentScore(){
    let currentRolls = [...this.rolls]
    let currentTotal = 0
    let index = 0

    for(let i = 0; i < (20 - this.rolls.length); i++){
      currentRolls.push(0)
    }

    return this.#scoring(currentRolls, index, currentTotal)
    
  }

  calculateScore(){
    let total = 0;
    let index = 0;

    return this.#scoring(this.rolls, index, total)
    
    }

    //stop
    
    #scoring(arr, index, total){

      for(let i = 0; i < 10; i ++){

        if (this.#strike(arr, index)) { 
          total += this.#bonusScore(arr, index)
          index += 1
        } else if (this.#spare(arr, index)){
          total += this.#bonusScore(arr, index)
          index += 2
        }  else {
          total += this.#standardFrame(arr, index);
          index += 2
        }
        
      }
      return total
    }

    #standardFrame(arr, index){
      return arr[index] + arr[index + 1];
    }

    #spare(arr, index){
      return arr[index] + arr[index + 1] == 10;
    }

    #strike(arr, index){
      return arr[index] == 10
    }

    #bonusScore(arr, index){
      return arr[index] + arr[index + 1] + arr[index + 2];
    }

}

module.exports = Bowling;