describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('starts a game at frame 1', function() {
    expect(game.currentFrame).toEqual(1);
  });

  it('starts a game at roll 1', function() {
    expect(game.currentRoll).toEqual(1);
  });

  it('starts each frame with 10 pins', function() {
    expect(game.framePins).toEqual(10);
  });

  describe('roll', function() {
    it('should decrese the framePins by number of pins', function() {
      game.roll(3);
      expect(game.framePins).toEqual(7);
    });

    it('should increase currentRoll by 1', function() {
      game.roll(3);
      expect(game.currentRoll).toEqual(2);
    });

    it('should increase currentFrame by 1 after second roll', function() {
      game.roll(3);
      game.roll(4);
      expect(game.currentFrame).toEqual(2);
    });
  });
});
