import Game from '../src/game.js';

describe('Game', () => {
  let game;
  let frame;
  describe('Adding scores of a roll', () => {
    beforeEach(() => {
      game = new Game();
      // frame = jasmine.createSpyObj('frame', ['add']);
    });
    it('can add a roll', () => {
      game.add(3);
      // expect(frame.add).toHaveBeenCalledWith(3);
      expect(game.scores).toEqual([[3]]);
    });
    it('can add two rolls', () => {
      game.add(3);
      game.add(5);
      // expect(frame.add).toHaveBeenCalledWith(3);
      expect(game.scores).toEqual([[3, 5]]);
    });
  });
});
