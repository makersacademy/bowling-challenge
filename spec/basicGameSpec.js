describe('Basic testing', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('rolling 20 1s', function() {
    beforeEach(function() {
      for (i = 0; i < 20; i++) {
        game.roll(1);
      }
    });

    it('should have a score of 20', function() {
      expect(game.score()).toEqual(20);
    });
  });
});
