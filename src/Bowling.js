function Bowling() {
		this.frame = [];
		this.frames = [];
		this.framesSymbols = [];
		this.framesPoints = [];

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
			this.framesPoints.push(this.frame[0] + this.frame[1]);
			this.frame = [];
		};

		this.convertFrames = function() {
			var frames = this.frames;
			for(var i=0; i< frames.length; i++) {
				if(frames[i][0] === 10) {
					frames[i] = ['X', '-'];
				} else if(frames[i][0] + frames[i][1] === 10) {
					frames[i][1] = '/';
				};
			};
			this.framesSymbols = frames;
		};

		};
/*
bowling = new Bowling();

bowling.roll();
console.log(bowling.frames[0]);
bowling.roll();
console.log(bowling.frames[0]);
bowling.roll();
bowling.roll();
console.log(bowling.frames);
bowling.convertFrames();
console.log(bowling.framesSymbols);*/
