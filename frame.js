/**
 * frame.js file for Frame class
*/
class Frame {
  /**
   * Constructs with an array with rolls inserted
   * @param {*} roll1
   * @param {*} roll2
   * @param {*} roll3
   */
  constructor(roll1, roll2, roll3 = 0) {
    this.frame = [];
    this.roll3 = roll3;
    this.frame.push(roll1);
    this.frame.push(roll2);
    if (roll3 != 0) {
      this.frame.push(roll3);
    }
  }
  /**
   * Access frame allows the array inside each Frame instance
   * to be accessed elsewhere in program
   * @return {array} an array
   */
  accessFrame() {
    return this.frame;
  }
  /**
   * Roll1 returns the first roll
   * @return {number} First roll
   */
   roll1() {
    return this.frame[0];
  }
  /**
   * Roll2 returns the second roll
   * @return {number} Second roll
   */
   roll2() {
    return this.frame[1];
  }
  /**
   * Frame total sums the values inside the frame
   * @return {number}
   */
  frameTotal() {
    return this.frame.reduce((a, b) => a + b, 0);
  }
  /**
   * Checks if the frame is a spare
   * @return {boolean}
   */
  checkForSpare() {
    if (this.frame[0] < 10 && this.frame.reduce((a, b) => a + b, 0) === 10) {
      return true;
    } else {
      return false;
    }
  }
  /**
   * Checks if the frame is a strike
   * @return {boolean}
   */
  checkForStrike() {
    if (this.frame[0] === 10) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Frame;
