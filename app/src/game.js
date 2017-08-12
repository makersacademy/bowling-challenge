function Game() {
}

function add(a, b) {
    return a + b;
}

function calculateframe(scorecard) {
  var framearray = scorecard._framescores;
  var framecounter = 1;
  while (framecounter <= 10) {
    if(framearray[framecounter].reduce(add, 0) === 10 || framearray[framecounter].length === 2)  {
      framecounter ++;
    } else {
      return framecounter;
    }
  }
}

Game.prototype.getFrame = function(scorecard) {
  return calculateframe(scorecard);
};
