describe('Game', () => {
  var game;
  var frame;

  beforeEach(() => {
    game = new Game();
    frame = new Frame();
  });

  it('starts with 10 frames', () => {
    expect(game.frames.length).toBe(10);
  });

  it('allows player to take turns', () => {
    game.takeTurn()
    expect(game.frames[0].turnOne).toBeGreaterThan(0);

  });

  it('is able to get score for each frame', () => {
    game.frames[0].turnOne = 2;
    game.frames[0].turnTwo = 5;
    game.countScore(game.frames[0])
    expect(game.frames[0].score).toBe(7);
  });

  it('moves to next frame when current frame is complete', () => {
    var currentGame = game;
    currentGame.takeTurn();
    currentGame.takeTurn();
    currentGame.takeTurn();
    expect(currentGame.frames[1].turnOne).toBeGreaterThan(0);
  });

  it('moves to next frame when player gets strike', () => {
    var currentGame = game;
    spyOn(Math, 'random').and.returnValue(10);
    currentGame.takeTurn();
    currentGame.takeTurn();
    expect(currentGame.frames[1].turnOne).toBeGreaterThan(0);
  });

});