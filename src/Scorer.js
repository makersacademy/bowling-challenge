var Scorer = function(){
  this.scores = [];
  this.types = [];
  this.total = 0;
};

Scorer.prototype.addScore = function(score) {
  if (score == parseInt(score)){
    this.scores.push(score);
    this.types.push(null);
  } else if (score == '/'){
    this.scores.push(10 - this.scores[this.scores.length - 1]);
    this.types.push(score);
  } else {
    this.scores.push(10);
    this.types.push(score);
  }
};

Scorer.prototype.computeTotal = function() {
  for (var i = 0; i <= this.scores.length - 1; i++) {
    this.total = this.total + this.scores[i];
    if ( i > 0 && this.types[i-1] == '/') {
      this.total = this.total + this.scores[i];
    } 
    if ( i > 1 && this.types[i-2] == 'x'){
      this.total = this.total + this.scores[i];
    } 
    if (i > 0 && this.types[i-1] == 'x'){
      this.total = this.total + this.scores[i];
    }
  };
};

Scorer.prototype.add10thFrameScore = function(score) {
  if (score == parseInt(score)){
    this.addScore(score);
  } 
  if (score == '/'){
    this.scores.push(10 - this.scores[this.scores.length - 1]);
    this.types.push(null);
  } 
  if (score == 'x'){
    this.scores.push(10);
    this.types.push(null);
  }
};



