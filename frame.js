class Frame {
  constructor() {
    this.rolls = []
  }

  input_roll(pins) {
    if(pins <= 10 && this.sum_it(this.rolls) + pins <= 10){
      this.rolls.push(pins)}
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

  bonus() {
    if(this.strike === true || this.spare === true) {
      return true
    }
    else {
      return false
    }
  }

  complete() {
    if(this.rolls.length === 2) {
      return true
    }
    else if(this.spare()) {
      return true 
    }
    else if(this.strike()) {
      return true
    }

    else {
      return false
    }
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