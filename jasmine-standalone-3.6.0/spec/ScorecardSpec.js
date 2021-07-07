describe("Scorecard", () => {
  let scorecard
  let mockframes
  let mockroll = null
  let mockrolls
  let score

  beforeEach(() => {
    score = jasmine.createSpy('score')
    mockframe = jasmine.createSpy('mockframe')
    mockrolls = [3, 6]
    const mockFrame = class mockFrame {
      constructor(rolls) {
        this.rolls = rolls
      }
    }
    const mockScore = class mockScore {
      constructor(frames) {
        this.frames = frames
      }
    }
  })

  it('runs through the scores and asks frames to add a new frame', () => {
    scorecard = new Scorecard([3,7], mockframe)
    scorecard.getFrames()
    expect(mockframe).toHaveBeenCalled()
  })

  it('runs through the scores and asks frames to add a new strike', () => {
    scorecard = new Scorecard([10], mockframe)
    scorecard.getFrames()
    expect(mockframe).toHaveBeenCalled()
  })

  it('can add the 10th frame', () => {
    scorecard = new Scorecard([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], mockframe)
    scorecard.getFrames()
    expect(mockframe).toHaveBeenCalled()
  })

  it('returns an array of frames', () => {
    scorecard = new Scorecard([3, 7, 4, 5, 10, 5, 6, 3, 7, 10, 2, 2], mockframe)
    scorecard.getFrames()
    scorecard.frames.forEach(element => expect(element).toBeInstanceOf(mockframe))
    expect(scorecard.frames.length).toEqual(10)
  })

  it('creates a new instance of Frame Score', () => {
    scorecard = new Scorecard([3, 7, 4, 5, 10, 5, 6, 3, 7, 10, 2, 2], mockframe)
    scorecard.getFrames()
    scorecard.getScoresPerFrame()
    expect(score).toHaveBeenCalled()
  })

  it('returns an array of frames', () => {
    scorecard = new Scorecard([3, 7, 4, 5, 10, 5, 6, 3, 7, 10, 2, 2], mockframe)
    scorecard.getFrames()
    scorecard.getScoresPerFrame()
    scorecard.scores.forEach(element => expect(element).toBeInstanceOf(mockScore))
    expect(scorecard.scores.length).toEqual(10)
  })

})
