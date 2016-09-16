function Frame(bonus) {
  this.frameType = bonus || null;
  this.firstScore = null;
  this.secondScore = null;
}

Frame.prototype = {
  addScore: function(score) {
    this.firstScore ? this.secondScore = score : this.firstScore = score
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
  }
};
