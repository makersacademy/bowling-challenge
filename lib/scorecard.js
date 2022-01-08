const Rules = require('../lib/rules.js')

class Scorecard {
  constructor(RulesClass = Rules) {
    this.framesArray = [];
    this._frame = [];
    this.rulesClassInstance = new RulesClass();
  }

  addRoll = (roll) => {
    this._frame.push(roll);

    if (this.rulesClassInstance.isStrike(this._frame)) {
      this.framesArray.push(this._frame);   
      this._frame = [];
    }
    else if (this._frame.length === 2) {
      this.framesArray.push(this._frame);   
      this._frame = [];
    }
  }

}

module.exports = Scorecard;
