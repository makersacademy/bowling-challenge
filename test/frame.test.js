const Frame = require('../lib/frame');

const frame = new Frame();

describe('Frame', () => {
  describe('#addRolls', () => {
    it('adds 2 rolls to rolls array', () => {
      const frame = new Frame(1,6);
      frame.addRolls()
      expect(frame.frameArr()).toEqual([1,6])
    })
  })
})