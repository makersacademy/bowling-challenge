class Scorecard {
  constructor() {
    this.score = 0;
    this.frame = 1;
  }

  calculateScore() {
    return this.score;
  }

  addFrame(num1, num2) {
    if(this.frame > 10){
      throw new Error('Error max frames reached!');
    } else {
      this.frame ++;
      this.score += num1 + num2;
    }
    
  }
}


module.exports = Scorecard;