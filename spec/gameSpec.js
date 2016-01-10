describe('Game', function() {

  var game

  it('is defined', function() {
    expect(game = new Game()).toBeDefined();
  });

  describe('#bowlA', function() {
    it('is defined', function() {
      game = new Game();
      expect(game.bowlA(5)).toBeDefined();
    });
  });

  describe('#getBallCount', function() {
    it ('can return the current number of balls bowled', function() {
      game = new Game();
      game.bowlA(5);
      expect(game.getBallCount()).toEqual(1);
    });
  });

});
