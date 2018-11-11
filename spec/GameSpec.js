describe('Game', function () {
  var game
  beforeEach(function () {
    game = new Game()
  })

  describe('#addRollToFrame', function () {
    it('sets a roll in the current frame', function () {
      game.addRollToFrame(4)

      expect(game.frames[0].rollOne).toEqual(4)
    })

    it('moves on to the next frame when current frame is complete', function () {
      game.addRollToFrame(4)
      game.addRollToFrame(4)
      game.addRollToFrame(4)

      expect(game.frames[0].rollOne).toEqual(4)
      expect(game.frames[0].rollTwo).toEqual(4)
      expect(game.frames[1].rollOne).toEqual(4)
    })
  })

  describe('#calcscores', function () {
    it('calculates the score of complete frames', function () {
      game.addRollToFrame(4)
      game.addRollToFrame(4)

      game.calcScores()

      expect(game.frames[0].score).toEqual(8)
    })

    it('calculates the score for frames with a spare', function () {
      game.addRollToFrame(5)
      game.calcScores()
      game.addRollToFrame(5)
      game.calcScores()
      game.addRollToFrame(5)
      game.calcScores()
      game.addRollToFrame(5)
      game.calcScores()

      expect(game.frames[0].score).toEqual(15)
    })

    it('calculates the score for frames with a strike', function () {
      game.addRollToFrame(10)
      game.calcScores()
      game.addRollToFrame(5)
      game.calcScores()
      game.addRollToFrame(5)
      game.calcScores()

      expect(game.frames[0].score).toEqual(20)
    })

    it('calculates the score when there are 2 strikes is a row', function () {
      game.addRollToFrame(10)
      game.calcScores()

      game.addRollToFrame(10)
      game.calcScores()

      game.addRollToFrame(5)
      game.calcScores()

      expect(game.frames[0].score).toEqual(25)
    })

    it('calculate the overall score', function () {
      game.addRollToFrame(5)
      game.calcScores()
      game.addRollToFrame(5)
      game.calcScores()
      game.addRollToFrame(5)
      game.calcScores()
      game.addRollToFrame(5)
      game.calcScores()

      expect(game.totalScore).toEqual(15)
    })
  })
})
