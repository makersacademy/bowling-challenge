describe('Bowling Game', function() {

  beforeEach(function() {
    bowlingGame = new BowlingGame();
  });

  it('can create a new game', function() {
    expect(bowlingGame.newGame).toBeDefined();
  });

  
});
