describe("Scorecard", function () {

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it('Expect score to be 0 when game starts', function () {
    expect(scorecard.playerScore).toEqual(0)
  });

  it('Expect player can play a gutter game with 20 rolls of 0', function() {
    scorecard.addZero()
    scorecard.addZero()
    scorecard.addZero()
    scorecard.addZero()
    scorecard.addZero()
    scorecard.addZero()
    scorecard.addZero()
    scorecard.addZero()
    scorecard.addZero()
    scorecard.addZero()
    scorecard.addZero()
    scorecard.addZero()
    scorecard.addZero()
    scorecard.addZero()
    scorecard.addZero()
    scorecard.addZero()
    scorecard.addZero()
    scorecard.addZero()
    expect(scorecard.playerScore).toEqual(0)
  });

  it('Expect player can play a perfect game with 12 rolls of 10', function() {
    scorecard.addTen()
    scorecard.addTen()
    scorecard.addTen()
    scorecard.addTen()
    scorecard.addTen()
    scorecard.addTen()
    scorecard.addTen()
    scorecard.addTen()
    scorecard.addTen()
    scorecard.addTen()
    scorecard.addTen()
    scorecard.addTen()
    expect(scorecard.playerScore).toEqual(300)
  });

  describe('#addZero', function () {
    it('Expect score to be 0 when player enters 0', function () {
      scorecard.addZero()
      expect(scorecard.playerScore).toEqual(0)
    })
  })

  describe('#addOne', function () {
    it('Expect score to be 1 when player enters 1', function () {
      scorecard.addOne()
      expect(scorecard.playerScore).toEqual(1)
    })
  })

  describe('#addTwo', function () {
    it('Expect score to be 2 when player enters 2', function () {
      scorecard.addTwo()
      expect(scorecard.playerScore).toEqual(2)
    })
  })

  describe('#addThree', function () {
    it('Expect score to be 3 when player enters 3', function () {
      scorecard.addThree()
      expect(scorecard.playerScore).toEqual(3)
    })
  })

  describe('#addFour', function () {
    it('Expect score to be 4 when player enters 4', function () {
      scorecard.addFour()
      expect(scorecard.playerScore).toEqual(4)
    })
  })

  describe('#addFive', function () {
    it('Expect score to be 5 when player enters 5', function () {
      scorecard.addFive()
      expect(scorecard.playerScore).toEqual(5)
    })
  })

  describe('#addSix', function () {
    it('Expect score to be 6 when player enters 6', function () {
      scorecard.addSix()
      expect(scorecard.playerScore).toEqual(6)
    })
  })

  describe('#addSeven', function () {
    it('Expect score to be 7 when player enters 7', function () {
      scorecard.addSeven()
      expect(scorecard.playerScore).toEqual(7)
    })
  })

  describe('#addEight', function () {
    it('Expect score to be 8 when player enters 8', function () {
      scorecard.addEight()
      expect(scorecard.playerScore).toEqual(8)
    })
  })

  describe('#addNine', function () {
    it('Expect score to be 9 when player enters 9', function () {
      scorecard.addNine()
      expect(scorecard.playerScore).toEqual(9)
    })
  })

  describe('#addTen', function () {
    it('Expect score to be 10 when player enters 10', function () {
      scorecard.addTen()
      expect(scorecard.playerScore).toEqual(10)
    })
  })


});
