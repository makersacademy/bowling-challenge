describe('Game', function() {
	
	var game;
	var frame;

	beforeEach(function() {
		game = new Game(new Frame);
		spyOn(game._frame,'firstBowl').and.callThrough();
		spyOn(game._frame,'secondBowl').and.callThrough();
	});

	it('should start the game with a score of 0', function() {
		expect(game.finalScore).toEqual(0);
	});

	it("a user can begin a game with their first bowl", function() {
  game.bowl()
  expect(game._frame.firstBowl).toHaveBeenCalled();
	});

	it('a frame will complete if a user rolls a strike', function() {
	spyOn(game._frame,'isStrike').and.returnValue(true)
	game.bowl()
	expect(game.scoreCard.length).toEqual(1)
	});

	it("a user can take their second bowl", function() {
  game.bowl()
  game.bowl()
	expect(game.scoreCard.length).toEqual(1)
	});

	it("the game can calculate the score", function() { 
  spyOn(game.scoreCard,'reduce').and.returnValue([5,4,5,5])
  game.calculate()
	expect(game.finalScore).toEqual(19)
	});

})
