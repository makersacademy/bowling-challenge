describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('should be able to bowl and score a point', function (){
    game.bowl();
    expect(game.score).toEqual(1);
  });
});
