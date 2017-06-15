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
				this.addPointsNormalRoll(board, i);
			} else if(i === 9) {
				this.addPointsFinalRoll(board)
			};
		};
	};
	
	this.isFinalRoll = function(board) {
		if(board.length === 10 && !this.points[i+1]) { return true }
	};	

	this.addPointsNormalRoll = function(board, i) {
		if(this.isStrike(board, i)) {
			this.addStrike(board, i);
		} else if(this.isSpare(board, i)) {
			this.addSpare(board, i);
		};
	};
	
	this.addPointsFinalRoll = function(board) {
		if(this.isStrike(board, (board.length - 1))) {
			console.log(this.points[board.length - 1])
			console.log(this.scoreBoard[board.length - 1][2])
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
		if(board[frame][0] === 10) {
			this.points[frame] += this.points[frame + 1]
		};
	};
	
	this.addSpare = function(board, frame) {
		if(board[frame][0] !== 10 && this.points[frame] === 10) {
			this.points[frame] += board[frame + 1][0]
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
