var Frame = function(){
  this.frame_start = 1;
  this.rolls = 2;
  this.score = 0;
  this.rolls_score =0;
};


Frame.prototype.go = function(pins) {
  this.rolls -= 1;
};

Frame.prototype.score = function() {
	//  add rolls_scores to this.score ()
};
