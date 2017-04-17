function Game(){
	this.score = 0;
	this.player = 1;
	this.frames = [];
};

Game.prototype.startGame = function(){
	this._addFrames();
  this._addFrameIndex();
};

Game.prototype._addFrames = function(){
	for(var i=0; i < 10; i ++){
		frame = new Frame();
		this.frames.push(frame);
	}
};

Game.prototype._addFrameIndex = function() {
  for(var i=0; i < 10; i++) {
    this.frames[i].number = i+1;
  }
};

Game.prototype.calculateScore = function(){
	for(var i=0; i<10; i++) {
    if (this.frames[i].totalScore === 10) {
      this.calculateBonusScore(i);
    };
    this.score += this.frames[i].totalScore;
  };
};

Game.prototype.calculateBonusScore = function(number){
	if (this.frames[number]._isStrike()){
		this.frames[number].totalScore += this.frames[number+1].totalScore
	}
	else if (this.frames[number]._isSpare() && !this.frames[number]._isStrike()){
		this.frames[number].totalScore += this.frames [number+1].rollOneScore
	};
};


// Game.prototype.addFrame = function() {
// 	if(this.frames.length>=10){
// 		return "Game Over"
// 	}
// 	else{
// 		frame = new Frame
// 		this.frames.push(frame);
// 	};
// };

// Game.prototype.calculateScore = function(){ 
// 	for ( i = 0; i < 10; i++){
// 		if (this.frames[i].score === 10) {
//       this.calculateBonusScore(i);
//     };
// 	}

// };

// Game.prototype.calculateScore = function(number){
// 	frame = this.frames[number];
// 	if (frame.isStrike()) {
// 		return this.BonusStrike(number);
// 	}
// 	else{
// 		return frame.findScore();
// 	};
// };


// Game.prototype.BonusStrike  = function(number){
// 	sum = this.frames[number].findScore();
// 	if (this.frames[number+1] != undefined){
// 		sum += this.frames[number+1].findScore();
// 		if (this.frames[number+2] != undefined){
// 			sum += this.frames[number+2].findScore();
// 		}
// 	};
// 	return sum
// };

