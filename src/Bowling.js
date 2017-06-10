function Bowling() {
		this.frame = [];
		this.framesNumbers = [];
		this.framesSymbols = [];
		this.rollPoints = undefined;

		this.roll = function() {
			if(this.framesNumbers.length >= 10) {
				alert('Maximum throws reached!')
			};

			if (this.frame[0] === undefined) { 
				this.rollOne();
			}	else {
				this.rollTwo();
			};		
		};

		this.rollOne = function() {
			this.rollPoints = Math.round((Math.random() * 10));
			this.frame[0] = this.rollPoints;
			this.framesNumbers.push(this.frame);
		};
		
		this.rollTwo = function() {
			this.rollPoints =	Math.round((Math.random()) * (10 - this.frame[0]));
			this.frame[1] = this.rollPoints;
			this.frame = [];
		};
/*
		this.convertFrames = function() {
			for(var i=0; i<board.length; i++) {
					if(board[i][0] === 10) {
						board[i] = ['X', '-'];
						console.log('strike!')
						console.log(this.framesNumbers[i]);
						console.log(board[i]);
					} else if(board[i][0] + board[i][1] === 10) {
						board[i][1] = '/';
						console.log('spare!')
						console.log(this.framesNumbers[i]);
						console.log(board[i]);
					};
				};
			this.framesSymbols = board;
		};
*/
};

bowling = new Bowling();

bowling.roll();
bowling.roll();
bowling.roll();
bowling.roll();
console.log(bowling.framesNumbers);
//bowling.convertFrames();
//console.log(bowling.framesSymbols);
