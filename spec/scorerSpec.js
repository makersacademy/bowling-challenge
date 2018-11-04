describe('Scorer', function () {
  beforeEach(function () {
    scorer = new Scorer()
  })

  it('should calculate a single frame score', function () {
    scoreAndScoreFrames([5, 4])
    expect(scorer.frame_scores).toEqual([9])
  })

  it('should be able to keep track of totals', function () {
    scoreAndScoreFrames([5, 4, 7, 2, 1, 0])
    expect(scorer.frame_scores).toEqual([9, 9, 1])
  })

  it('totals should only be calculated once a frame is complete', function () {
    scoreAndScoreFrames([5])
    expect(scorer.frame_scores).toEqual([])
  })

  it('strikes are only calculated once two more rolls have been made', function () {
    scoreAndScoreFrames([5, 4, 10, '-'])
    expect(scorer.frame_scores).toEqual([9])
  })

  it('strikes are only calculated once two more rolls have been made', function () {
    scoreAndScoreFrames([5, 4, 10, '-', 0])
    expect(scorer.frame_scores).toEqual([9])
  })

  it('strikes score 10 plus the addition of the next two rolls', function () {
    scoreAndScoreFrames([5, 4, 10, '-', 10, '-', 10])
    expect(scorer.frame_scores).toEqual([9, 30])
  })

  it('strikes score 10 plus the addition of the next two rolls', function () {
    scoreAndScoreFrames([5, 4, 10, '-', 2, 0, 10])
    expect(scorer.frame_scores).toEqual([9, 12, 2])
  })

  it('spares are only calculated once one more roll has been made', function () {
    scoreAndScoreFrames([5, 5])
    expect(scorer.frame_scores).toEqual([])
  })

  it('spares score 10 plus the addition of the next roll', function () {
    scoreAndScoreFrames([6, 4, 2, 1])
    expect(scorer.frame_scores).toEqual([12, 3])
  })

  it('spares score 10 plus the addition of the next roll', function () {
    scoreAndScoreFrames([6, 4, 7, 3])
    expect(scorer.frame_scores).toEqual([17])
  })

  it('final frame gets no bonus if not a strike or spare', function () {
    scoreAndScoreFrames([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2])
    expect(scorer.frame_scores).toEqual([3, 3, 3, 3, 3, 3, 3, 3, 3, 3])
  })

  it('final frame gets bonus roll if spare scored', function () {
    scoreAndScoreFrames([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 4, 6, 2])
    expect(scorer.frame_scores).toEqual([3, 3, 3, 3, 3, 3, 3, 3, 3, 12])
  })

  it('final frame gets bonus roll if strike scored', function () {
    scoreAndScoreFrames([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 10, 2, 2])
    expect(scorer.frame_scores).toEqual([3, 3, 3, 3, 3, 3, 3, 3, 3, 14])
  })

  it('has an overall game total', function () {
    scoreAndScoreFrames([1, 2, 1, 2, 3, 7, 5, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
    expect(scorer.total()).toEqual(40)
  })

  scoreAndScoreFrames = function (scores) {
    scorer.scores = scores
    scorer.scoreFrames()
  }
})
