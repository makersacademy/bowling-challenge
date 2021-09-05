describe('Score', () => {

  beforeEach(() => {
    score = new Score();
    game = new Game();
  });

  it('calculates the current frame score', () => {
    game.enterFrameRolls(2, 3);
    score.currentFrame(game.frames[game.frames.length - 1]);
    expect(score.frameScore).toEqual(5);
  });

  it('calculates frames score further into the game', () => {
    game.enterFrameRolls(2, 3);
    game.enterFrameRolls(1, 4);
    game.enterFrameRolls(6, 3);
    game.enterFrameRolls(2, 1);
    game.enterFrameRolls(5, 3);
    score.currentFrame(game.frames[game.frames.length - 1]);
    expect(score.frameScore).toEqual(8);
  });

  it('calculates the total game score so far', () => {
    game.enterFrameRolls(2, 3);
    game.enterFrameRolls(1, 4);
    game.enterFrameRolls(6, 3);
    score.scoreSoFar(game.frames);
    expect(score.totalScore).toEqual(19);
  });

});
