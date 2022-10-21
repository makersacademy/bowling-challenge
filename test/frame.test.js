const Frame = require('../lib/frame');

describe('Frame', () => {
  describe('#addRolls', () => {
    it('adds 2 rolls to rolls array', () => {
      const frame = new Frame(6,1);
      frame.addRolls()
      expect(frame.frameArr()).toEqual([6,1])
    })
  })

  describe('#sumRolls', () => {
    it('sums rolls in a frame to return a raw score', () => {
      const frame = new Frame(6,1);
      frame.addRolls()
      expect(frame.sumRolls()).toEqual(7)
    })
  })

  describe('#isStrike', () => {
    it('returns true if sum = 10', () => {
      const frame = new Frame(9,1);
      frame.addRolls()
      expect(frame.isSpare()).toEqual(true)
    })
    it('returns false if sum != 10', () => {
      const frame = new Frame(6,1);
      frame.addRolls()
      expect(frame.isSpare()).toEqual(false)
    })
    it('returns false if first roll = 10', () => {
      const frame = new Frame(10,0);
      frame.addRolls()
      expect(frame.isSpare()).toEqual(false)
    })
  })

  describe('#isStrike', () => {
    it('returns first roll = 10', () => {
      const frame = new Frame(10,0);
      frame.addRolls()
      expect(frame.isStrike()).toEqual(true)
    })
    it('returns false if first roll != 10', () => {
      const frame = new Frame(9,1);
      frame.addRolls()
      expect(frame.isStrike()).toEqual(false)
    })
    it('returns false if second roll = 10', () => {
      const frame = new Frame(0,10);
      frame.addRolls()
      expect(frame.isStrike()).toEqual(false)
    })
  })
})