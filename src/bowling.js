class Game {
  constructor(){
    this.totalScore = 0
    this.frames = {}
  }
  play(){
    var i;
    for (i = 0; i < 9; i++){
      var frame = new Frame;
      frame.rollOne();
      frame.rollTwo();
      this.frames[i] = frame.resultArray();
    }
  }

  calculateTotal(){
    //calculations to be here one day
  }

  }

  class Frame {
    constructor(){
      this.pins = 10;
      this.result = [];
    }
    rollOne() {
        var x = Math.floor(Math.random() * this.pins + 1)
        var roll = new Roll(x);
        this.result.push(x);
        this.pins -= x;
        if (roll.isStrike()) {
          this.result.push('strike');
        }

        }


      rollTwo() {

            var x = Math.floor(Math.random() * this.pins + 1)
            var roll = new Roll(x);
            console.log(x)
            this.pins -= x

            this.result.push(x);
            if (this.pins === 0) {
              this.result.push('spare');
          }
        }

    resultArray(){
      return this.result;
  }
}


class Roll { //this is a useless class now almost like from YN Harari's book.
  // But it wasn't initially.
  constructor(score){
    this.score = score;
  }

  rollScore(){
    return this.score;
  }

  isStrike(){
    if (this.score === 10)
      {return true}
    else {
      return false
    }
  }


  }

var b = new Game();
b.play();
console.log(b.frames); //we have got results for 9 frames eventually
