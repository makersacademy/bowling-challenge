function Score(frameNumbers) {
	this.scoreBoard = frameNumbers; 
	this.points = [];

	for(var i=0; i<frameNumbers.length; i++) {
		this.points[i] = this.scoreBoard[i][0] + this.scoreBoard[i][1];
	};		

	this.checkAdditionalPoints = function() {
		var board = this.scoreBoard;
		for(var i=0; i< board.length; i++) {
			if(this.points[i+1]) {
			 	this.checkStrike(board, i)
				this.checkSpare(board, i) 
				//if(this.points[i] === 10) {
				//	this.points[i] += board[i+1][0];
				//};
			} else if(this.scoreBoard.length === 10) {
				if(board[board.length - 1][0] === 10) {
					this.points[board.length - 1] += this.scoreBoard[board.length - 1][2] + 10;
					return this.points;
				} else if(this.points[board.length - 1] === 10) {
					this.points[board.length - 1] += this.scoreBoard[board.length - 1][2];
				};
			};
		};
	};

	this.checkStrike = function(scoreboard, frame) {
		if(scoreboard[frame][0] === 10) {
			this.points[frame] += this.points[frame + 1]
		};
	};
	
	this.checkSpare = function(scoreboard, frame) {
		if(scoreboard[frame][0] !== 10 && this.points[frame] === 10) {
			this.points[frame] += scoreboard[frame + 1][0]
		};
	};

};

/*
var numbers = [[5,2],[10,0],[2,4],[4,6],[2,4]];
score = new Score(numbers);
console.log(score.points);
score.checkAdditionalPoints();
console.log(score.points);

console.log('round 2')
numbers.push([2,8])
numbers.push([2,0])
score = new Score(numbers);
console.log(score.points);
score.checkAdditionalPoints();
console.log(score.points);
*/
