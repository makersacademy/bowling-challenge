describe('Game', function () {
	var game

	beforeEach(function () {
		game = new Game()

	})

	it('Starts on frame 1', function () {
		expect(game.currentFrame.frameNumber).toEqual(1)
	})

	it('Scores get added after every frame', function () {
		game.currentFrame.firstBowl(5)
		game.currentFrame.secondBowl(5)
		expect(game.score).toEqual(10)
	})

	it('Moves to next frame after two turns', function () {
		game.currentFrame.firstBowl(5)
		game.currentFrame.secondBowl(5)
		expect(game.currentFrame.frameNumber).toEqual(2)
	})

	it('Stores the score of each frame', function () {
		game.currentFrame.firstBowl(5)
		game.currentFrame.secondBowl(5)
		expect(game.gameScores).toContain(10)
		expect(game.currentFrame.frameNumber).toEqual(2)
	})
	it('Move to next frame after strike', function () {
		game.currentFrame.firstBowl(10)
		expect(game.currentFrame.frameNumber).toEqual(2)
	})

	it('Add two scores to the frame', function () {
		game.currentFrame.firstBowl(5)
		game.currentFrame.secondBowl(3)
		game.currentFrame.firstBowl(5)
		game.currentFrame.secondBowl(4)
		expect(game.score).toEqual(17)
		expect(game.gameScores).toContain(8)
		expect(game.gameScores).toContain(17)
	})
	it('Adds strike bonus', function () {
		game.currentFrame.firstBowl(10)
		game.currentFrame.firstBowl(10)
		expect(game.score).toEqual(30)
	})
	it('Adds spare bonus', function () {
		game.currentFrame.firstBowl(5)
		game.currentFrame.secondBowl(5)
		game.currentFrame.firstBowl(1)
		game.currentFrame.secondBowl(5)
		expect(game.score).toEqual(17)
	})
})