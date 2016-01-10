describe('Game', function() {

  it('is defined', function() {
    expect(game = new Game()).toBeDefined();
  });

  describe('#bowlA', function() {
    it('is defined', function() {
      expect(game.bowlA(5)).toBeDefined();
    });
  });

  describe('#getBallCount', function() {
    it('can return the current number of balls bowled', function() {
      game.bowlA(5);
      expect(game.getBallCount()).toEqual(1);
    });
  });

  describe('#checkScore', function() {
    it('is defined', function() {
      expect(game.checkScore()).toBeDefined();
    });
  });

});
