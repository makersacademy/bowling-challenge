describe('Bowling Game', function() {

  beforeEach(function() {
    game = new BowlingGame();
    bowlingFrame = new BowlingFrame(1);
  });

  it('can create a new game', function() {
    expect(game.newGame).toBeDefined();
  });

  it('adds up first frames score', function() {
    bowlingFrame.rollOne(7);
    bowlingFrame.rollTwo(2);
    expect(game.currentScore()).toEqual(9);
  });

  it('adds up frame scores', function() {
    bowlingFrame.rollOne(7);
    bowlingFrame.rollTwo(2);
    bowlingFrameTwo = new BowlingFrame(2);
    bowlingFrameTwo.rollOne(5);
    bowlingFrameTwo.rollTwo(1);
    expect(game.currentScore()).toEqual(15);
  });

  it('current score should start at 0', function() {
    expect(game.currentScore()).toEqual(0);
  });


});
