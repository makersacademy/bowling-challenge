describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('should give the correct score of 0 for a gutter game', function(){
    for (var i = 0; i < game._TOTAL_FRAMES; i++) {
      game.roll(0);
      game.roll(0);
    }
    expect(game.getScore()).toEqual(0);
  });

  it('should give the correct score of 20 for all rolls of 1', function(){
    for (var i = 0; i < game._TOTAL_FRAMES; i++) {
      game.roll(1);
      game.roll(1);
    }
    expect(game.getScore()).toEqual(20);
  });

  it('should add the correct bonus score for a spare', function(){
    game.roll(5);
    game.roll(5); // spare as all pints knocked over with two rolls

    game.roll(3);
    game.roll(2); // bonus due is three as the score of the next roll

    for (var i = 0; i < (game._TOTAL_FRAMES - 2); i++) {
      game.roll(0);
      game.roll(0);
    }

    expect(game.getScore()).toEqual(10 + 5 + 3);
  });

  it('should add the correct bonus score for a strike', function(){
    game.roll(10); // strike as knocked all ten pins in first roll

    game.roll(3);
    game.roll(2);

    for (var i = 0; i < (game._TOTAL_FRAMES - 2); i++) {
      game.roll(0);
      game.roll(0);
    }

    expect(game.getScore()).toEqual(24);
  });

});
