describe('Scorecard', function () {
  beforeEach(function () {
    sc = new Scorecard()
  })

  it('should be able to enter score', function () {
    sc.enterScore(5)
    expect(sc.scores[0]).toEqual(5)
  })

  it('should automatically pad a frame to two rolls if the first is a strike', function () {
    sc.enterScore(10)
    expect(sc.scores).toEqual([10, '-'])
  })

  it('doesn\'t add padding in the tenth frame', function () {
    for (var i = 1; i <= 10; i++) { sc.enterScore(10) }
    expect(sc.scores).toEqual([10, '-', 10, '-', 10, '-', 10, '-', 10, '-',
      10, '-', 10, '-', 10, '-', 10, '-', 10])
  })

  it('doesn\'t continue to enter scores once game is finished', function() {
    for (var i = 1; i <= 13; i++) { sc.enterScore(10) }
    expect(sc.scores.length).toEqual(21)
  })

    it('doesn\'t continue to enter scores once game is finished', function() {
      for (var i = 1; i <= 9; i++) { sc.enterScore(10) }
      sc.enterScore(9)
      sc.enterScore(1)
      sc.enterScore(1)
      sc.enterScore(1)
      expect(sc.scores.length).toEqual(21)
    })

    it('doesn\'t continue to enter scores once game is finished', function() {
      for (var i = 1; i <= 21; i++) { sc.enterScore(1) }
      expect(sc.scores.length).toEqual(20)
    })
})
