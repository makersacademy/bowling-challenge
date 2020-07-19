class Frame{
  constructor() {
    this.score = [];
  };

  scoring(pins) {
    this.score.push(pins);
  };

  frame1() {
    if(this.score[0] + this.score[1] === 10) {
            return this.score[0] + this.score[1] + this.score[2];
        }
    return this.score[0] + this.score[1];
  };
  
  frame2() {
    if(this.score[3] + this.score[4] === 10) {
            return this.score[3] + this.score[4] + this.score[5];
        }
    return this.score[3] + this.score[4];
  };
};