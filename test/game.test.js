const Game = require('../lib/game');
const Frame = require('../lib/frame');

jest.mock('../lib/frame');

const mockFrame = (status, times = 10) => {
  for (let i = 0; i < times; i++) {
    Frame.mockImplementationOnce(() => {
      return {
        score: 0,
        rolls: [],
        status: status,
        numRolls: 0,
        // eslint-disable-next-line no-unused-vars
        addRoll: jest.fn(x => null),
        // eslint-disable-next-line no-unused-vars
        addBonus: jest.fn(x => null)
      };
    });
  }
}

describe(Game, () => {
  let game;

  beforeAll(() => {
    mockFrame('active');
    game = new Game();
  });

  it('initialized game', () => {
    expect(Frame).toHaveBeenCalledTimes(10);

    const frames = game.frames;
    expect(frames.length).toEqual(10);
    expect(frames.every((frame) => frame.numRolls === 0)).toBe(true);
    expect(frames.every((frame) => frame.status === 'active')).toBe(true);
  });

  it("addFrame calls the first frame's addFrame method", () => {
    game.addRoll(5);
    expect(game.frames[0].addRoll).toHaveBeenCalledTimes(1);
  });

  it('addFrame calls addBonus once on the second frame and twice on the third frame', () => {
    mockFrame('completed', 2);
    game = new Game();

    game.addRoll(0);
    expect(game.frames[0].addBonus).not.toHaveBeenCalled();

    game.addRoll(1);
    expect(game.frames[0].addBonus).toHaveBeenCalledWith(1);
    expect(game.frames[1].addBonus).not.toHaveBeenCalled();

    game.addRoll(2);
    expect(game.frames[0].addBonus).toHaveBeenCalledWith(2);
    expect(game.frames[1].addBonus).toHaveBeenCalledWith(2);
    expect(game.frames[2].addBonus).not.toHaveBeenCalled();
  });
});
