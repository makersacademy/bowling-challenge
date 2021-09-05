describe('Score', () => {

  beforeEach(() => {
    score = new Score();
    game = new Game();
  });

  it('calculates the current frame score', () => {
    game.frameRolls(2, 3);
    score.currentFrame(game.frames[game.frames.length - 1]);
    expect(score.frameScore).toEqual(5);
  });

  it('calculates frames score further into the game', () => {
    game.frameRolls(2, 3);
    game.frameRolls(1, 4);
    game.frameRolls(6, 3);
    game.frameRolls(2, 1);
    game.frameRolls(5, 3);
    score.currentFrame(game.frames[game.frames.length - 1]);
    expect(score.frameScore).toEqual(8);
  });

  it('calculates the total game score so far', () => {
    game.frameRolls(2, 3);
    game.frameRolls(1, 4);
    game.frameRolls(6, 3);
    score.scoreSoFar(game.frames);
    expect(score.totalScore).toEqual(19);
  });

});
