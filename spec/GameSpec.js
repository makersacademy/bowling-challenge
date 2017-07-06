describe('Game', function() {

  var game;
  var pins;

  beforeEach(function() {
    game = new Game();
  });

  it('contains and array of frames', function() {
    expect(game.frames).toEqual([]);
  });

  it('contains the current round', function() {
    expect(game.currentRound).toBe(1);
  });

  describe('throwFirstBall', function() {

    beforeEach(function() {
      game = new Game();
      pins = new Pins();
    });

    it('allows user to throw first ball', function() {
      game.throwFirstBall(pins.pinsDownFirstThrow)
      expect(game.frames[0].length).toBe(1);
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
      expect(game.frames[0].length).toBe(2);
    });

    it('increases currentRound by 1', function() {
      expect(game.currentRound).toBe(2);
    });

    it('second round does not overwrite frames', function() {
      game.throwFirstBall(pins.pinsDownFirstThrow);
      game.throwSecondBall(pins.pinsDownFirstThrow);
      expect(game.frames.length).toBe(2);
    });

    it('second round does not add to frames[0]', function() {
      game.throwFirstBall(pins.pinsDownFirstThrow);
      game.throwSecondBall(pins.pinsDownFirstThrow);
      expect(game.frames[0].length).toBe(2);
    });
  });
});
