describe('Bowling', function () {

  it('should add to the list of frames', function () {
    bowling.addFrame(f)
    expect(bowling.frames).toContain(f)
  })
  it('should only add max 10 frames', function () {
    for (var i = 1; i <= 10; i++) { bowling.addFrame('frame') }
    expect(function () { bowling.addFrame('frame') }).toThrow('Max Frames Added')
  })
  describe('#countPoints', function () {
    it('counts regular points of all the frames', function () {
      expect(bowling.countPoints()).toEqual(84)
    })
  })
  describe('bonus points', function () {
    xit('counts total bonus points of the game', function () {
      expect(bowling.countTotalBonus()).toEqual(20)
    })
    it('counts strikeBonus', function () {
      expect(bowling.strikeBonus()).toEqual(20)
    })
  })
})
