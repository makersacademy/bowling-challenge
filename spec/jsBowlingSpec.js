describe('Bowling', function () {
  let game

  beforeEach(function () {
    game = new Bowling()
  })

  describe('New instance of class', () => {
    it('should be able to set up a new game', () => {
      expect(game).toBeInstanceOf(Bowling)
    })

    it('should be initialized with a frame count of 0', () => {
      expect(game.frameCount).toEqual(1)
    })

    it('should be initialized with an empty array for storing frame scores', () => {
      expect(game.frameArray).toEqual([])
    })

    it('should be initialized with a currentScore variable set to 0', () => {
      expect(game.currentScore).toEqual(0)
    })
  })

  describe('#getCurrentScore', () => {
    it('should display the current score to the player', () => {
      expect(game.getCurrentScore()).toEqual(0)
      game.currentScore = 17
      expect(game.getCurrentScore()).toEqual(17)
    })
  })

  describe('#getCurrentFrame', () => {
    it('should display the current frame to the player', () => {
      expect(game.getCurrentFrame()).toEqual(1)
      game.frameCount = 8
      expect(game.getCurrentFrame()).toEqual(8)
    })
  })

  describe('#calculateTotal', () => {
    it('should calculate the total of the frameArray', () => {
      game.frameArray = [[1, 2], [3, 4], [5, 6]]
      game.calculateTotal()
      expect(game.currentScore).toEqual(21)
    })
  })

  describe('#addScores', () => {
    it('should add the rolls of a frame to the frameArray', () => {
      game.addScores(2, 1)
      expect(game.frameArray).toEqual([[2, 1]])
    })

    it('should be able to add multiple frames to the frameArray', () => {
      game.addScores(2, 1)
      game.addScores(3, 2)
      expect(game.frameArray).toEqual([[2, 1], [3, 2]])
    })

    it('should add zero as a default roll_two parameter if nothing is passed in (STRIKE)', () => {
      game.addScores(10)
      expect(game.frameArray).toEqual([[10, 0]])
    })

    it('should increment the frameCount by one', () => {
      game.addScores(10)
      expect(game.getCurrentFrame()).toEqual(2)
      game.addScores(10)
      game.addScores(10)
      expect(game.getCurrentFrame()).toEqual(4)
    })
  })

  describe('#tenthFrame', () => {
    it('should add the rolls of a frame to the frameArray', () => {
      game.tenthFrame(2, 1)
      expect(game.frameArray).toEqual([[2, 1]])
    })

    it('should be able to pass in three agruments if the last frame is a STRIKE', () => {
      game.tenthFrame(10, 10, 10)
      expect(game.frameArray).toEqual([[10, 20]])
    })
  })

  describe('#spareLogic', () => {
    it('should add the first roll of this frame to the last frame if it was a SPARE', () => {
      game.addScores(8, 2)
      game.addScores(5, 1)
      game.spareLogic()
      expect(game.frameArray).toEqual([[8, 2, 5], [5, 1]])
    })

    it('should not work if the last frame was a STRIKE', () => {
      game.addScores(10)
      game.addScores(5, 1)
      game.spareLogic()
      expect(game.frameArray).toEqual([[10, 0], [5, 1]])
    })

    it('should work multiple times', () => {
      game.addScores(8, 2)
      game.addScores(5, 1)
      game.spareLogic()
      game.addScores(5, 5)
      game.addScores(1, 7)
      game.spareLogic()
      expect(game.frameArray).toEqual([[8, 2, 5], [5, 1], [5, 5, 1], [1, 7]])
    })

    it('should work subsequent times', () => {
      game.addScores(8, 2)
      game.addScores(8, 2)
      game.spareLogic()
      game.addScores(8, 2)
      game.spareLogic()
      game.addScores(7, 3)
      game.spareLogic()
      game.addScores(7, 3)
      game.spareLogic()
      expect(game.frameArray).toEqual([[8, 2, 8], [8, 2, 8], [8, 2, 7], [7, 3, 7], [7, 3]])
    })
  })

  describe('#strikeLogic', () => {
    it('should add the next two rolls to the last frame if it was a STRIKE', () => {
      game.addScores(10)
      game.addScores(5, 1)
      game.strikeLogic()
      expect(game.frameArray).toEqual([[10, 5, 1], [5, 1]])
    })

    it('should not work if the last frame was a SPARE', () => {
      game.addScores(8, 2)
      game.addScores(5, 1)
      game.strikeLogic()
      expect(game.frameArray).toEqual([[8, 2], [5, 1]])
    })

    it('should work multiple times', () => {
      game.addScores(10)
      game.addScores(5, 1)
      game.strikeLogic()
      game.addScores(10)
      game.addScores(1, 7)
      game.strikeLogic()
      expect(game.frameArray).toEqual([[10, 5, 1], [5, 1], [10, 1, 7], [1, 7]])
    })

    it('should work subsequent times and handle adding two strikes to a STRIKE frame', () => {
      game.addScores(10)
      game.addScores(10)
      game.strikeLogic()
      game.addScores(10)
      game.strikeLogic()
      game.addScores(10)
      game.strikeLogic()
      game.addScores(10)
      game.strikeLogic()
      expect(game.frameArray).toEqual([[10, 10, 10], [10, 10, 10], [10, 10, 10], [10, 10, 10], [10, 0]])
    })
  })

  describe('#isPerfectGame', () => {
    it('should be able to calculate a PERFECT SCORE game', () => {
      game.addScores(10)
      for (let i = 0; i < 8; i++) {
        game.addScores(10)
        game.strikeLogic()
      }
      game.tenthFrame(10, 10, 10)
      console.log(game.frameArray)
      game.calculateTotal()
      expect(game.isPerfectGame()).toEqual('YOU SCORED A PERFECT GAME!!!')
      console.log(game.getCurrentScore())
    })

    it('should return a message to player if the game is not a PERFECT SCORE game', () => {
      game.addScores(10)
      for (let i = 0; i < 8; i++) {
        game.addScores(10)
        game.strikeLogic()
      }
      game.tenthFrame(10, 9, 1)
      expect(game.isPerfectGame()).toEqual('Sorry. No perfect score this time.')
    })
  })

  describe('#isGutterGame', () => {
    it('should be able to tell the player if they have scored a gutter game', () => {
      game.addScores(0)
      for (let i = 0; i < 8; i++) {
        game.addScores(0)
      }
      game.tenthFrame(0)
      game.calculateTotal()
      expect(game.isGutterGame()).toEqual("Wow, maybe bowling isn't for you. You rolled a gutter game. I know I can't believe it either.")
    })

    it('should tell the user if they have not scored a gutter game', () => {
      game.addScores(2, 6)
      for (let i = 0; i < 8; i++) {
        game.addScores(1, 5)
      }
      game.calculateTotal()
      expect(game.isGutterGame()).toEqual("You didn't score a gutter game. Good for you.")
    })
  })
})
