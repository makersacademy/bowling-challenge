function Bowling() {
		this.frame = [];

		this.rollOne = function() {
			this.frame[0] = Math.round((Math.random() * 10));
			return this.frame;
		};
		
		this.rollTwo = function() {
			this.frame[1] = Math.round((Math.random()) * (10 - this.frame[0]));
			return this.frame;
		};
};

bowling = new Bowling();

console.log(bowling.rollOne());
console.log(bowling.rollTwo());
