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

	it("can roll a single frame and then move to the next frame", () => {
		spyOn(game, "nextFrame");
		spyOn(game.currentFrame, "roll");
		game.rollBall(5);
		game.rollBall(4);
		expect(game.currentFrame.roll).toHaveBeenCalledWith(5);
		expect(game.currentFrame.roll).toHaveBeenCalledWith(4);
		// expect(game.nextFrame).toHaveBeenCalled();
	});

	it("can roll multiple strikes", () => {
		game.rollBall(10);
		game.rollBall(10);
		game.rollBall(10);
		expect(game.frameNo).toEqual(4);
	});
});
