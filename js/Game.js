function Game(){
	this.turns = []; // <--- Array of pins of all the turns that complete a game. ~
};

Game.prototype.roll = function(pins){
	this.turns.push(pins); // <--- Pushes the pins into the array of turns. ~
}

Game.prototype.score = function(){
	var result = 0;
	var turnNumber = 0;
	var frame = this;

	function spare(){
		return frame.turns[turnNumber] + frame.turns[turnNumber + 1] == 10;
		// <--- I removed "this" because it was referring to a different Object. So I gave it a variable called "frame". ~
	}

	function spareScore(){
		return frame.turns[turnNumber] + frame.turns[turnNumber + 1] + frame.turns[turnNumber + 2];
	} // <--- It calculates the number of pins of the first 3 turns. ~

	function standardScore(){
		return frame.turns[turnNumber] + frame.turns[turnNumber + 1];
	} // <--- It calculates the number of pins of the first 2 turns. ~

	function nextFrame(){
		turnNumber += 2;
	} // <--- It goes to the next frame (adds 2 index numbers in the array). ~

	for (var frameNum = 0; frameNum < 10; frameNum++) {

		if (spare()) {
			result += spareScore();
		} else {
			result += standardScore();
		}
		nextFrame();
	};
	return result; // <--- Calculation of the score. ~
};