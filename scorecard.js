class Scorecard {
  constructor() {
    this.scores = []
    this.bonus = []
  }

  addFrame(frame) {
    this.scores.push(frame.printFrame())
  }

  calculate() { 
    return this.#total(this.scores.flat())
  }

  #total(array) {
    let total = 0;
    array.forEach(number => total += number);
    return total;
  }

}


module.exports = Scorecard;