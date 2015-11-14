function Roll() {
};

Roll.prototype.rollBall = function() {
	return Math.floor(Math.random() * 10) + 1;
};