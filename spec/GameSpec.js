describe('Game', function() {

  var game;
  var pins;

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
      game.throwFirstBall(pins.pinsDownFirstThrow);
      game.throwSecondBall(pins.pinsDownFirstThrow);
    });

    it('allows user to throw second ball', function() {
      expect(game._frames[0].length).toBe(2);
    });

    it('increases _currentRound by 1', function() {
      expect(game._currentRound).toBe(2);
    });

    it('second round does not overwrite _frames', function() {
      game.throwFirstBall(pins.pinsDownFirstThrow);
      game.throwSecondBall(pins.pinsDownFirstThrow);
      expect(game._frames.length).toBe(2);
    });

    it('second round does not add to _frames[0]', function() {
      game.throwFirstBall(pins.pinsDownFirstThrow);
      game.throwSecondBall(pins.pinsDownFirstThrow);
      expect(game._frames[0].length).toBe(2);
    });
  });
});
