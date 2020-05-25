'use strict'

class Bowling{
  constructor() {
    this.score = [];
  };

  scoring(num) {
    this.score.push(num);
  };

  frame1() {
    if(this.score[0] + this.score[1] === 10) {
            return this.score[0] + this.score[1] + this.score[2];
        }
    return this.score[0] + this.score[1];
  };

  frame2() {
    if(this.score[2] + this.score[3] === 10) {
            return this.score[2] + this.score[3] + this.score[4] + this.frame1();
        }
    return this.score[2] + this.score[3] + this.frame1();
  };

  frame3() {
    if(this.score[4] + this.score[5] === 10) {
            return this.score[4] + this.score[5] + this.score[6] + this.frame2();
        }
    return this.score[4] + this.score[5] + this.frame2();
  };

  frame4() {
    if(this.score[6] + this.score[7] === 10) {
            return this.score[6] + this.score[7] + this.score[8] + this.frame3();
        }
    return this.score[6] + this.score[7] + this.frame3();
  };

  frame5() {
    if(this.score[8] + this.score[9] === 10) {
            return this.score[8] + this.score[9] + this.score[10] + this.frame4();
        }
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
