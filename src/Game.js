import('./Frame.js');

function Game(framesArray) {
  this.frames = this._convertToFrames(framesArray);
}

Game.prototype._convertToFrames = function(array) {
  arr = []
  array.forEach(function(element) {
    if(element.length == 2)
      arr.push(new Frame(element[0], element[1]))
    else
      arr.push(new Frame(element[0], element[1], element[2]))
    });
  return arr;
  };

  Game.prototype.calculateScore = function() {
    var score = 0;
    var i = 0;
    while(i < 9) {
      if (this.frames[i].isStrike())
        if (this.frames[i+1].isStrike())
          score += (
                    20 + 
                    this.frames[i+2].firstRoll +
                    this.secondRoll
                    );
        else
          score += (
                    10 + 
                    this.frames[i+1].firstRoll +
                    this.frames[i+1].secondRoll
                    );
      else if (this.frames[i].isSpare())
        score += (
                  10 + 
                  this.frames[i+1].firstRoll
                  );
      else
        score += this.frames[i].frameScore();
      console.log(score)
      i += 1
    }
    return (score += this.frames[9].frameScore());
  }
