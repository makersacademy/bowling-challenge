'use strict';

describe('Game', () => {
  let game;
  let frame;
  let frameClass;

  beforeEach(() => {
    game = new Game(frameClass);
    frameClass = jasmine.createSpy('frameClass');
    frame = jasmine.createSpyObj('frame', ['addRoll', 'isOver', 'isFinal', 'score']);
    spyOn(game, '_newFrame').and.returnValue(game.frames.push(frame))
  });

  xdescribe('addRoll', () => {
    it('adds roll to current frame', () => {
      game.addRoll(9);
      expect(frame.addRoll).toHaveBeenCalledWith(9);
    });

    it('adds both rolls to current frame', () => {
      game.addRoll(6);
      game.addRoll(2);

      expect(frame.addRoll).toHaveBeenCalledTimes(2);
      expect(frame.addRoll).toHaveBeenCalledWith(6);
      expect(frame.addRoll).toHaveBeenCalledWith(2);
    });
  });

  xdescribe('score', () => {
    it('calculates the total score of all frames', () => {
      spyOn(game, 'score').and.returnValues(5, 5)
      game.frames.push(frame)
      console.log(typeof game.score())
      console.log(game.score())
      game.score()
      expect(frame.score).toHaveBeenCalled();
    });
  });
});
