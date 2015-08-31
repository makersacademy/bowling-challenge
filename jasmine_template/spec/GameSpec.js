describe('Game', function() {
  var game;

  beforeEach(function(){
    game = new Game();
    game.startGame();
  });

  describe('game', function() {
    it('has 10 frames in each game', function() {
    expect(game.frames.length).toEqual(10);
    });

    it('has 1 player', function() {
      expect(game.player).toEqual(1);
    });
  });

});