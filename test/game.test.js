const Game = require('../lib/game');
const Frame = require('../lib/frame');

jest.mock('../lib/frame');

describe(Game, () => {
  beforeAll(() => {
    Frame.mockImplementation(() => {
      return {
        getScore: () => 0,
        getRolls: () => [],
        getStatus: () => 'active',
        addRoll: jest.fn(x => null)
      };
    });
  });

  it('initialized game', () => {
    const game = new Game();
    expect(Frame).toHaveBeenCalledTimes(10);

    const frames = game.getFrames();
    expect(frames.length).toEqual(10);
    expect(frames.every((frame) => frame.getRolls().length === 0)).toBe(true);
    expect(frames.every((frame) => frame.getStatus() === 'active')).toBe(true);
  });

  it("addFrame calls the first frame's addFrame method", () => {
    const game = new Game();

    game.addRoll(5);
    expect(game.getFrames()[0].addRoll).toHaveBeenCalledTimes(1);
  });
});