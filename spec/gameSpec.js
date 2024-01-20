describe("Game", function () {

	let game;

	beforeEach(function () {
		game = new Game();
	});

	describe("state", function () {
		it("set to true", function () {
			expect(game.state).toBe(true);
		});
	});
});