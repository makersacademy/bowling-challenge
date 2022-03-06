class Frame {
  constructor(ball1, ball2){
    this.ball1 = ball1;
    this.ball2 = ball2;
    this.spare = false;
    this.strike = false;
  }

  score(){
    if(this.ball1 === 10){
      this.strike = true;
    }
    else if(this.ball1 + this.ball2 === 10){
      this.spare = true;
    }
    return this.ball1 + this.ball2;
  }
}

module.exports = Frame;