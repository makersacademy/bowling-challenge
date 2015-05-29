describe('Bowling', function () {

  beforeEach(function() {
    game = new Game();
  });

  describe('has a default', function() {
    it('game scoresheet', function() {
      expect(game.scoresheet).toContain('scoresheet')
    });
  });

});