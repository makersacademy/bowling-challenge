class Scorecard{

  constructor(){
    this.score = {'1.1':0, '1.2':0, '2.1':0, '2.2':0, '3.1':0, '3.2':0, '4.1':0, '4.2':0, '5.1':0, '5.2':0, '6.1':0, '6.2':0, '7.1':0, '7.2':0, '8.1':0, '8.2':0, '9.1':0, '9.2':0, '10.1':0, '10.2':0, '10.3':0}
    this.frame = 0
    this.sum = 0
    this.totalframe = 0
  };

  resetScorecard() {
    this.score = {'1.1':0, '1.2':0, '2.1':0, '2.2':0, '3.1':0, '3.2':0, '4.1':0, '4.2':0, '5.1':0, '5.2':0, '6.1':0, '6.2':0, '7.1':0, '7.2':0, '8.1':0, '8.2':0, '9.1':0, '9.2':0, '10.1':0, '10.2':0, '10.3':0}
  };

  addRoll(turn, pins) {
     this.turn = turn
     this.frame = parseInt(this.turn)
     this.score[turn] = pins
  };

  isStrike(input1, input2) {
    return input1 === 10 || input2 === 10
  };

  isSpare(input1, input2) {
    return (input1 + input2) === 10 && input1 > 0 || input2 > 0
  };

  total(totalframe) {
    this.totalframe = totalframe
    while (this.totalframe > 0) {
    this.sum += this.score[this.totalframe+0.1] + this.score[this.totalframe+0.2]
    if (this.score[this.totalframe+0.1] === 10 || this.score[this.totalframe+0.2] === 10) {
      this.sum += (this.score[this.totalframe+1.1] + this.score[this.totalframe+1.2])
    } else if (this.score[this.totalframe+0.1] + this.score[this.totalframe+0.2] === 10) {
      this.sum += this.score[this.totalframe+1.1];
    }
    this.totalframe -= 1;
    };
    return this.sum
  };

};
