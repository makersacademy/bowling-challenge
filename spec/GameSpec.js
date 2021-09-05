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
		spyOn(game.currentFrame, "roll");
		game.rollBall(5);
		game.rollBall(4);
		expect(game.currentFrame.roll).toHaveBeenCalledWith(5);
		expect(game.currentFrame.roll).toHaveBeenCalledWith(4);
	});

	it("can roll multiple strikes", () => {
		spyOn(game, "nextFrame");
		game.rollBall(10);
		game.rollBall(10);
		game.rollBall(10);
		expect(game.nextFrame).toHaveBeenCalledTimes(3);
	});

	it("can score a partial non-strike/non-spare game", () => {
		game.rollBall(5);
		game.rollBall(4);
		game.rollBall(3);
		game.rollBall(2);
		game.score();
		expect(game.currentscore).toEqual(14);
	});

	it("can score a full non-strike/non-spare game", () => {
		for (let i = 0; i < 10; i++) {
			game.rollBall(5);
			game.rollBall(0);
		}
		game.score();
		expect(game.currentscore).toEqual(50);
	});

	it("can score a spare", () => {
		game.rollBall(5);
		game.rollBall(5);
		game.rollBall(3);
		game.rollBall(3);
		game.score();
		expect(game.currentscore).toEqual(19);
	});

	it("can score a strike", () => {
		game.rollBall(10);
		game.rollBall(3);
		game.rollBall(4);
		game.score();
		expect(game.currentscore).toEqual(24);
	});

	it("can score multiple strikes in a row", () => {
		game.rollBall(10);
		game.rollBall(10);
		game.rollBall(3);
		game.rollBall(4);
		game.score();
		expect(game.currentscore).toEqual(47);
	});

	it("can create the final frame", () => {
		spyOn(game, "finalFrame");
		for (let i = 0; i < 9; i++) {
			game.rollBall(5);
			game.rollBall(4);
		}
		expect(game.finalFrame).toHaveBeenCalled();
	});

	it("can score a perfect game", () => {
		for (let i = 0; i < 12; i++) {
			game.rollBall(10);
		}
		console.log(game.frames)
		game.score();
		expect(game.currentscore).toEqual(300);
	});
});
