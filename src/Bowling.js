function Bowling() {

		this.roll = function() {
			return (Math.random() * 10);
		};

};

bowling = new Bowling();

console.log(bowling.roll());
