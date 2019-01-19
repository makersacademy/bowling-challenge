/* global describe, it, expect, beforeEach */

'use strict'

describe('Frame', () => {
  // let frame;

  // beforeEach( () => {
  //   frame = new Frame();
  // });

  describe('#roll()', () => {
    it('responds to .roll()', () => {
      var frame = new Frame()
      expect(frame.roll).toBeDefined()
    })
  })

  describe('#calculateFrameScore()', () => {
    it('responds to .calculateFrameScore()', () => {
      var frame = new Frame()
      expect(frame.calculateFrameScore).toBeDefined()
    })

    it('returns 0 after player rolls two gutter balls', () => {
      var frame = new Frame()
      frame.roll(0)
      frame.roll(0)
      console.log(frame)
      expect(frame.calculateFrameScore()).toEqual(0)
    })
  })
})
