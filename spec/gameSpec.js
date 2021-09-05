describe('Game', () => {

  beforeEach(() => {
    game = new Game();
    spyOn(window.console, 'log');
  });

  it('initializes with an empty array', () => {
    expect(game.frames).toEqual([])
  });

  it('creates a new frame', () => {
    game._newFrame();
    expect(game.frames[0]).toBeInstanceOf(Frame);
  });

  it('enters a players rolls for the current frame', () => {
    game.enterFrameRolls(3, 4);
    expect(game.frames[0]).toBeInstanceOf(Frame);
    expect(game.frames[0].roll_one).toEqual(3);
    expect(game.frames[0].roll_two).toEqual(4);
  });

  it('enters a players rolls for multiple frames', () => {
    game.enterFrameRolls(3, 4);
    game.enterFrameRolls(1, 7);
    game.enterFrameRolls(2, 3);
    expect(game.frames[0]).toBeInstanceOf(Frame);
    expect(game.frames[1]).toBeInstanceOf(Frame);
    expect(game.frames[2]).toBeInstanceOf(Frame);
    expect(game.frames[0].roll_one).toEqual(3);
    expect(game.frames[1].roll_one).toEqual(1);
    expect(game.frames[2].roll_one).toEqual(2);
  });

});
