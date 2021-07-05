const Frame = require('../lib/Frame.js');

describe('Frame', () => {
  let frame;
  let game;

  beforeEach(() => {
    frame = new Frame();
    game = jasmine.createSpyObj('game', ['roll']);
  });

  // it('Initial score is 0', () => {
  //   expect(game.getCurrentScore()).toEqual(0);
  // });
});
