import('./Frame.js');

function Game(framesArray) {
  this.frames = this._convertToFrames(framesArray);
  this.score = 0;
}

Game.prototype.calculateScore = function() {
  frames = this.frames
  for (var i = 0; i < 10; i++) {
    if (i == 9) this.score += frames[i].frameScore();
    if (i == 8 ) this._penultimateFrameScore();
    if (i < 8) frames[i].isStrike() ? this._doubleCheck(i) : this._bonusCheck(i);
  };
  return this.score;
}

Game.prototype._convertToFrames = function(array) {
  arr = []
  array.forEach(function(element) {
    if (element.length == 2) {
      arr.push(new Frame(element[0], element[1]));
    } else {
      arr.push(new Frame(element[0], element[1], element[2]));
    }
    });
  return arr;
  };

  Game.prototype._normalScore = function(i) {
    this.score += this.frames[i].frameScore();
  }

  Game.prototype._spareScore = function(i) {
    this.score += (10 + this.frames[i+1].firstRoll);
  }

  Game.prototype._strikeScore = function(i) {
    this.score += (10 + this.frames[i+1].frameScore());
  }

  Game.prototype._doubleStrikeScore = function(i) {
    this.score += (20 + this.frames[i+2].firstRoll);
  }

  Game.prototype._doubleCheck = function(i) {
    this.frames[i+1].isStrike() ? this._doubleStrikeScore(i) : this._strikeScore(i)
  }

  Game.prototype._bonusCheck = function(i) {
    this.frames[i].isSpare() ? this._spareScore(i) : this._normalScore(i);
  }

  Game.prototype._penultimateFrameScore = function() {
    frames = this.frames
    if (frames[8].isStrike()) {
      this.score += (
                10 +
                frames[9].firstRoll +
                frames[9].secondRoll
                )
    } else if (frames[8].isSpare()) {
      this.score += (
                10 +
                frames[9].firstRoll
                )
    } else {
      this.score += frames[8].frameScore();
    }
  }
