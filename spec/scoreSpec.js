describe('Score', () => {

  beforeEach(() => {
    score = new Score();
    game = new Game();
  });

  // can't get test to work even though the code works as expected.
  it('calculates the current frame score', () => {
    game.enterFrameRolls(2, 3);
    game.frameScore();
    expect(score.frameScore).toEqual(5);
  });

});
