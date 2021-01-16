class Scorecard{

  constructor(printer = new Print){
    this.score = {'1.1':0, '1.2':0, '2.1':0, '2.2':0, '3.1':0, '3.2':0, '4.1':0, '4.2':0, '5.1':0, '5.2':0, '6.1':0, '6.2':0, '7.1':0, '7.2':0, '8.1':0, '8.2':0, '9.1':0, '9.2':0, '10.1':0, '10.2':0, '10.3':0}
    this.printer = printer
  };

  resetScorecard() {
    this.score = {'1.1':0, '1.2':0, '2.1':0, '2.2':0, '3.1':0, '3.2':0, '4.1':0, '4.2':0, '5.1':0, '5.2':0, '6.1':0, '6.2':0, '7.1':0, '7.2':0, '8.1':0, '8.2':0, '9.1':0, '9.2':0, '10.1':0, '10.2':0, '10.3':0}
  };

  addRoll(turn, pins) {
     this._checkFrameNotAboveTen(pins)
     this.score[turn] = pins
  };

  _checkFrameNotAboveTen(input) {
    if (input > 10) throw new Error('You cant roll more than 10')
  }

  _isStrike(input1, input2) {
    return input1 === 10 || input2 === 10
  };

  _isNextRollNull(input1, input2) {
    return input1 != null || input2 != null
  };

  total(frame) {
    let sum = 0
    while (frame > 0) {
    let [currRoll1, currRoll2, nextRoll1, nextRoll2] = [this.score[frame+0.1], this.score[frame+0.2], this.score[frame+1.1], this.score[frame+1.2]];
    sum += currRoll1 + currRoll2
    if (this._isStrike(currRoll1, currRoll2)) {
      if (this._isNextRollNull(nextRoll1, nextRoll2)) {
        sum += nextRoll1 + nextRoll2
      };
    } else if (currRoll1 + currRoll2 === 10 && nextRoll1 != null) {
        sum += nextRoll1
      }
    frame -= 1;
    };
    let [tenthRoll1, tenthRoll2, tenthRoll3] = [this.score[frame+10.1], this.score[frame+10.2], this.score[frame+10.3]]
    tenthRoll1+tenthRoll2 === 10 || 20 ? sum += tenthRoll3 : 0
    return sum
  };

  print(frame) {
    let newtotal = this.total(frame)
    return this.printer.output(this.score, newtotal, frame)
  };

};
