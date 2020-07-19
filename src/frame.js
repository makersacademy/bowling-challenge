class Frame{
  constructor() {
    this.score = [];
    this.MAXSCORE = 10;
    this.isStrike = false;
    this.isSpare = false;
  };

  roll(pins) {
    this.score.push(pins);
  };

  frame1() {
    if(this.score[0] + this.score[1] === this.MAXSCORE) {
            return this.score[0] + this.score[1] + this.score[2];
        }
    return this.score[0] + this.score[1];
  };

  frame2() {
    if(this.score[3] + this.score[4] === this.MAXSCORE) {
            return this.score[3] + this.score[4] + this.score[5] + this.frame1();
        }
    return this.score[3] + this.score[4] + this.frame1();
  };

  frame3() {
    if(this.score[6] + this.score[7] === this.MAXSCORE) {
            return this.score[6] + this.score[7] + this.score[8] + this.frame2();
        }
    return this.score[6] + this.score[7] + this.frame2();
  };

  frame4() {
    if(this.score[9] + this.score[10] === this.MAXSCORE) {
            return this.score[9] + this.score[10] + this.score[11] + this.frame3();
        }
    return this.score[9] + this.score[10] + this.frame3();
  };

  frame5() {
    if(this.score[12] + this.score[13] === this.MAXSCORE) {
            return this.score[12] + this.score[13] + this.score[14] + this.frame4();
        }
    return this.score[12] + this.score[13] + this.frame4();
  };

  frame6() {
    if(this.score[15] + this.score[16] === this.MAXSCORE) {
            return this.score[15] + this.score[16] + this.score[17] + this.frame5();
        }
    return this.score[15] + this.score[16] + this.frame5();
  };

  frame7() {
    if(this.score[18] + this.score[19] === this.MAXSCORE) {
            return this.score[18] + this.score[19] + this.score[20] + this.frame6();
        }
    return this.score[18] + this.score[19] + this.frame6();
  };

  frame8() {
    if(this.score[21] + this.score[22] === this.MAXSCORE) {
            return this.score[21] + this.score[22] + this.score[23] + this.frame7();
        }
    return this.score[21] + this.score[22] + this.frame7();
  };

  frame9() {
    if(this.score[24] + this.score[25] === this.MAXSCORE) {
            return this.score[24] + this.score[25] + this.score[26] + this.frame8();
        }
    return this.score[24] + this.score[25] + this.frame8();
  };

  frame10() {
    if(this.score[27] + this.score[28] === this.MAXSCORE) {
            return this.score[27] + this.score[28] + this.score[29] + this.frame9();
        }
    return this.score[27] + this.score[28] + this.frame9();
  };
};