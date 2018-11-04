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
    for (var i = 0; i < 10; i++) { sc.enterScore(10) }
    expect(sc.scores).toEqual([10, '-', 10, '-', 10, '-', 10, '-', 10, '-',
      10, '-', 10, '-', 10, '-', 10, '-', 10])
  })
})
