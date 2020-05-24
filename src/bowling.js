'use strict'

class Bowling{
  constructor() {
    this.score = [];
  };

  scoring(num) {
    this.score.push(num);
  };

  frame1() {
    return this.score[0] + this.score[1];
  };

  frame2() {
    return this.score[2] + this.score[3] + this.frame1();
  };

  frame3() {
    return this.score[4] + this.score[5] + this.frame2();
  };

  frame4() {
    return this.score[6] + this.score[7] + this.frame3();
  };

  frame5() {
    return this.score[8] + this.score[9] + this.frame4();
  };

  frame6() {
    return this.score[10] + this.score[11] + this.frame5();
  };

  frame7() {
    return this.score[12] + this.score[13] + this.frame6();
  };

  frame8() {
    return this.score[14] + this.score[15] + this.frame7();
  };

  frame9() {
    return this.score[16] + this.score[17] + this.frame8();
  };

  frame10() {
    return this.score[18] + this.score[19] + this.frame9();
  };
};
