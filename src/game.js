function Game() {
  this.frames = [];
  this.scores = [];
  this.score = 0;
  this.frameCount = 0;
}

Game.prototype.playFrame = function(frame) {
  var frame = new Frame;
  // if(this.scores.length === 8) {
	// 	this.lastRoll();
	// } else if (this.frames.length === 2) {
  //   this.checkBonus();
  //   this.addScoresArray();
  //   this.playFrame();
	// } else {
		frame.firstRoll();
		frame.secondRoll();
		this.frames.push(frame);
	// }
};


// Game.prototype._bonusCheck = function() {
// 	if(this.bowlingFrames[0].didStrike){
// 		this.bowlingFrames[0].frameScore+=this.bowlingFrames[1].frameScore*2;
// 	} else if(this.bowlingFrames[0].didSpare){
// 		this.bowlingFrames[0].frameScore+=this.bowlingFrames[1].rollOne;
// 	} else {
// 		this.bowlingFrames[0].frameScore=this.bowlingFrames[0].frameScore;
// 	}
// };
//
//
// Game.prototype._addToScoresArray = function(){
// 	this.scoresArray.push(this.bowlingFrames[0].frameScore);
// 	this.bowlingFrames.shift();
// };
//
// Game.prototype._lastRoll = function() {
// 	let frame = new Frame;
// 	if(this.count<3){
// 		frame.firstRoll();
// 		frame.secondRoll();
// 		this.bowlingFrames.push(frame);
// 		if(frame.didStrike){
// 			this.count ++;
// 			this._lastRoll();
// 		} else if(frame.didSpare) {
// 			this.count+=2
// 			this._lastRoll();
// 		} else {
// 			this._totalScore();
// 		}
// 	} else {
// 		this._totalScore();
// 	};
// };
//
//
// Game.prototype._totalScore = function() {
// 	let index;
// 	this.score = this.scoresArray.reduce(function(a, b){ return a + b });
// 	for (index = 0; index < this.bowlingFrames.length; ++index) {
//     this.score += this.bowlingFrames[index].frameScore
// 	}
// };
//
