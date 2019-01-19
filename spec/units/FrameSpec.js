/* global describe, it, expect, beforeEach */

'use strict'

describe('Frame', () => {
  it('instance of Frame can be stored as a variable', () => {
    var frame = new Frame()
    expect(frame instanceof Frame).toBe(true)
  })

  it('responds to .roll()', () => {
    var frame = new Frame()
    expect(frame.roll).toBeDefined()
  })
})
