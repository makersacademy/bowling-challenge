function Frame(bonus) {
  this.frameType = bonus || null;
  this.firstScore = null;
  this.secondScore = null;
  this.thirdScore = null;
}

Frame.prototype = {
  _isFrameOver: function() {
     if (this.frameType != 'final') {return this.firstScore && this.secondScore}
     else {return this.firstScore && this.secondScore && this.thirdScore}
  },
  _validScore: function(score) {
     if (this.frameType != 'final') {return this.firstScore + score > 10}
     else {return this.firstScore + this.secondScore + this.thirdScore + score > 30}
  },
  addScore: function(score) {
    if (this._isFrameOver()) {throw new Error('The Frame in already over')}
    else if (this._validScore(score)) {throw new Error('Maximum Frame Score Reached')}
    else {this.firstScore ? this.secondScore += score : this.firstScore = score}
  },
  calculateScore: function() {
    if (this.frameType == 'spare') {
      return (this.firstScore * 2) + this.secondScore
    }
    else if(this.frameType == 'strike'){
      return (this.firstScore + this.secondScore) * 2
    }
    else {
        return this.firstScore + this.secondScore
    }
  },
  frameResult: function() {
    if (this.firstScore == 10) {return 'strike'}
    else if (this.firstScore + this.secondScore == 10) {return 'spare'}
    else {return null}
  }
};
