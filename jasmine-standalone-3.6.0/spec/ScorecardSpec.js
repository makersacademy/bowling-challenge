describe("Scorecard", () => {
  let scorecard
  let mockframes
  let mockroll = null

  beforeEach(() => {
    mockframes = {
      add: (frame, roll) => {
        mockroll = roll
      },
      run: () => {}
    }
  })

  it('runs through the scores and asks frames to add a new frame', () => {
    scorecard = new Scorecard([3,7], mockframes)
    spyOn(mockframes, 'add')
    scorecard.create()
    expect(mockframes.add).toHaveBeenCalledWith(1, [3, 7])
  })

  it('runs through the scores and asks frames to add a new strike', () => {
    scorecard = new Scorecard([10], mockframes)
    spyOn(mockframes, 'add')
    scorecard.create()
    expect(mockframes.add).toHaveBeenCalledWith(1, [10])
  })

  it('can add the 10th frame', () => {
    scorecard = new Scorecard([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], mockframes)
    spyOn(mockframes, 'add')
    scorecard.create()
    expect(mockframes.add).toHaveBeenCalledWith(10, [10, 10, 10])
  })

  it('can add the 4th frame with previous strikes', () => {
    scorecard = new Scorecard([3, 7, 4, 5, 10, 5, 6], mockframes)
    spyOn(mockframes, 'add')
    scorecard.create()
    expect(mockframes.add).toHaveBeenCalledWith(4, [5, 6])
  })

  it('can add the 7th frame with previous strikes', () => {
    scorecard = new Scorecard([3, 7, 4, 5, 10, 5, 6, 3, 7, 10, 2, 2], mockframes)
    spyOn(mockframes, 'add')
    scorecard.create()
    expect(mockframes.add).toHaveBeenCalledWith(7, [2, 2])
  })

  it('asks frames to run', () => {
    scorecard = new Scorecard([3, 7, 4, 5, 10, 5, 6, 3, 7, 10, 2, 2], mockframes)
    spyOn(mockframes, 'run')
    scorecard.create()
    expect(mockframes.run).toHaveBeenCalledWith()
  })
})
