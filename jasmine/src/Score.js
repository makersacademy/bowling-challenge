function Score() {
};

Score.prototype.calculateChosen = function(frames, chosenFrame) {
  var chosenScore = 0;
  for (i=1; i <= (chosenFrame); i++) {
    if (this.isStrike(frames[i])) {
      chosenScore = chosenScore + this.strikeFunctionality(frames, i);
    } else if (this.isSpare(frames[i])) {
      chosenScore = chosenScore + this.spareFunctionality(frames, i)
    } else {
      chosenScore = chosenScore + this.frameTotal(frames[i]);
    }
  };
  return chosenScore;
};

Score.prototype.createScoreArray = function(frames, currentFrame) {
  var scores = [];
  for (j=1; j <= (currentFrame-1); j++) {
    if (j === 10) {
      scores.push(this.calculateChosen(frames, j));
      scores[8] = this.calculateChosen(frames, j-1)
    } else {
      if (this.isStrike(frames[j]) && j === (currentFrame-1)) {
        scores.push('x');
      } else if (this.isSpare(frames[j]) && j === (currentFrame-1)) {
        scores.push('/');
      } else if (this.isStrike(frames[j]) && this.isStrike(frames[j+1]) && j === (currentFrame-2)) {
        scores.push('x');
      } else{
        scores.push(this.calculateChosen(frames, j));
      }
    }
  };
  return scores;
};

Score.prototype.frameTotal = function(frame) {
  return (frame[0] + frame[1]);
};

Score.prototype.isStrike = function(frame) {
  return (frame[0] === 10);
};

Score.prototype.isSpare = function(frame) {
  return (this.frameTotal(frame) === 10 && !(this.isStrike(frame)));
};

Score.prototype.strikeFunctionality = function(frames, i) {
  if (i === 10) {
    return (this.frameTotal(frames[i]) + frames[i][2]);
  } else {
    if (this.isStrike(frames[i + 1])) {
      if ( i === 9){
        return (this.frameTotal(frames[i]) + frames[i+1][0] + frames[i+1][1]);
      } else {
        return (this.frameTotal(frames[i]) + frames[i+1][0] + frames[i+2][0]);
      }
    } else {
      return (this.frameTotal(frames[i]) + this.frameTotal(frames[i+1]));
    }
  }
};

Score.prototype.spareFunctionality = function(frames, i){
  if (i === 10) {
    return (this.frameTotal(frames[i]) + frames[i][2]);
  } else {
    return (this.frameTotal(frames[i]) + frames[i+1][0]);
  }
};
