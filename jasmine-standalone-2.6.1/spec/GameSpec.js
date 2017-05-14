describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('should be able to bowl and score a point', function (){
    game.firstBowl();
    expect(game.score).toEqual(1);
  });

  it('should be able to add up scores', function (){
    game.secondBowl();
    game.secondBowl();
    expect(game.total).toEqual(3);
  });
});
