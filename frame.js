class Frame {
  constructor() {
    this.frame = []
    this.bonus = []
  }

  add(n) {
    this.frame.push(n)
  }

  // Maybe add in an addBonus method which will help with the final frame to capture final one (or two) rolls
  addBonus(n, x) {
    this.bonus.push([n, x])
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

  printBonus() {
    return this.bonus;
  }

  #total(array) { // Method to add all the numbers in the array and return the total
    let total = 0
    array.forEach(number => total += number)
    return total
  }
}

module.exports = Frame;