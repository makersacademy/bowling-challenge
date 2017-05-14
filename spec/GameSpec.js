describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('contains and array of frames', function() {
    expect(game._frames).toEqual([]);
  });

  it('contains the current round', function() {
    expect(game._currentRound).toBe(1);
  });

  describe('throwFirstBall', function() {

    beforeEach(function() {
      game = new Game();
      pins = new Pins();
    });

    it('allows user to throw first ball', function() {
      game.throwFirstBall(pins)
      expect(game._frames[0].length).toBe(1);
    });
  });

  describe('throwSecondBall', function() {

    beforeEach(function() {
      game = new Game();
      pins = new Pins();
    });

    it('allows user to throw second ball', function() {
      game.throwFirstBall(pins)
      game.throwSecondBall(pins)
      expect(game._frames[0].length).toBe(2);
    });

    it('increases _currentRound by 1', function() {
      game.throwFirstBall(pins)
      game.throwSecondBall(pins)
      expect(game._currentRound).toBe(2);
    });
  });
});
