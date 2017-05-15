describe('Bowling', function () {

  var bowlingGame;

  beforeEach(function () {
    bowlingGame = new Bowling ();
  })

  describe('Games', function () {
    it('can be created', function () {
      expect(bowlingGame instanceof Bowling).toBe(true)
    })
  })

  describe('framesToPlay function', function () {
    it('returns unfinished frames', function () {
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

})
