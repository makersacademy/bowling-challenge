class Game {
  constructor(){
    this.frameScores = []
  }

  addFrame(frame) {
    if (frame.isOpen() === false) { game.push(frame.getScore())
    }
  }

  // need to implement this - perhaps it moves to frame class

  getScore() {
    var sum = this.frameScores.reduce(function(a, b){
        return a + b;
    }, 0);
    return sum
  }

}
