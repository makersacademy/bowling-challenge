describe('Bowling', function () {

  var myGlobal
  var bowling
  var f
  var f2
  var f3
  var f4
  var f5
  var f6
  var f7
  var f8
  var f9
  var f10

  beforeEach(function() {
    f2 = new Frame (3, 4)
    f3 = new Frame (5, 5)

    bowling = new Bowling()
  })

  it('should add to the list of frames', function () {
    bowling.addFrame(f)
    expect(bowling.frames).toContain(f)
  })
  it('should only add max 10 frames', function () {
    var f = new Frame ('frame2')
    for (var i = 1; i <= 11; i++) { bowling.addFrame('frame') }
    expect(function () { bowling.addFrame(f) }).toThrow('Max Frames Added')
  })
  describe('#countPoints', function () {
    it('counts regular points of all the frames', function () {
      f2 = new Frame (3, 4)
      f3 = new Frame (5, 5)
      bowling.addFrame(f2)
      bowling.addFrame(f3)
      bowling.countPoints()
      expect(bowling.totalPoints).toEqual(17)
    })
  })
  describe('bonus points', function () {
    xit('counts total bonus points of the game', function () {
      expect(bowling.countTotalBonus()).toEqual(20)
    })
    xit('counts strikeBonus', function () {
      expect(bowling.strikeBonus()).toEqual(20)
    })
  })
})
