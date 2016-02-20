function Score() {
  this.latest_score = 0;
  this.frame_score = [0];
  this.count = 0;
}

Score.prototype.changeLatestScore = function(number) {
  this.latest_score = number;
};

Score.prototype.viewLatestScore = function() {
  return this.latest_score;
};

Score.prototype.viewFrameScore = function(index) {
  return this.frame_score[index];
};

Score.prototype.newFrame = function() {
  this.frame_score.push(0);
}

Score.prototype.addResult = function(number, frame) {
  this._bonus(number, frame);
  this.frame_score[frame] += number;
};

Score.prototype.viewTotal = function() {
  var total = 0;
  for (var i = 0; i < this.frame_score.length; i++){
    total += this.frame_score[i];
  }
  return total;
};

Score.prototype.setBonus = function(number) {
  this.count = number;
};

//private

Score.prototype._bonus = function(number, frame) {
  if (this.count > 0){
    this.frame_score[(frame-1)] += number;
    this.count -= 1;
  }
};