class InputValidation {  
  constructor() {
    this._error = null;
  }

  getError() {
    return this._error;
  }
  
  validateInput(userInput, scoreboard) {
    this._error = null;
    this.checkRange(userInput);
    if (this._error !== null) return;
    this.checkPinsLeft(scoreboard, userInput);
  }

  // players can input only the number ranging from 0 to 10
  checkRange(userInput) {
    const acceptedRange = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    if (acceptedRange.includes(userInput)) return;
    this._error = "Please enter a whole number from 0 to 10. ";
  }

  // the total number of knocked down pins can't exceed 10 per frame.
  checkPinsLeft(scoreboard, userInput) {
    const pinsLeft = this.pinsAvailable(scoreboard);
    if (userInput <= pinsLeft) return;
    this._error = `You have only ${pinsLeft} ${pinsLeft === 1 ? "pin" : "pins"} left. `;
  }

  pinsAvailable(scoreboard) {
    if (scoreboard.getScoreboard()[scoreboard.getFrame()][0] !== undefined) {
      return 10 - scoreboard.getScoreboard()[scoreboard.getFrame()][0];
    } else {
      return 10;
    }
  }
}

module.exports = InputValidation;