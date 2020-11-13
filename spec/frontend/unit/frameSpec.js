describe('Frame', () => {
  let frame
  let i

  beforeEach(() => {
    frame = new Frame()
  })

  describe('#record', () => {
    it('stores the value of a roll', () => {
      frame.store(2)
      expect(frame.total()).toEqual(2)
    })

    it('records two rolls, and errors if called a third time', () => {
      for (i = 0; i < 2; i++) {
        frame.store(2)
      }
      expect(() => {
        frame.store(2)
      }).toThrowError('Two rolls already recorded')

      expect(frame.total()).toEqual(4)
    })
  })
})