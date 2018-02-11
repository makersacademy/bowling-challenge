/* eslint-env jasmine */
const Game = require('../src/game');

describe('Game', () => {
  let game;
  let frame;

  beforeEach(() => {
    frame = jasmine.createSpyObj('Frame', { score: 10 });
    function Frame() { return frame; }
    spyOn(Game.prototype, 'setUpBoard').and.returnValue([frame]);
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

  describe('Score', () => {
    it('should return a score of 100 for 10 frames with 10', () => {
      expect(game.score()).toEqual(100);
    });

    it('checks the score of a frame when score is called', () => {
      game.score();

      expect(frame.score).toHaveBeenCalledWith();
    });

    it('when it has three frames, it gives the total score of those three', () => {
      game.score();

      expect(frame.score).toHaveBeenCalledWith();
    });

    it('should return a score of 300 for 10 frames with 30 score', () => {
      frame = jasmine.createSpyObj('Frame', { score: 30 });
      function Frame() { return frame; }
      game = new Game(Frame);

      expect(game.score()).toEqual(300);
    });
  });
});
