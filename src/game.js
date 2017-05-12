// could build a scoring class but call those methods within this/frame function
function Game(){
  this.frames = []
  // scoring = new scoring()
}

Game.prototype.advance = function(){
  frame = new Frame()
  frame.start()
  if (frame.outcome[0] <= 9) {
    frame.second()
    this.frames.push(frame.outcome)
    // frame.score()
  }
  else {
    this.frames.push(frame.outcome)
    // frame.score()
  }
}

Game.prototype.play = function(){
  while (this.frames.length < 10){
    this.advance()
  }
}

// Probably best to remove scoring to another class; implement strikes etc
Game.prototype.scoring = function(){
  console.log(this.frames)
  var reduced = this.frames.reduce(
    function(a, b) {
      return a.concat(b);
    },
  []
)
  console.log(reduced)
  reduced.reduce(function (a, b) {
  return a + b;
}, 0);
}
