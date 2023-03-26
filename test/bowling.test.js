const Bowling = require('../lib/bowling.js')

describe('Bowling', () => {

  describe('test games', () => {

    beforeEach(() => {
      this.bowling = new Bowling
    });

    it('can calculate two rolls', () => {
      this.bowling.roll(3)
      this.bowling.roll(4)
      
      expect(this.bowling.total_score()).toBe(7)
      console.log(this.bowling.round_scores)
    });

    it('can calculate a strike and bonus', () => {
      this.bowling.roll(10)
      this.bowling.roll(3)
      this.bowling.roll(4)

      expect(this.bowling.total_score()).toBe(24)
      console.log(this.bowling.round_scores)
    });

    it('can calculate a spare and bonus', () => {
      this.bowling.roll(5)
      this.bowling.roll(5)
      this.bowling.roll(3)
      this.bowling.roll(2)

      expect(this.bowling.total_score()).toBe(18)
      console.log(this.bowling.round_scores)
    });

    it('scores a perfect game', () => {
      this.bowling.roll(10)
      this.bowling.roll(10)
      this.bowling.roll(10)
      this.bowling.roll(10)
      this.bowling.roll(10)
      this.bowling.roll(10)
      this.bowling.roll(10)
      this.bowling.roll(10)
      this.bowling.roll(10)
      this.bowling.roll(10)
      this.bowling.roll(10)
      this.bowling.roll(10)

      expect(this.bowling.total_score()).toBe(300)
      console.log(this.bowling.round_scores)
    })

    it('gutter game', () => {
      this.bowling.roll(0)
      this.bowling.roll(0)
      this.bowling.roll(0)
      this.bowling.roll(0)
      this.bowling.roll(0)
      this.bowling.roll(0)
      this.bowling.roll(0)
      this.bowling.roll(0)
      this.bowling.roll(0)
      this.bowling.roll(0)
      this.bowling.roll(0)
      this.bowling.roll(0)
      this.bowling.roll(0)
      this.bowling.roll(0)
      this.bowling.roll(0)
      this.bowling.roll(0)
      this.bowling.roll(0)
      this.bowling.roll(0)
      this.bowling.roll(0)
      this.bowling.roll(0)

      expect(this.bowling.total_score()).toBe(0)
      console.log(this.bowling.round_scores)
    })

    it('scores the example game', () => {
      this.bowling.roll(1)
      this.bowling.roll(4)
      this.bowling.roll(4)
      this.bowling.roll(5)
      this.bowling.roll(6)
      this.bowling.roll(4)
      this.bowling.roll(5)
      this.bowling.roll(5)
      this.bowling.roll(10)
      this.bowling.roll(0)
      this.bowling.roll(1)
      this.bowling.roll(7)
      this.bowling.roll(3)
      this.bowling.roll(6)
      this.bowling.roll(4)
      this.bowling.roll(10)
      this.bowling.roll(2)
      this.bowling.roll(8)
      this.bowling.roll(6)
      
      expect(this.bowling.total_score()).toBe(133)
      console.log(this.bowling.round_scores)
    });

    it('test', () => {
      this.bowling.roll(10)
      expect(this.bowling.total_score()).toBe(NaN)
      console.log(this.bowling.round_scores)
      this.bowling.roll(3)
      this.bowling.roll(4)
      expect(this.bowling.total_score()).toBe(24)
      console.log(this.bowling.round_scores)
    })
  });
});
