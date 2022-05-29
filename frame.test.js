const Frame = require('./frame')

describe('Frame', () => {
    it('allows a player to input each of their rolls', () => {
      let frame = new Frame();
      frame.input_roll(9)
      expect(frame.rolls).toEqual([9])
    })

    it('registers strike if first roll equals 10', () => {
        let frame = new Frame();
        frame.input_roll(10)
        expect(frame.strike()).toEqual(true)
    })

    it('does not register strike if first roll does not equal 10', () => {
        let frame = new Frame();
        frame.input_roll(9)
        expect(frame.strike()).toEqual(false)
    })

    it('does not register spare if first roll + second roll are less than 10', () => {
        let frame = new Frame();
        frame.input_roll(7)
        frame.input_roll(1)
        expect(frame.spare()).toEqual(false)
    })

    it('registers spare if first roll + second roll equal 10', () => {
        let frame = new Frame();
        frame.input_roll(5)
        frame.input_roll(5)
        expect(frame.spare()).toEqual(true)
    })

    it('does not allow a player to enter a roll higher than ten', () => {
        let frame = new Frame();
        expect(() => frame.input_roll(11)).toThrow('pick a lower number');    
    })

  })