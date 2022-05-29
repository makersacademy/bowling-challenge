class Frame {
  constructor() {
    this.rolls = []
  }

  input_roll(roll) {
    if(roll <= 10 && this.sum_it(this.rolls) + roll <= 10){
      this.rolls.push(roll)}
    else {
      throw 'pick a lower number';
    }
  }

  strike() {
    if (this.sum_it(this.rolls) === 10 && this.rolls.length === 1) {
      return true}
    else {
      return false
    }
  }

  spare() {
    if (this.sum_it(this.rolls) === 10 && this.rolls.length === 2) {
      return true
    }
    else {
      return false}
  }
  
  sum_it(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
    sum += array[i]
    }
    return sum
  }

}


module.exports = Frame