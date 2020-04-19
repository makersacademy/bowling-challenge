describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('open frame games', function() {

    it('Gutter game returns 0', function() {
      expect(game.score([00, 00, 00, 00, 00, 00, 00, 00, 00, 00])).toEqual(0);
    });
  
    it('game with 5 pins hit returns 5', function() {
      expect(game.score([05, 00, 00, 00, 00, 00, 00, 00, 00, 00])).toEqual(5);
    });

  });
  
  
});
