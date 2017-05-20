describe('Bowling', function () {

  var bowlingGame;

  beforeEach(function () {
    setUpHTMLFixture()
    bowlingGame = new Bowling ();
  })

  describe('Games', function () {
    it('can be created', function () {
      expect(bowlingGame instanceof Bowling).toBe(true)
    })
    it('initial score is 0', function () {
      expect(bowlingGame.score()).toEqual(0)
    })
  })

  describe('framesToPlay function', function () {
    it('returns unplayed frames', function () {
      expect(bowlingGame.framesToPlay().length).toEqual(10)
      var finishedFrameOne = bowlingGame._frames[0]
      var finishedFrameTwo = bowlingGame._frames[1]
      finishedFrameOne._finished = true
      finishedFrameTwo._finished = true
      expect(bowlingGame.framesToPlay().indexOf(finishedFrameOne)).toEqual(-1)
      expect(bowlingGame.framesToPlay().indexOf(finishedFrameTwo)).toEqual(-1)
      expect(bowlingGame.framesToPlay().length).toEqual(8)
    })
  })

  describe('calculates', function () {
    it('spare score correctly', function () {
      expect(bowlingGame.score()).toEqual(0)
      bowlingGame.roll(5)
      bowlingGame.roll(5)
      bowlingGame.roll(5)
      bowlingGame.roll(5)
      bowlingGame.roll(0)
      bowlingGame.roll(0)
      expect(bowlingGame.score()).toEqual(25)
    })
    it('spare score correctly', function () {
      expect(bowlingGame.score()).toEqual(0)
      bowlingGame.roll(5)
      bowlingGame.roll(5)
      bowlingGame.roll(5)
      bowlingGame.roll(5)
      bowlingGame.roll(5)
      bowlingGame.roll(0)
      bowlingGame.roll(0)
      bowlingGame.roll(0)
      expect(bowlingGame.score()).toEqual(35)
    })
    it('spare score correctly', function () {
      expect(bowlingGame.score()).toEqual(0)
      for (var i=0; i<20; i++) {
        bowlingGame.roll(4)
      }
      expect(bowlingGame.score()).toEqual(80)
    })
    it('spare score correctly', function () {
      expect(bowlingGame.score()).toEqual(0)
      for (var i=0; i<20; i++) {
        bowlingGame.roll(5)
      }
      expect(bowlingGame.score()).toEqual(145)
    })
    it('all gutter score correctly', function () {
      expect(bowlingGame.score()).toEqual(0)
      for (var i=0; i<12; i++) {
        bowlingGame.roll(0)
      }
      expect(bowlingGame.score()).toEqual(0)
    })
    it('spare score correctly', function () {
      expect(bowlingGame.score()).toEqual(0)
      for (var i=0; i<12; i++) {
        bowlingGame.roll(10)
      }
      expect(bowlingGame.score()).toEqual(300)
    })
    it('spare score correctly', function () {
      expect(bowlingGame.score()).toEqual(0)
      for (var i=0; i<11; i++) {
        bowlingGame.roll(10)
      }
      bowlingGame.roll(0)
      expect(bowlingGame.score()).toEqual(290)
    })

  })

})
