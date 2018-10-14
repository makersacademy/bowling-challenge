describe('score', function() {
  let score
  let completeGame
  beforeEach(function() {
    completeGame = []
    score = new Score(completeGame)
  })
  describe('initialization', function() {
    it('has game set to arg', function() {
      expect(score.game).toEqual(completeGame)
    })
  })

  describe('isStrike', function() {
    it('returns true if frame is strike', function() {
      expect(score.isStrike([10])).toEqual(true)
    })

    it('returns false if frame not strike', function() {
      expect(score.isStrike([3,7])).toEqual(false)
    })
  })

  describe('isSpare', function() {
    it('returns true if frame is spare', function() {
      expect(score.isSpare([4,6])).toEqual(true)
    })

    it('returns false if frame not spare', function() {
      expect(score.isSpare([3,6])).toEqual(false)
    })
  })

  describe('sum', function() {
    it('returns sum of rolls for a frame', function() {
      expect(score.sum([4,5])).toEqual(9)
      expect(score.sum([10])).toEqual(10)
    })
  })

  describe('result', function() {
    it('returns total score (no bonuses)', function() {
      var game = [[3,2],[3,4]]
      expect(score.result(game)).toEqual(12)
    })

    it('returns 300 for perfect game', function() {
      var game = [[10], [10], [10], [10], [10], [10], [10], [10], [10], [10, 10, 10]]
      expect(score.result(game)).toEqual(300)
    })
  })

  describe('spareBonus', function() {
    it('adds next roll to score', function() {
      let nextFrame = [4,5]
      expect(score.spareBonus(nextFrame)).toEqual(4)
    })
  })

  describe('strikeBonus', function() {
    it('adds next two rolls to score (nextFrame has 2 rolls)', function() {
      let restFrames = [[3,7], [10]]
      expect(score.strikeBonus(restFrames)).toEqual(10)
    })

    it('adds next two rolls to score (next frame is strike)', function() {
      let restFrames = [[10], [10]]
      expect(score.strikeBonus(restFrames)).toEqual(20)
    })
  })
})
