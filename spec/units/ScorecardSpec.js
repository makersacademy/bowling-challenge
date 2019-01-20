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

  describe('#recordFrameScore()', () => {
    it('records the score of a frame', () => {
      scorecard.recordFrameScore(frame)
      expect(scorecard._frameScores).toEqual([[0, 0]])
    })
  })

  describe('#calculateTotal()', () => {
    it('calculates the total score of the game', () => {
      scorecard.recordFrameScore(frame)
      scorecard.calculateTotal()
      expect(scorecard._score).toEqual(0)
    })
  })
})
