/* eslint-env jasmine */
const Game = require('../src/game');

describe('Game', () => {
  let game;
  let frame;

  beforeEach(() => {
    frame = jasmine.createSpyObj('Frame', { yes: "yellow" });
    function Frame() { return frame; }
    game = new Game(Frame);
  });

  describe('Initialise', () => {
    it('initialises with 10 frames', () => {
      expect(game.board.length).toEqual(10);
    });

    it('it stores frames in the board', () => {
      expect(game.board).toContain(frame);
    });
  });
});
