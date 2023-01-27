class Frame {
  constructor() {
    this.frame = []
  }

  add(n) {
    this.frame.push(n)
  }


  isStrike() { 
    return (this.frame.length === 1 ? true : false);
  }

  isSpare() { 
    return (this.frame.length === 2 && this.#total(this.frame) === 10 ? true : false); 
  }

  printFrame() {
    return this.frame;
  }

  #total(array) { // Method to add all the numbers in the array and return the total
    let total = 0
    array.forEach(number => total += number)
    return total
  }
}

module.exports = Frame;