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

    it('will not allow more than 10 frames to be recorded', () => {
      var times = 10;
      for(var i=0; i < times; i++){
        scorecard.recordFrameScore(frame)
      }
      var error = 'Cannot record frame: 10 frames already recorded'
      expect(function() { scorecard.recordFrameScore(frame) }).toThrow(new Error(error))
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
