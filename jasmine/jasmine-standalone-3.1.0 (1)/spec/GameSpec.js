describe('Game', function() {
  var game;
  beforeEach(function() {
    game = new Game;
    pins = new Pins;
    frame = new Frame;
  });

  describe('game', function() {
    it('has a counter for games', function() {
      expect(game.frameNumber).toEqual(1)
    });

    it('keeps track of rolls', function() {
      expect(game.rolls).toEqual(1)
    });

    it('has a default number of pins', function() {
      expect(game.defaultPins).toEqual(pins.default)
    });

    it('has a total', function() {
      expect(game.totalScore).toEqual(0)
    });
  });
  // it('has an array', function() {
  //   expect(game.frames).toEqual([])
  // });

  // it('has Frame object inside', function() {
  //   expect(game.frames[0]).toEqual(1)
  // });

  describe('roll', function() {
    beforeEach(function() {
      game.rolls = 1
    });

    it('throws an error if game is already 10', function() {
      game.frameNumber = 11
      expect(function(){game.roll(9);}).toThrowError('You already did 10 frames!');
    });

    it('chooses a number from secondButtons and goes to the next game', function() {
      game.rolls += 1
      expect(game.roll(3)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    });

    it('can have a third rolls on the 10th game', function() {

      game.rolls += 1
      game.frameNumber === 10
      expect(game.roll(3)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    });
  });
});
