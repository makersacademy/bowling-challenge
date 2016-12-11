describe('Game', function () {
  var game;

  beforeEach(function (){
    game = new Game();
  })

  it('is defined', function() {
    expect(game).toBeDefined();
  })

  it('is a Gutter Game', function () {
    for(var i = 0; i<21; i++) {
      game.roll(0);
    }
    expect(game.score()).toEqual(0);
  })

  it('rolls all ones', function () {
    for(var i = 0; i<21; i++) {
      game.roll(0);
    }
    expect(game.score()).toEqual(20);

  })
});
