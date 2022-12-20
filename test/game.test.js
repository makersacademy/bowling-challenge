const Game = require('../lib/game');
const Frame = require('../lib/frame');

jest.mock('../lib/frame');

mockFrame = (status) => {
  Frame.mockImplementation(() => {
    return {
      getScore: () => 0,
      getRolls: () => [],
      getStatus: () => status,
      addRoll: jest.fn(x => null),
      addBonus: jest.fn(x => null)
    };
  });
}

describe(Game, () => {
  let game;

  beforeAll(() => {
    mockFrame('active');
    game = new Game();
  });

  it('initialized game', () => {
    expect(Frame).toHaveBeenCalledTimes(10);

    const frames = game.getFrames();
    expect(frames.length).toEqual(10);
    expect(frames.every((frame) => frame.getRolls().length === 0)).toBe(true);
    expect(frames.every((frame) => frame.getStatus() === 'active')).toBe(true);
  });

  it("addFrame calls the first frame's addFrame method", () => {
    game.addRoll(5);
    expect(game.getFrames()[0].addRoll).toHaveBeenCalledTimes(1);
  });

  it('addFrame calls addBonus once on the second frame and twice on the third frame', () => {
    mockFrame('completed');
    game = new Game();

    game.addRoll(0);
    expect(game.getFrames()[0].addBonus).not.toHaveBeenCalled();

    game.addRoll(1);
    expect(game.getFrames()[0].addBonus).toHaveBeenCalledWith(1);
    expect(game.getFrames()[1].addBonus).not.toHaveBeenCalled();

    game.addRoll(2);
    expect(game.getFrames()[0].addBonus).toHaveBeenCalledWith(2);
    expect(game.getFrames()[1].addBonus).toHaveBeenCalledWith(2);
    expect(game.getFrames()[2].addBonus).not.toHaveBeenCalled();
  });
});