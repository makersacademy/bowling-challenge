class Rules {
  static maxFrameLength() {
    return 2;
  }

  static isSpare(rolls) {
    return rolls[1] + rolls[2] === 10;
  }

  static isStrike(rolls) {
    return rolls[1] === 10;
  }
}

module.exports = Rules;
