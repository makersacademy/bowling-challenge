describe('Bowling Game', function() {
  var game = new BowlingGame;
  it('allows the player to roll a ball and get a random score between 0 - 10', function(){
    expect(game.roll()).toBeLessThan(11);
    expect(game.roll()).toBeGreaterThan(-1);
  });
});
