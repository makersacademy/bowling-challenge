const Bowling = require('../lib/Bowling.js');

describe('Bowling', () => {
  let game;

  beforeEach(() => {
    game = new Bowling();
  });

  it('Initial score is 0', () => {
    expect(game.getCurrentScore()).toEqual(0);
  });

  it('Game has frames', () => {
    expect(game.frames).toEqual([]);
  });

  it('Roll is stored in the current frame', () => {
    game.roll(5);

    expect(game.currentFrame).toContain(5);
  });

  it('Frame score is a sum of the rolls', () => {
    game.roll(4);
    game.roll(3);

    expect(game.getFrameScore()).toEqual(7);
  });

  it('Frame is complete when frame score is 10', () => {
    game.roll(4);
    game.roll(6);

    expect(game.isFrameComplete()).toEqual(true);
  });

  it('Player rolls strike', () => {
    game.roll(10);

    expect(game.isStrike()).toEqual(true);
  });

  it('Player rolls spare', () => {
    game.roll(4);
    game.roll(6);

    expect(game.isSpare()).toEqual(true);
  });

  it('Frame is complete and stored', () => {
    game.roll(4);
    game.roll(6);

    expect(game.frames).toContain([4, 6]);
  });
});
