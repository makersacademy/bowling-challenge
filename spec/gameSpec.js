"use strict"

describe('Game', function() {
  let game;
  let frame;
  let frameTwo;
  
  beforeEach(function() {

    frame = jasmine.createSpyObj('frame', ['update', 'isFinished', 'isSpareOrStrike']);
    frameTwo = jasmine.createSpyObj('frame', ['update', 'isFinished', 'isSpareOrStrike']);
    game = new Game();
    // To isolate unit tests:
    game._frames = [];
    for(let i = 1; i <=NUMBER_OF_FRAMES; i++) {
      game._frames.push(frame);
    }
    // game._frames has been cleared of Frame objects and replaced with spy objects
  });

  describe('bowl', function() {
    it('updates the the current frame', function() {
      frame.isFinished.and.returnValue(false)
      game.bowl(6);
      expect(game._currentFrame().update).toHaveBeenCalledWith(6);  
    });

    it('starts new frame if current one is finished', function() {
      frame.isFinished.and.returnValue(true)
      game.bowl(10);
      expect(game._frameCounter).toEqual(1);
    });

    it('throws error if score is greater than 10', function() {
      expect(function() { game.bowl(11)} ).toThrowError('Score must be between ' + MIN_SCORE + ' and ' + MAX_SCORE + '!')
    });

    it('throws error if score is less than 0', function() {
      expect(function() { game.bowl(-1)} ).toThrowError('Score must be between ' + MIN_SCORE + ' and ' + MAX_SCORE + '!')
    });

  });
});