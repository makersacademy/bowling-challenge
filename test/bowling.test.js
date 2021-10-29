const Bowling = require('../lib/bowling.js')

describe('Bowling', () => {

  describe('test games', () => {

    beforeEach(() => {
      this.bowling = new Bowling
    })

    it('can calculate two rolls', () => {
      this.bowling.roll(3)
      this.bowling.roll(4)
      
      expect(this.bowling.score).toBe(7)
    })

  })

});