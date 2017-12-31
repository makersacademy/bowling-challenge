describe("Bowling Game", function() {

	var game;

	beforeEach(function(){
		game = new Game();
	});

	function manyRolls(rollScore, numberOfRolls) {
		for(var i=0; i<numberOfRolls; i++) {
			game.roll(rollScore);
		}
	}

	it("should be able to roll a gutter game", function(){
		manyRolls(0,20);
		expect(game.score()).toEqual(0);
	});


});
