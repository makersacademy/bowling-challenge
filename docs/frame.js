class Frame{

  constructor(a , b){
    this.roll1 = a;
    this.roll2 = b;
    // this.max_score = 10;
    this.frame = {Number: 0, roll1: a, roll2: b, rollsTotal: (a+b), bonus: 0, frameTotal: (a+b) };
  }

  getFrame(){
    return this.frame;
  }

}

module.exports = Frame;
