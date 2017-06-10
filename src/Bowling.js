function Bowling() {
		this.frame = [];
		this.frames = [];

		this.roll = function() {
			if (this.frame[0] === undefined) { 
				this.rollOne();
			}	else {
				this.rollTwo();
			}		
			return this.frames;
		};

		this.rollOne = function() {
			this.frame[0] = Math.round((Math.random() * 10));
			this.frames.push(this.frame);
		};
		
		this.rollTwo = function() {
			this.frame[1] = Math.round((Math.random()) * (10 - this.frame[0]));
			this.frame = [];
		};
	
		this.isFinalRoll = function() {
			this.frame[0] === undefined
		}
};
/*
bowling = new Bowling();

bowling.roll();
console.log(bowling.frames[0]);
bowling.roll();
console.log(bowling.frames[0]);
bowling.roll();
bowling.roll();
console.log(bowling.frames);*/
