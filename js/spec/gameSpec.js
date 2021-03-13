'use strict';

describe('Game', () => {
  let game;
  let frame;
  let frameClass;

  describe('addRoll', () => {
    beforeEach(() => {
      game = new Game(frameClass);
      frameClass = jasmine.createSpy('frameClass');
      frame = jasmine.createSpyObj('frame', ['addRoll', 'isOver']);
      spyOn(game, '_newFrame').and.returnValue(game.frames.push(frame))
    });

    it('adds roll to current frame', () => {
      game.addRoll(9);
      expect(frame.addRoll).toHaveBeenCalledWith(9);
    });

    it('adds both rolls to current frame', () => {
      game.addRoll(6)
      game.addRoll(2)

      expect(frame.addRoll).toHaveBeenCalledTimes(2);
      expect(frame.addRoll).toHaveBeenCalledWith(6);
      expect(frame.addRoll).toHaveBeenCalledWith(2);
    });
  });
});
