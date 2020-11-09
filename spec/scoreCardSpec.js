'use strict';

describe('Scorecard', () => {
  var scorecard;

  beforeEach( () => {
    scorecard = new Scorecard();
  });

  it('starts with 1 frame object',  () =>  {
    expect(scorecard.frames.length).toBe(1);
    expect(scorecard.frames[0]).toBeInstanceOf(Frame);
  });

});