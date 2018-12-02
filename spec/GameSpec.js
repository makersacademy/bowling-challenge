describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();

  });

  it('is a game', function() {
    expect(game).toEqual(jasmine.any(Game));
  });

  it('starts with no completed frames', function(){
    expect(game.frames()).toEqual([]);
  });

  it('calculates a gutter game', function(){
    var i;
    for (i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score()).toEqual(0);
  });

  it('calculates a non gutter, spares or strikes game', function(){
    var i;
    for (i = 0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.score()).toEqual(20);
  });

});
