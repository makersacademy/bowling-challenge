describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("Gutter game", function() {
    it('should return 0', function(){
      for (var i = 0; i < game.frames; i++) {
        game.rollBall(0);
      }
      expect(game.getScore()).toEqual(0);
    });
  });
});
