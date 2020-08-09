describe('Bowling', function() {
  var game;
  beforeEach(function() {
    game = new Game();
  });

  describe('score', function() {
    it('Score begins at 0', function() {
      expect(game.showScore()).toEqual(0);
    });
    it('Score can increase after a frame', function() {
      game.frame(3,4);
      expect(game.showScore()).toEqual(7);
    });
  });

  describe('frame', function() {
    it('A user can bowl a whole frame', function() {
      expect(game.frame(3, 4)).toEqual([3,4]);
    });
  });
});
