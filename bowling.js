class Bowling {
  constructor() {
    this.totalScore = 0;
    this.frameNumber = 1;
    this.roundTracking = [];
    for (let i = 0; i < 10; i++) {
      this.roundTracking[i] = {
        roll: 1,
        roll1_score: 0,
        roll2_score: 0,
        roll3_score: 0,
        final_frame_score: 0,
        running_total: 0
      }
    }
  }
  logScore = (score) => {
    if (this.frameNumber === 10){
      this.frame_10(score);
    } else if (this.roundTracking[this.frameNumber -1].roll === 1) {
      this.roll_1(score);
    } else {
      this.roll_2(score);
    }
  }
  roll_1 = (score) => {
    if (score === 10) {
      this.roundTracking[this.frameNumber - 1].roll1_score = 'X';
      this.calculate_score();
      this.frameNumber += 1;
    } else {
      this.roundTracking[this.frameNumber - 1].roll1_score = score;
      this.calculate_score();
      this.roundTracking[this.frameNumber - 1].roll = 2;
    }
  }
  roll_2 = (score) => {
    if (this.roundTracking[this.frameNumber - 1].roll1_score + score === 10) {
      this.roundTracking[this.frameNumber - 1].roll2_score = '/';
    } else {
      this.roundTracking[this.frameNumber - 1].roll2_score = score;
    }
    this.calculate_score();
    this.frameNumber += 1;
  }
  frame_10 = (score) => {
    if (this.roundTracking[this.frameNumber -1].roll === 1) {
      if (score === 10) {
        this.roundTracking[this.frameNumber - 1].roll1_score = 'X';
      } else {
        this.roundTracking[this.frameNumber - 1].roll1_score = score;
      }
      this.calculate_score();
      this.roundTracking[this.frameNumber - 1].roll = 2;
    }else if (this.roundTracking[this.frameNumber -1].roll === 2){
      if (score === 10) {
        this.roundTracking[this.frameNumber - 1].roll2_score = 'X';
        this.roundTracking[this.frameNumber - 1].roll = 3;
      } else {
      this.roundTracking[this.frameNumber - 1].roll2_score = score;
      if (this.roundTracking[this.frameNumber - 2].roll1_score === 'X') {
        this.roundTracking[this.frameNumber - 1].roll = 3;
      } else {
        this.calculate_score();
      }
      }
    } else {
      this.roundTracking[this.frameNumber - 1].roll3_score = score;
      if (this.roundTracking[this.frameNumber -1].roll1_score === 'X' && this.roundTracking[this.frameNumber -1].roll2_score === 'X'){
        this.roundTracking[this.frameNumber -1].final_frame_score = 20 + score;
      }
      this.make_total_score(); // stuck here
    }
  }
  calculate_score = () => {
    if (this.roundTracking[this.frameNumber - 1].roll === 1) {
      if (this.frameNumber > 2) {
        if (this.roundTracking[this.frameNumber - 3].roll1_score === 'X' && this.roundTracking[this.frameNumber - 2].roll1_score === 'X') {
          if (this.roundTracking[this.frameNumber -1].roll1_score === 'X') {
            this.roundTracking[this.frameNumber - 3].final_frame_score = 30;
          } else {
            this.roundTracking[this.frameNumber - 3].final_frame_score = 20 + this.roundTracking[this.frameNumber -1].roll1_score;
          }
        }
      }
      if (this.frameNumber > 1) {
        if (this.roundTracking[this.frameNumber - 2 ].roll2_score === '/') {
          if (this.roundTracking[this.frameNumber -1].roll1_score === 'X') {
            this.roundTracking[this.frameNumber - 2].final_frame_score = 20;
          } else {
            this.roundTracking[this.frameNumber - 2].final_frame_score = 10 + this.roundTracking[this.frameNumber -1].roll1_score;
          }
        }
      }
    } else {
      if (this.frameNumber > 1) {
        if (this.roundTracking[this.frameNumber - 2 ].roll1_score === 'X') {
          if (this.roundTracking[this.frameNumber -1].roll2_score === '/') {
            this.roundTracking[this.frameNumber - 2].final_frame_score = 10 + this.roundTracking[this.frameNumber -1].roll1_score + 10;
          } else {
            this.roundTracking[this.frameNumber - 2].final_frame_score = 10 + this.roundTracking[this.frameNumber -1].roll1_score + this.roundTracking[this.frameNumber -1].roll2_score;
          }
        }
      }
      if ( this.roundTracking[this.frameNumber -1].roll2_score != '/') {
        this.roundTracking[this.frameNumber -1].final_frame_score = this.roundTracking[this.frameNumber -1].roll1_score + this.roundTracking[this.frameNumber -1].roll2_score;
      }
    }
    this.make_total_score();
  }
  make_total_score = () => {
    this.totalScore = 0;
    for (let i = 0; i < this.frameNumber; i++) {
      this.totalScore += this.roundTracking[i].final_frame_score;
      this.roundTracking[i].running_total = this.totalScore;
    }
  }
}

module.exports = Bowling;