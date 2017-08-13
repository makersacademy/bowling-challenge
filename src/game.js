function Game() {
  this._currentframe = 1;
}

function add(a, b) {
  return a + b;
}

Game.prototype.getFrame = function(scorecard) {
  var framearray = scorecard._framescores;
  var framecounter = 1;
  if(framearray[12].length === 1) {
    return "gameover";
  }
  if(framearray[11][0] === 10 || (framearray[10][0] === 10 && framearray[11].length === 1)) {
    return 12;
  } else if (framearray[11].length === 1) {
    return "gameover";
  }
  if(framearray[10][1] === "X" || framearray[10][1] === "/") {
    return 11;
  }
  while (framecounter <= 10) {
    if(framearray[framecounter][0] === 10 || framearray[framecounter].length === 2)  {
      framecounter ++;
    } else {
      this._currentframe = framecounter;
      return framecounter;
    }
  }
  return "gameover";
};

Game.prototype.calculatespare = function(scorecard) {
  var framearray = scorecard._framescores;
  if(framearray[this._currentframe]) {
    if(framearray[this._currentframe].reduce(add, 0) === 10 && framearray[this._currentframe].length === 2) {
      scorecard.setspare(this._currentframe);
    }
  }
};

Game.prototype.calculatestrike = function(scorecard) {
  var framearray = scorecard._framescores;
  if(framearray[this._currentframe]) {
    if(framearray[this._currentframe][0] === 10) {
      scorecard.setstrike(this._currentframe);
    }
  }
};
