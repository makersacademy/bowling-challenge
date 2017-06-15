function Score(frameNumbers) {
	const gameSize = 10;
	this.scoreBoard = frameNumbers; 
	this.points = [];

	for(var i=0; i<frameNumbers.length; i++) {
		this.points[i] = this.scoreBoard[i][0] + this.scoreBoard[i][1];
	};		

	this.checkAdditionalPoints = function() {
		var board = this.scoreBoard;
		for(var i=0; i< board.length; i++) {
			if(this.points[i+1]) {
				this.addPointsNormalRoll(board, i);
			} else if(i === gameSize - 1) {
				this.addPointsFinalRoll(board)
			};
		};
	};
	
	this.addPointsNormalRoll = function(board, frame) {
		if(this.isStrike(board, frame)) {
			this.addStrike(board, frame);
		} else if(this.isSpare(board, frame)) {
			this.addSpare(board, frame);
		};
	};
	
	this.addPointsFinalRoll = function(board) {
		if(this.isStrike(board, (board.length - 1))) {
			this.points[board.length - 1] += this.scoreBoard[board.length - 1][2] + 10;
			return this.points;
		} else if(this.isSpare(board, (board.length - 1))) {
			this.points[board.length - 1] += this.scoreBoard[board.length - 1][2];
		};	
	};

	this.isStrike = function(board, frame) {
		if(board[frame][0] === 10) { return true }
	};

	this.isSpare = function(board, frame) {
		if(board[frame][0] !== 10 && this.points[frame] === 10) { return true }
	};

	this.addStrike = function(board, frame) {
		this.points[frame] += this.points[frame + 1]
	};
	
	this.addSpare = function(board, frame) {
		this.points[frame] += board[frame + 1][0]
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
