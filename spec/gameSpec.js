describe('game', function(){
  var game

  beforeEach(function(){
    game = new Game()
  })

  describe('instantiation', function(){
    it('round is set to 1', function(){
      expect(game.round).toEqual(1)
    })
    it('frame is set to 1', function(){
      expect(game.frame).toEqual(1)
    })
    it('round_score is set to 0', function(){
      expect(game.round_score).toEqual(0)
    })
    it('round is set to 1', function(){
      expect(game.total_score).toEqual(0)
    })
  })

  describe('play', function(){
    it('adds argument to round_score', function(){
      game.play(4)
      expect(game.round_score).toEqual(4)
    })
    it('increases roll by 1', function(){
      game.play(4)
      expect(game.roll).toEqual(2)
    })
  })

  describe('isRoundFinished', function(){
    it('returns true if round score 10', function(){
      game.play(10)
      expect(game.isRoundFinished()).toEqual(true)
    })
    it('returns true if roll greater than 2', function(){
      game.play(3)
      game.play(4)
      expect(game.isRoundFinished()).toEqual(true)
    })
  })

  describe('isStrike', function(){
    it('returns false if not strike', function(){
      game.play(4)
      game.play(6)
      expect(game.isStrike()).toEqual(false)
    })
    it('returns false if not strike', function(){
      game.play(10)
      expect(game.isStrike()).toEqual(true)
    })
  })

  describe('isSpare', function(){
    it('returns true if spare', function(){
      game.play(4)
      game.play(6)
      expect(game.isSpare()).toEqual(true)
    })
    it('returns false if strike', function(){
      game.play(10)
      expect(game.isSpare()).toEqual(false)
    })
    it('returns false if less than 10', function(){
      game.play(5)
      game.play(4)
      expect(game.isSpare()).toEqual(false)
    })
  })

  describe('endTurn', function(){
    it('does nothing if frame not finished', function(){
      game.play(4)
      game.endTurn()
      expect(game.frame).toEqual(1)
    })

    it('updates frame and score if frame finished', function(){
      game.play(4)
      game.play(5)
      game.endTurn()
      expect(game.frame).toEqual(2)
      expect(game.total_score).toEqual(9)
      expect(game.round_score).toEqual(0)
      expect(game.frame).toEqual(2)
      expect(game.roll).toEqual(1)
    })
  })

  describe('endTurn', function(){
    beforeEach(function(){
      for(var i = 1; i < 10; i++){
        game.play(4)
        game.play(5)
        game.endTurn()
      }
    })
    it('returns true if game finished', function(){
      game.play(4)
      game.play(5)
      game.endTurn()
      expect(game.isEndGame()).toEqual(true)
    })

    it('returns false if game not finshed', function(){
      expect(game.isEndGame()).toEqual(false)
    })
  })

  describe('bowlingAPI', function(){
    it('returns an object for use with Table', function(){
      game.play(4)
      game.endTurn()
      var api = game.bowlingAPI()
      expect(api.frame).toEqual(1)
      expect(api.roll).toEqual(2)
      expect(api.knocked).toEqual(4)
      expect(api.score).toEqual(0)
      expect(api.notes).toEqual("test")
    })
  })
})
