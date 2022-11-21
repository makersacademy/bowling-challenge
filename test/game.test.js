const Game = require('../lib/game.js');

describe('Game unit', () => {
  it('Check game instant', () => {
    const game = new Game();
    expect(game instanceof Game).toEqual(true);
  })

  it('Check game result', () => {
    const game = new Game();
    const fake_frame1 = {getFrameScore: () => 10};
    game.addFrame(fake_frame1);
    const fake_frame2 = {getFrameScore: () => 15};
    game.addFrame(fake_frame2);
    const fake_frame3 = {getFrameScore: () => 15};
    game.addFrame(fake_frame3);
    expect(game.getGameResult()).toEqual(40);
  })
});