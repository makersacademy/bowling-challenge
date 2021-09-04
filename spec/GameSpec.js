describe("Game", () => {
	let game;
	let frame;
	beforeEach(() => {
		game = new Game();
	});

	it("initializes an empty game", () => {
		expect(game.frameNo).toEqual(1);
		expect(game.frames).toEqual([]);
	});

	it("can create a new frame", () => {
		game.nextFrame();
		expect(game.frameNo).toEqual(2);
		expect(game.frames.length).toEqual(1);
	});
});
