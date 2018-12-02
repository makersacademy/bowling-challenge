'use strict'

var Score = function () {
  this.result = 0
  this.strike = 'no'
  this.spare = 'no'
  this.ten = 'no'
  this.frames = [ ]
};

Score.prototype.createsFrames = function() {
  for (var x = 0; x < 10; x++) {
    this.frames[x] = {frame: x+1};
  }
};

Score.prototype.scoresIntoFrames = function(frame, bowl, score) {
    this.frames.map(f => {
    if (f.frame === frame) {
      if (bowl === 1) {
        f.bowl1 = score;
      } else if (bowl === 2) {
        f.bowl2 = score;
      } else if (bowl === 3) {
        f.bowl3 = score;
      }
    } return
  });
}


Score.prototype.searchFrames = function (frame, bowl) {
  for (var number = 0; number < this.frames.length; number++) {
    if (this.frames[number]['frame'] === frame) {
      if (bowl === 1) {
        return this.frames[number]['bowl1'];
      } else if (bowl === 2) {
        return this.frames[number]['bowl2'];
      } else if (bowl === 3) {
        return this.frames[number]['bowl3'];
      }
    }
  }
  return null;
}

Score.prototype.strikeOrSpare = function(frame, bowl) {
  if(this.searchFrames(frame, 1) === 10) {
    return true
  } else if (this.searchFrames(frame, 1) + this.searchFrames(frame, 2) === 10) {
    return true
  } else {
    return false
  }
}

Score.prototype.gameScoring = function() {
  for (var number = 1; number < this.frames.length + 1; number++) {
    if (isNaN(this.searchFrames(number, 1)) === true){
      continue
    }
    if (number === 10 && (this.searchFrames(number, 1) + this.searchFrames(number, 2) > 0)) {
      this.frameTenProcess(number)
      continue
    }
    if (this.strikeOrSpare(number, 1) === true || this.strikeOrSpare(number, 2) === true) {
      if (this.searchFrames(number, 1) === 10) {
        this.strikeProcess(number)
        continue
      } else if (this.searchFrames(number, 1) + this.searchFrames(number, 2) === 10) {
        this.spareProcess(number)
        continue
      }
    } else if (this.searchFrames(number, 1) + this.searchFrames(number, 2) != 10) {
      this.result += (this.searchFrames(number, 1) + this.searchFrames(number, 2))
      continue
    } else {
    }
  }
}


Score.prototype.strikeProcess = function(frame) {

  if (frame < 10 && this.searchFrames(frame + 1, 1) + this.searchFrames(frame + 2, 1) === 20) {
    this.result += 30
    return
  } else if (frame < 10 && this.searchFrames(frame + 1, 1) === 10 && this.searchFrames(frame + 2, 1) < 10) {
    this.result += (10 + this.searchFrames(frame + 1, 1) + this.searchFrames(frame + 2, 1))
    return
  } else if (frame < 10 && this.searchFrames(frame + 1, 1) < 10 && this.searchFrames(frame + 1, 2) < 10) {
    this.result += (10 + this.searchFrames(frame + 1, 1) + this.searchFrames(frame + 1, 2))
    return
  } else if (frame === 9 && this.searchFrames(frame +1, 1) === 10) {
    this.result += (10 + this.searchFrames(frame + 1, 1) + this.searchFrames(frame + 1, 2))
    return

  } else if (frame === 9) {
    if (this.searchFrames(frame + 1, 1) === 10) {
      this.result += (10 + this.searchFrames(frame + 1, 1) + this.searchFrames(frame + 1, 2))
      this.result += (this.searchFrames(frame + 1, 1) + this.searchFrames(frame + 1, 2))
      return
    } else {
      this.result += (10 + this.searchFrames(frame + 1, 1) + this.searchFrames(frame + 1, 2))
    }
  }
}

Score.prototype.spareProcess = function(frame) {
  this.result += 10 + this.searchFrames(frame + 1, 1)
}

Score.prototype.frameTenProcess = function(frame) {
  if (this.searchFrames(frame, 1) === 10 && this.searchFrames(frame, 2) === 10) {
    this.result += 10
  }
   if (this.searchFrames(frame, 1) === 10) {
    this.result += (10 + this.searchFrames(frame, 2) + this.searchFrames(frame, 3))
  } else if (isNaN(this.searchFrames(frame, 3)) === false) {
    this.result += (this.searchFrames(frame, 1) + this.searchFrames(frame, 2) + this.searchFrames(frame, 3))
  } else if (this.searchFrames(frame, 1) + this.searchFrames(frame, 2) + this.searchFrames(frame, 3) === 30) {

    this.result += 30
  } else {

    this.result += (this.searchFrames(frame, 1) + this.searchFrames(frame, 2))
  }
}
