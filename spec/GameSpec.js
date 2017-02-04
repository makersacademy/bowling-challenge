describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('should return 0 in a gutter game', function(){
    for (var i = 0; i < game._TOTAL_FRAMES; i++) {
      game.roll(0);
    }
    expect(game.getScore()).toEqual(0);
  });

  it('should return 20 if every roll is a 1', function(){
    for (var i = 0; i < game._TOTAL_FRAMES; i++) {
      game.roll(1);
      game.roll(1);
    }
    expect(game.getScore()).toEqual(20);
  });

});
