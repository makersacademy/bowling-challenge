describe("BowlingGame", function() {

  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  it('score starts as 0', function() {
    expect(game.score()).toEqual(0);
  });

});
