function BowlingBall(){

BowlingBall.prototype.roll = function() {
	return Math.floor((Math.random() * 10) + 1);
};

}