class BowlingGame {

  constructor() {
    this.total = [];
    this.frame = [];
    this.roll = 1

  };



  score(num) {
  this.total.push(num)
  this.frame.push(num)

  return num
};

};
