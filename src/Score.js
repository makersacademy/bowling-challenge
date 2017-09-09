function Score(frameNumbers) {
	const gameSize = 10;
	this.scoreBoard = frameNumbers; 
	this.points = [];
	this.scoreSymbols = frameNumbers;
	this.total = 0;

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
		if(this.isStrike(board, (gameSize - 1))) {
			this.points[board.length - 1] += this.scoreBoard[board.length - 1][2] + 10;
			return this.points;
		} else if(this.isSpare(board, (gameSize - 1))) {
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

	this.calculateTotal = function() {
		for(var i=0; i < frameNumbers.length- 1; i++) {
			this.total += this.points[i];	
		};
			console.log(this.total)
	}

	this.convertFrames = function() {
		for(var i = 0; i < gameSize - 1; i++) {
			console.log(this.scoreBoard[i][0])
			if(this.scoreSymbols[i][0] === 10) {
				console.log(this.scoreSymbols[i])
				this.scoreSymbols[i] = ['X','-'];
			};
		};
	};
};

var numbers = [[5,2],[10,0],[2,4],[4,6],[2,4],[0,0],[10,0],[9,1],[2,0],[0,10,2]];
score = new Score(numbers);

console.log(score.scoreBoard);
score.checkAdditionalPoints();
console.log("points: " + score.points);
//score.convertFrames();
console.log("final console: " + score.scoreSymbols)
console.log("numbers: " + score.scoreBoard);
