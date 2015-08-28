describe('Bowling Game', function() {

  beforeEach(function() {
    game = new BowlingGame();
    bowlingFrame = new BowlingFrame(1);
  });

  it('can create a new game', function() {
    expect(game.newGame).toBeDefined();
  });

  it('shows first frames score', function() {
    bowlingFrame.rollOne(7);
    bowlingFrame.rollTwo(2);
    bowlingFrame.submitFrame();
    expect(game.currentScore()).toEqual(9);
  });
});
