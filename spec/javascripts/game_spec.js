describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('starts a game at frame 1', function() {
    expect(game.currentFrame).toEqual(1);
  });

  it('starts a game at bowl 1', function() {
    expect(game.currentBowl).toEqual(1);
  });

  it('starts each frame with 10 pins', function() {
    expect(game.framePins).toEqual(10);
  });

  it('starts each game with a score of 0', function() {
    expect(game.totalScore).toEqual(0);
  });

  describe('bowl', function() {
    it('should decrese the framePins by number of pins', function() {
      game.bowl(3);
      expect(game.framePins).toEqual(7);
    });

    it('should increase currentBowl by 1', function() {
      game.bowl(3);
      expect(game.currentBowl).toEqual(2);
    });

    it('should increase currentFrame by 1 after second bowl', function() {
      game.bowl(3);
      game.bowl(4);
      expect(game.currentFrame).toEqual(2);
    });
  });

  describe('_calcBowlScore', function() {
    it('should add the bowl score to the score', function() {
      game.bowl(3);
      game.bowl(4);
      expect(game.totalScore).toEqual(7);
    });
  });
});
