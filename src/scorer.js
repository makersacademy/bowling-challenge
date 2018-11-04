function Scorer(scores) {
  this.scores = scores
  this.frame_scores = []
  this.game_total = 0
};

Scorer.prototype.total = function() {
  sum = 0
  for (i in this.scores) { sum += this.scores[i] }
  if (this.scores.length % 2 === 1) { sum -= this.scores[this.scores.length -1] }
  return sum
};

Scorer.prototype.scoreFrames = function() {
  frames = this.calculateFrames()
  for (i = 0; i < frames * 2; i += 2)
    { if(this.scores[i] != 10)
      {this.frame_scores.push(this.scores[i] + this.scores[i+1]) }
      else
      { score = this.scoreStrike(i)
        if (typeof score != "undefined") {this.frames_scores.push(score)}
      }
    };
};

Scorer.prototype.calculateFrames = function() {
  return Math.floor(this.scores.length / 2)
};

Scorer.prototype.scoreStrike = function(strikePos) {
  if ( this.scores.length >= strikePos + 3 )
    {return this.scores[strikePos] + this.scores[strikePos+1] + this.scores[strikePos + 2] }
};
