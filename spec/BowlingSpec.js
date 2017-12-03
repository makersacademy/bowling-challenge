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
  describe('#spareBonus', function () {
    it('counts spare bonus points of the game', function () {
      f4 = new Frame (3, 7)
      f5 = new Frame (4, 0)
      expect(bowling.spareBonus()).toEqual(4)
    })
  })
  describe('#strikeBonus', function () {
    it('counts strikeBonus', function () {
      f5 = new Frame (10, 0)
      f6 = new Frame (1, 0)
      f7 = new Frame (1, 0)
      expect(bowling.strikeBonus()).toEqual(2)
    })
    it('unless player rolls another strike', function () {
      f5 = new Frame (5, 4)
      f6 = new Frame (10, 0)
      f7 = new Frame (1, 0)
      f8 = new Frame (1, 0)
      expect(bowling.strikeBonus()).toEqual(2)
      expect(bowling._isStrikeInARow(f6)).toBe(false)
    })
  })
  describe('#totalGamePoints', function () {
    it('should return total points and bonus for the game', function () {
      f5 = new Frame (10, 0)
      f6 = new Frame (5, 5)
      f7 = new Frame (1, 0)
      f7 = new Frame (1, 0) // totalPoints 22+ spareBonus 1 + strikeBonus 11 = 34
    expect(bowling.totalGamePonts()).toEqual(34)
    })
  })
})
