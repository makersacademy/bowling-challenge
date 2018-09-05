import('./Frame.js');

function Game(framesArray) {
  this.frames = this._convertToFrames(framesArray);
}

Game.prototype._convertToFrames = function(array) {
  arr = []
  array.forEach(function(element) {
    if (element.length == 2) {
      arr.push(new Frame(element[0], element[1]))
    } else {
      arr.push(new Frame(element[0], element[1], element[2]))
    }
    });
  return arr;
  };

  Game.prototype.calculateScore = function() {
    var score = 0;
    for (i = 0; i <= 7; i++) {
      if (this.frames[i].isStrike()) {
        if (this.frames[i+1].isStrike()) {
          score += (
                    20 +
                    this.frames[i+2].firstRoll
                   )
        } else {
          score += (
                    10 +
                    this.frames[i+1].frameScore()
                   )
        }
      } else if (this.frames[i].isSpare()) {
        score += (
                  10 +
                  this.frames[i+1].firstRoll
                 )
      } else {
        score += this.frames[i].frameScore()
      }
    }

    if (this.frames[8].isStrike()) {
      score += (
                10 +
                this.frames[9].firstRoll +
                this.frames[9].secondRoll
               )
    } else if (this.frames[8].isSpare()) {
      score += (
                10 +
                this.frames[9].firstRoll
               )
    } else {
      score += this.frames[8].frameScore()
    }

    return score += this.frames[9].frameScore();
  }
