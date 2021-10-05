'use strict';

describe (Scorecard, () => {
  let scorecard;
  let frame;

  beforeEach(() => {
    frame = jasmine.createSpyObj('frame', ['storePins', 'isComplete','showStrikeBonus', 'showSpareBonus', 'addStrikeBonus', 'addSpareBonus', 'isStrike', 'isSpare', 'calculateTotal', 'lastFrameCheck']);
    scorecard = new Scorecard(frame);
  });

  it('returns an empty scorecard array', () => {
    expect(scorecard.frames).toEqual([frame])
  });

  it('when initiated, the first frame should have index 0', () => {
    expect(scorecard.currentFrame).toEqual(0);
  });

  it('should be able to move to the next frame', () => {
    scorecard.moveToNextFrame();
    expect(scorecard.currentFrame).toEqual(1);
  });

  describe('should create a new frame', () => {
    it('after a strike', () => {
      scorecard.addPins(10);
      frame.isComplete.and.callFake(() => {
        return true;
      });
      scorecard.addPins(1);
      expect(scorecard.currentFrame).toEqual(1);
    });

    it('after two rolls that total less than 10', () => {
      scorecard.addPins(5);
      scorecard.addPins(4);
      frame.isComplete.and.callFake(() => {
        return true;
      });
      scorecard.addPins(4);
      expect(scorecard.currentFrame).toEqual(1);
    });
  });
});