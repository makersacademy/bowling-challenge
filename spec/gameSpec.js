describe("Game", function () {

	let game;

	beforeEach(function () {
		game = new Game();
	});

	describe("state", function () {
		it("set to created when only created", function () {
			expect(game.state).toBe("created");
		});
	});
});