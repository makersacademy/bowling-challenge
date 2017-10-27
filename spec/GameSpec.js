describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();

  });

  it('the game starts at the beginning on zero', function () {
    expect(game.startGame()).toBe(0);
  });


  it('the game can be a gutter game, where no points are scored', function() {
    // roll 10 rolls scoring zero???
    expect(game.gutterBall()).toBe(0);
  });

  it('the game has a maximum points of 300', function () {
    expect(game.maxScore()).toBe(300);
  });




});
