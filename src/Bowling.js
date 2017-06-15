function Bowling() {
		this.frame = [];
		this.framesNumbers = [];
		this.framesSymbols = [];
		this.rollPoints = undefined;
		this.isFullFrame = false;

		this.roll = function() {
			if (this.frame[0] === undefined) { 
				this.rollOne();
			}	else if(this.frame[1] == undefined) {
				this.rollTwo();
			} else if(this.framesNumbers.length >= 10) {
				this.rollThree();
			};		
		};

		this.rollOne = function() {
			this.rollPoints = Math.round(Math.random() * 10);
			this.frame[0] = this.rollPoints;
			this.framesNumbers.push(this.frame);
			this.isFullFrame = false;
		};
		
		this.rollTwo = function() {
			this.rollPoints =	Math.round(Math.random() * (10 - this.frame[0]));
			this.frame[1] = this.rollPoints;
			if(this.framesNumbers.length <10) { 
				this.frame = [];
				return this.isFullFrame = true;
			};
			this.isFullFrame = false;
		};

		this.rollThree = function() {
			this.rollPoints = Math.round(Math.random() * 10);
			this.frame[2] = this.rollPoints;
			this.isFullFrame = true;
			alert('Maximum throws reached!')
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
//bowling.convertFrames();
//console.log(bowling.framesSymbols);
