/* global describe, it, expect, beforeEach */

'use strict'

describe('Scorecard', () => {
  it('instance of Scorecard can be stored as a variable', () => {
    var scorecard = new Scorecard();
    expect(scorecard instanceof Scorecard).toBe(true)
  })
})
