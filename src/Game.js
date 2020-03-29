class Game {

  constructor() {
    this._rolls = [];
  }

  roll(pins) {
    this._rolls.push(pins);
  }

  score() {
    let result = 0;
    let rollindex = 0;
    for (let frame = 0; frame < 10; frame ++) {
      result += this._rolls[rollindex] + this._rolls[rollindex + 1];
      //index increases by 2 as there are 2 rolls per frame
      rollindex += 2;
    }
    return result;
  }



}
