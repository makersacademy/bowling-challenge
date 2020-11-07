class Scorecard{

  constructor(printer = new Print){
    this.score = {'1.1':0, '1.2':0, '2.1':0, '2.2':0, '3.1':0, '3.2':0, '4.1':0, '4.2':0, '5.1':0, '5.2':0, '6.1':0, '6.2':0, '7.1':0, '7.2':0, '8.1':0, '8.2':0, '9.1':0, '9.2':0, '10.1':0, '10.2':0, '10.3':0}
    this.currentframe = 0
    this.sum = 0
    this.currentframe = 0
    this.printer = printer
  };

  resetScorecard() {
    this.score = {'1.1':0, '1.2':0, '2.1':0, '2.2':0, '3.1':0, '3.2':0, '4.1':0, '4.2':0, '5.1':0, '5.2':0, '6.1':0, '6.2':0, '7.1':0, '7.2':0, '8.1':0, '8.2':0, '9.1':0, '9.2':0, '10.1':0, '10.2':0, '10.3':0}
  };

  addRoll(turn, pins) {
     this.turn = turn
     this.currentframe = parseInt(this.turn)
     this.score[turn] = pins
  };

  isStrike(input1, input2) {
    return input1 === 10 || input2 === 10
  };

  isSpare(input1, input2) {
    return (input1 + input2) === 10 && input1 > 0 || input2 > 0
  };

  total(frame) {
    this.frame = frame
    while (this.frame > 0) {
    let [currRoll1, currRoll2, nextRoll1, nextRoll2] = [this.score[this.frame+0.1], this.score[this.frame+0.2], this.score[this.frame+1.1], this.score[this.frame+1.2]];
    this.sum += currRoll1 + currRoll2
    if (currRoll1 === 10 || currRoll2 === 10) {
      if (nextRoll1 != null || nextRoll2 != null) {
        this.sum += nextRoll1 + nextRoll2
      };
    } else if (currRoll1 + currRoll2 === 10) {
      if (nextRoll1 != null) {
        this.sum += nextRoll1
      }
    }
    this.frame -= 1;
    };
    let [tenthRoll1, tenthRoll2, tenthRoll3] = [this.score[this.frame+10.1], this.score[this.frame+10.2], this.score[this.frame+10.3]]
    if (tenthRoll1+tenthRoll2 === 10){
      this.sum += tenthRoll3;
    } else if (tenthRoll1 === 10 && tenthRoll2 == 10) {
      this.sum += tenthRoll3;
      }
    return this.sum
  };

  print(score, frame) {
    let something = this.total(frame)
    this.printer.output(score, something, frame)
  };

};
