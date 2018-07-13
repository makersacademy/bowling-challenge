/*jshint esversion: 6 */

describe('Scorecard', () => {

  var DummyFrame = function(){};
  DummyFrame.prototype.knockedDown = function(){};
  DummyFrame.prototype.isActive = function(){};
  DummyFrame.prototype.rollNumber = function(){};

  beforeEach(() => {
    frame = new DummyFrame();
    spyOn(frame, 'knockedDown').and.returnValue(true);
    spyOn(Scorecard.prototype, 'generateFrame').and.returnValue(frame);
    scorecard = new Scorecard();
  });

  describe('default state', () => {
    it('starts with score 0',() => {
      expect(scorecard._score).toEqual(0);
    });

    it('starts on frame 1',() => {
      expect(scorecard._frameNumber).toEqual(1);
    });

    it('starts on roll 1',() => {
      expect(scorecard._rollNumber).toEqual(1);
    });

    it('starts with 10 pins up',() => {
      expect(scorecard._pinsDown).toEqual(0);
    });

    it('creates a new frame and sets it to the current frame', () => {
      expect(Scorecard.prototype.generateFrame).toHaveBeenCalled();
      expect(scorecard._currentFrame).toEqual(frame);
    });
  });

  describe('.displayScore', () => {
    it('displays the current score', () => {
      expect(scorecard.displayScore()).toEqual(0);
    });
  });

  describe('.roll', () => {
    it('adds the current roll to the frame', () => {
      scorecard.roll(2);
      expect(scorecard._currentFrame.knockedDown).toHaveBeenCalledWith(2);
    });
    it('moves to the next frame if frame is no longer active', () => {
      spyOn(frame, 'isActive').and.returnValue(false);
      spyOn(scorecard, 'nextFrame');
      scorecard.roll(2);
      expect(scorecard.nextFrame).toHaveBeenCalled();
    });
    it('updates the score', () => {
      spyOn(scorecard, 'updateScore');
      scorecard.roll(2);
      expect(scorecard.updateScore).toHaveBeenCalled();
    });
  });
});
