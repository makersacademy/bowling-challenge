describe('NormaliseScoreFrame', function(){

  describe('roll 1 is a strike', function(){
    it('returns an array with score 10 and null, and the value is true', function(){
      var framesSoFar = NormaliseScoreFrame([[], true], 10)
      expect(framesSoFar[0]).toEqual([10, null])
      expect(framesSoFar[1]).toEqual(true)
    })
  })

  describe('roll 1 is not a strike', function(){
    it('returns an array with the score and the value is false', function(){
      var framesSoFar = NormaliseScoreFrame([[], true], 3)
      expect(framesSoFar[0]).toEqual([3])
      expect(framesSoFar[1]).toEqual(false)
    })
  })

  describe('roll 2 is a spare', function(){
    it('returns an array with score 10 and null, and the value is true', function(){
      var framesSoFar = NormaliseScoreFrame([[0], false], 10)
      expect(framesSoFar[0]).toEqual([0,10])
      expect(framesSoFar[1]).toEqual(true)
    })
  })

  describe('roll 2 is not a spare', function(){
    it('returns an array with the score and the value is false', function(){
      var framesSoFar = NormaliseScoreFrame([[4], false], 3)
      expect(framesSoFar[0]).toEqual([4,3])
      expect(framesSoFar[1]).toEqual(true)
    })
  })

  describe('roll 1 is a strike in frame 2', function(){
    it('returns an array with score 10 and null, and the value is true', function(){
      var framesSoFar = NormaliseScoreFrame([[7, 2], true], 10)
      expect(framesSoFar[0]).toEqual([7, 2, 10, null])
      expect(framesSoFar[1]).toEqual(true)
    })
  })

  describe('roll 1 is not a strike in frame 2', function(){
    it('returns an array with the score and the value is false', function(){
      var framesSoFar = NormaliseScoreFrame([[4, 6], true], 3)
      expect(framesSoFar[0]).toEqual([4, 6, 3])
      expect(framesSoFar[1]).toEqual(false)
    })
  })

})

describe('NormaliseScores', function(){

  describe('actual score list turns into regular score list', function(){
    it('returns a score list with null after a stike', function(){
      scoresList = [2, 5, 10, 0, 10]
      expect(NormaliseScores(scoresList)).toEqual([2, 5, 10, null, 0, 10])
    })
  })
})
