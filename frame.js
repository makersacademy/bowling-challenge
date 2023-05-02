class Frame {
  constructor (round, frame) {
    // Initializes the properties of the Frame instance
    this.round = round; // The round number
    this.frame = frame; // An array representing the frame (e.g., [3, 5])
    this.isStrike = this.getStrike(); // A boolean indicating if the frame is a strike
    this.isSpare = this.getSpare(); // A boolean indicating if the frame is a spare
    this.isValid = this.checkValid(); // A boolean indicating if the frame is valid
  }

  getIndex () {
    // Returns the zero-based index of the frame
    return this.round - 1;
  }

  getFrame () {
    // Returns the array representing the frame
    return this.frame;
  }

  checkValid () {
    // Checks if the sum of the pins in the frame is less than or equal to 10
    if (this.getTotal() < 11) {
      return true; // If the frame is valid, returns true
    } else {
      return false; // If the frame is invalid, returns false
    }
  }

  getValid () {
    // Returns a boolean indicating if the frame is valid
    return this.isValid;
  }

  getTotal () {
    // Calculates and returns the total number of pins in the frame
    let frameTotal = 0;
    this.frame.forEach(obj => {
      frameTotal += obj;
    })
    return frameTotal;
  }

  getStrike () {
    // Checks if the first roll in the frame knocked down all 10 pins
    if (this.frame[0] === 10) {
      return true; // If the frame is a strike, returns true
    } else {
      return false; // If the frame is not a strike, returns false
    }
  }

  getSpare () {
    // Checks if the frame knocked down all 10 pins in two rolls
    if (this.getTotal() === 10 && this.getStrike() === false) {
      return true; // If the frame is a spare, returns true
    } else {
      return false; // If the frame is not a spare, returns false
    }
  }
}

module.exports = Frame;

