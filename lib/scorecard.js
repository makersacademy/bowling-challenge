class Scorecard {
  constructor() {
    this.framesArray = [];
    this._frame = [];
  }

  addRoll = (roll) => {
    this._frame.push(roll);
  };

}

module.exports = Scorecard;
