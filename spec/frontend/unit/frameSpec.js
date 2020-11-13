describe('Frame', () => {
  let frame

  beforeEach(() => {
    frame = new Frame()
  })

  describe('#record', () => {
    it('stores the value of a roll', () => {
      frame.store(2)
      expect(frame.total()).toEqual(2)
    })
  })
})