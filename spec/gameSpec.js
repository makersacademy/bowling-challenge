describe('Bowling Game', function() {
  beforeEach(function() {
    game = new Game();
  });

  function bowlLoop(bowls, pins){
    for (var i = 0; i < bowls; i++){
      game.bowl(pins);
    }
  };

  it('can roll gutter game', function () {
    bowlLoop(20, 0);
    expect(game.score()).toEqual(0);
  });

  it('can knock down one pin in all 20 bowls', function() {
    bowlLoop(20, 1);
    expect(game.score()).toEqual(20);
  });
  
});
