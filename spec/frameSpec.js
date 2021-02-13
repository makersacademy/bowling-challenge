describe('Frame', function() {
  const frame = new Frame(2,5);

  describe('Instantiation', () => {
    beforeEach( () => {
    })

    it('should make a new instanct of class', () => {
      expect(frame).toBeInstanceOf(Frame)
    })
    it('should sum roll1 and roll2', () => {
      expect(frame).toBeInstanceOf(Frame)
      expect(frame.frameScore).toEqual(7)
    }) 
  })
})
