describe("Bowling Score Card", function() {

	it("should record a score of zero for a gutter game", function() {
		game = new Game();
		for (i = 0; i < 20; i++) {
			game.roll(0);
		};
		expect(game.score).toEqual(0);
	});

	it("tracks frames, rolls, score", function() {
		game = new Game();
		game.roll(1);
		game.roll(4);
		game.roll(5);
		game.roll(5);
		expect(game.frame).toEqual(3);
		expect(game.rollCount).toEqual(1);
		expect(game.score).toEqual(15);
	});

	it("limits the game to 10 frames", function() {
		game = new Game();
		for (i = 0; i < 20; i++) {
			game.roll(4);
		};
		expect(function() {
			game.roll(4)
		}).toThrow();
	});



});
