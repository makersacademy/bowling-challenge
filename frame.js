class Frame {
  constructor(ball1, ball2){
    this.ball1 = ball1;
    this.ball2 = ball2;
  }

  score(){
    return this.ball1 + this.ball2;
  }
}

module.exports = Frame;