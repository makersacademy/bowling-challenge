describe('Scorer', function () {
  var scorer

  beforeEach(function () {
    scorer = new Scorer()
  })

  it('creates empty array to hold roll values', function () {
    expect(scorer.rolls[1]).toEqual()
  })

  it('creates empty array to hold bonus values', function () {
    expect(scorer.bonus[1]).toEqual()
  })

  it('creates empty array to hold notes values', function () {
    expect(scorer.notes[1]).toEqual()
  })

  it('stores roll values', function () {
    scorer.storeScore(5, 1)
    expect(scorer.rolls[1]).toEqual(5)
  })

  it('calculates score from a spare', function () {
    scorer.storeScore(5, 1)
    scorer.storeScore(5, 2)
    scorer.storeScore(5, 3)
    scorer.bonusCalculator()
    expect(scorer.bonus[1]).toEqual(5)
  })

  it('calcualtes score from a strike within sequential frames', function () {
    scorer.storeScore(10, 1)
    scorer.storeScore(0, 2)
    scorer.storeScore(5, 3)
    scorer.storeScore(2, 4)
    scorer.bonusCalculator()
    expect(scorer.bonus[1]).toEqual(7)
  })

  it('calculates game total', function () {
    scorer.storeScore(5, 1)
    scorer.storeScore(4, 2)
    scorer.storeScore(5, 3)
    scorer.calculateTotalScore()
    expect(scorer.totalScore).toEqual(14)
  })

  it('adds two extra scores to rolls data structure when 19th is a strike', function () {
    scorer.storeScore(10, 19)
    scorer.storeScore(0, 20)
    scorer.storeScore(3, 21)
    scorer.storeScore(4, 22)
    scorer.bonusCalculator()
    scorer.calculateTotalScore()
    expect(scorer.totalScore).toEqual(17)
  })

  it('adds one extra score to rolls data structure when last frame is a spare', function () {
    scorer.storeScore(5, 19)
    scorer.storeScore(5, 20)
    scorer.storeScore(3, 21)
    scorer.bonusCalculator()
    scorer.calculateTotalScore()
    expect(scorer.totalScore).toEqual(13)
  })

  it('calculates correct maximum score of 300', function () {
    var i
    for (i = 1; i < 21; i++) {
      if (i % 2 > 0) {
        scorer.storeScore(10, i)
      } else {
        scorer.storeScore(0, i)
      }
    }
    scorer.storeScore(10, 21)
    scorer.storeScore(10, 22)
    scorer.bonusCalculator()
    scorer.calculateTotalScore()
    expect(scorer.totalScore).toEqual(300)
  })
})
