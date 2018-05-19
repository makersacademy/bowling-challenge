describe('intergration test', function(){
  it('returns the score of each frame', function() {
    rolls = [2, 5, 10, 9, 1, 0, 5]
    expect(bowlingGame(rolls)).toEqual([7, 27, 37, 42])
  })

  it('returns empty of incompleted frame', function() {
    rolls = [1]
    expect(bowlingGame(rolls)).toEqual([])
  })
})

describe('getFrameRolls', function(){
  it('returns 2 rolls of each frame 1', function(){
    rolls = [2, 5, 10, 9, 1, 0, 5]
    expect(getFrameRolls(rolls)).toEqual([
      [2, 5],
      [10],
      [9, 1],
      [0, 5]
    ])
  })

  it('returns 2 rolls of each frame 2', function(){
    rolls = [2, 5, 10, 9, 1, 0]
    expect(getFrameRolls(rolls)).toEqual([
      [2, 5],
      [10],
      [9, 1],
      [0]
    ])
  })
})

describe('getFirstUnfinishedFrame', function(){
  it('returns the first unfinished frame', function(){
    rollsList = [[2, 5], [10], [9, 1], [0]]
    expect(getFirstUnfinishedFrame(rollsList)).toEqual([0])
  })
})

describe('rollTypeCheck', function(){
  it('returns a hash with type and scores in', function(){
    rollsList = [[2, 5], [10], [9, 1], [0]]
    expect(rollTypeCheck(rollsList)).toEqual([
      {type: "normal", score: [2, 5]},
      {type: "strike", score: [10]},
      {type: "spare", score: [9, 1]},
      {type: "normal", score: [0]}
    ])
  })
})

describe('isGameFinished', function(){
  it('returns false when game is not finished 1', function(){
    scoreFrameList = [
      {type: "normal", score: [2, 5]},
      {type: "strike", score: [10]},
      {type: "spare", score: [9, 1]},
      {type: "incomplete", score: [0]}
    ]
    expect(isGameFinished(scoreFrameList)).toEqual(false)
  })

  it('returns true when game is finished', function(){
    scoreFrameList = [
      {type: "normal", score: [2, 5]},
      {type: "strike", score: [10]},
      {type: "spare", score: [9, 1]},
      {type: "incomplete", score: [0]},
      {type: "normal", score: [2, 5]},
      {type: "strike", score: [10]},
      {type: "spare", score: [9, 1]},
      {type: "incomplete", score: [0]},
      {type: "strike", score: [10]},
      {type: "spare", score: [9, 1]}
    ]
    expect(isGameFinished(scoreFrameList)).toEqual(true)
  })

  it('returns false when game is not finished 2', function(){
    scoreFrameList = []
    expect(isGameFinished(scoreFrameList)).toEqual(false)
  })
})

describe('isRollFinished', function(){
  it('returns true if the roll is finished for one frame 1', function(){
    oneFrame = [10]
    expect(isRollFinished(oneFrame)).toEqual(true)
  })

  it('returns false if the roll is not finished for one frame', function(){
    oneFrame = [7]
    expect(isRollFinished(oneFrame)).toEqual(false)
  })

  it('returns false if the frame has not had any roll', function(){
    oneFrame = []
    expect(isRollFinished(oneFrame)).toEqual(false)
  })

  it('returns false if the frame has more than 3 rolls', function(){
    oneFrame = [1, 2, 3]
    expect(isRollFinished(oneFrame)).toEqual(false)
  })

  it('returns true if the roll is finished for one frame 2', function(){
    oneFrame = [1, 9]
    expect(isRollFinished(oneFrame)).toEqual(true)
  })
})

describe('getNumOfRemainpins', function(){
  it('returns all 10 possible pins', function(){
    var oneFrame= [10]
    expect(getNumOfRemainpins(oneFrame)).toEqual(0)
  })

  it('returns all 10 possible pins 1', function(){
    var oneFrame= [5]
    expect(getNumOfRemainpins(oneFrame)).toEqual(5)
  })

  it('returns all 10 possible pins 2', function(){
    var oneFrame= [3, 4]
    expect(getNumOfRemainpins(oneFrame)).toEqual(0)
  })

  it('returns all 10 possible pins 3', function(){
    var oneFrame= []
    expect(getNumOfRemainpins(oneFrame)).toEqual(10)
  })

})
