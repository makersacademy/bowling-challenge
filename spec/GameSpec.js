describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('should return 0 in a gutter game', function(){
    for (var i = 0; i < game.TOTAL_FRAMES; i++) {
      game.roll(0);
    }
    expect(game.getScore()).toEqual(0);
  });

});
