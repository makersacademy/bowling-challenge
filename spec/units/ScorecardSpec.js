/* global describe, it, expect, beforeEach */

'use strict'

describe('Scorecard', () => {
  let scorecard;
  let frame;

  beforeEach( () => {
    scorecard = new Scorecard();
    frame = new Frame();
    frame.roll(5)
    frame.roll(5)
  });

  describe('#recordFrameScore()', () => {
    it('will not allow more than 10 frames to be recorded', () => {
      var times = 10;
      for(var i = 0; i < times; i++) {
        scorecard.recordFrameScore(frame)
      }
      var error = 'Cannot record frame: 10 frames already recorded'
      expect(function() { scorecard.recordFrameScore(frame) }).toThrow(new Error(error))
    })
  })

  describe('#calculateTotal()', () => {
    it('calculates the total score of the game', () => {
      scorecard.recordFrameScore(frame)
      scorecard.calculateNormalPoints()
      expect(scorecard._normalPoints).toEqual(10)
    })

//     it('calculates score after 2 frames where the 1st frame was a Spare', () => {
//       scorecard.recordFrameScore(frame)
//       let frameTwo = new Frame();
//       frameTwo.roll(5)
//       frameTwo.roll(5)
//       scorecard.calculateTotal()
//       expect(scorecard._score).toEqual(25)
//     })
  })
})
