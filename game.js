class Game {
  constructor(){
    this.score = [], this.bonus = [], this.total = 0;
  }

  roll = (pins) => {
    this.score.push(pins);
    //Check if spare
    if (this.score.length % 2 == 0 && this.score[this.score.length-1] + this.score[this.score.length-2] == 10) { this.score[this.score.length-1] = '/'; }
    //Check if strike and not final frame
    if (pins == 10 && this.score.length <19) { this.score.push('X') }
  }

  calculate = () => {
    this.spare();
    this.strike();
    this.score.forEach((game) => {this.total += game});
    this.bonus.forEach((game) => {this.total += game});
    return this.total;
  }

  spare = () => {
    this.score.forEach((round, i) => {
      if(round == '/' && this.score[i+1] != undefined){
        this.score[i] = (10 - this.score[i-1])
        this.bonus.push(this.score[i+1]);
      }
    });
  }

  strike = () => {
    this.score.forEach((round, i) => {
      if(round == 'X' && this.score[i+2] != 'X' && this.score.length <=21){
        // Check if the second score is a spare
        if (this.score[i+2] == '/') {
          this.score[i] = 0;
          this.bonus.push(this.score[i+1] + (10 - this.score[i+2]));
        } else {
        // Add the next two values
        this.score[i] = 0
        this.bonus.push(this.score[i+1] + this.score[i+2]);
        }
      }
      // Check if back-to-back strikes
      if(round == 'X' && this.score[i+3] != undefined && this.score[i+2] == 'X') {
        this.score[i] = 0
        this.bonus.push(this.score[i+1] + this.score[i+3]);
      }
    });}
  }
module.exports = Game;