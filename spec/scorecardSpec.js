'use strict';

describe (Scorecard, () => {
  let scorecard;

  beforeEach(() => {
    scorecard = new Scorecard();
  });

  it('returns an empty scorecard array', () => {
    expect(scorecard.game).toEqual([])
  });

  it('when initiated, the first frame should have index 0', () => {
    expect(scorecard.frameNum).toEqual(0);
  });

  it('should be able to move to the next frame', () => {
    scorecard.moveToNextFrame();
    expect(scorecard.frameNum).toEqual(1);
  })
});