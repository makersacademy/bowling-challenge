/* global describe, it, expect, beforeEach */
'use strict'

describe('Scorecard', () => {
  let scorecard;
  let frame;

  beforeEach( () => {
    scorecard = new Scorecard();
    frame = new Frame();
    frame.roll(0)
    frame.roll(0)
  });

  describe('#non gutter frames', () => {
    it('calculates the score as 1 after 2 frames', () => {
      let frameOne = new Frame();
      frameOne.roll(0)
      frameOne.roll(1)
      scorecard.recordFrameScore(frameOne)
      scorecard.calculateTotal()
      expect(scorecard._score).toEqual(1)
    })
  })

  describe('#gutter game', () => {
    it('calculates the score as 0 after 10 gutter frames', () => {
      var times = 10;
      for(var i = 0; i < times; i++) {
        scorecard.recordFrameScore(frame)
      }
    scorecard.calculateTotal()
    expect(scorecard._score).toEqual(0)
    })
  })
})
