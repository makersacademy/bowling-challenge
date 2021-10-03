'use strict';

describe (Scorecard, () => {
  let scorecard;
  let frame;

  beforeEach(() => {
    frame = jasmine.createSpyObj('frame', ['storePins', 'isComplete']);
    scorecard = new Scorecard(frame);
  });

  it('returns an empty scorecard array', () => {
    expect(scorecard.frames).toEqual([frame])
  });

  it('when initiated, the first frame should have index 0', () => {
    expect(scorecard.frameNum).toEqual(0);
  });

  it('should be able to move to the next frame', () => {
    scorecard.moveToNextFrame();
    expect(scorecard.frameNum).toEqual(1);
  });

  it('should create a new frame after a strike', () => {
    scorecard.addPins(10);
    frame.isComplete.and.callFake(() => {
      return true;
    })
    scorecard.addPins(1);
    expect(scorecard.frameNum).toEqual(1);
  });

  it('should create a new frame after two rolls that total less than 10', () => {
    scorecard.addPins(5);
    scorecard.addPins(4);
    frame.isComplete.and.callFake(() => {
      return true;
    })
    scorecard.addPins(4);
    expect(scorecard.frameNum).toEqual(1);
  });
});