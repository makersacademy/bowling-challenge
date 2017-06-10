function Score(frameNumbers, frameSymbols) {
	this.scoreBoard = frameNumbers; 
	this.points = [];

	this.initialFramePoints = function() {
		for(var i=0; i<frameNumbers.length; i++) {
			this.points[i] = this.scoreBoard[i][0] + this.scoreBoard[i][1];
		};		
	};

	this.checkAdditionalPoints = function() {
		for(var i=0; i<frameNumbers.length; i++) {
			if(frameNumbers[i+1]) {
				if(frameNumbers[i][0] === 10) {
					this.points[i] += this.points[i+1];
				};
			};
		};
	};

}

var frameSymbols = [[5,2],['X','-'],[2,4],[4,6],[2,4]];
var frameNumbers = [[5,2],[10,0],[2,4],[4,6],[2,4]];
score = new Score(frameNumbers, frameSymbols);
score.initialFramePoints();
console.log(score.points);
score.checkAdditionalPoints();
console.log(score.points);
