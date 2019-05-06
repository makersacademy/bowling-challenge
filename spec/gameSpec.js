describe('Bowling Game', function() {
  beforeEach(function() {
    game = new Game();
  });

  var bowlLoop = function(pins, bowls){
    for (var i = 0; i < bowls; i++){
      game.bowl(pins);
    }
  };

  it('can roll gutter game', function() {
    bowlLoop(0, 20);
    expect(game.score()).toEqual(0);
  });

  it('can score 1 each bowl', function() {
    bowlLoop(1, 20);
    expect(game.score()).toEqual(20);
  });

  it('can score a spare', function() {
    game.bowl(5);
    game.bowl(5);
    game.bowl(8);
    bowlLoop(0, 17);
    expect(game.score()).toEqual(26);
  });
});
