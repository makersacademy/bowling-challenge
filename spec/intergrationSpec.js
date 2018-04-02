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
      {type: "normal", score: [2, 5]},
      {type: "strike", score: [10]},
      {type: "spare", score: [9, 1]},
      {type: "normal", score: [0, 5]}
    ])
  })

  it('returns 2 rolls of each frame 2', function(){
    rolls = [2, 5, 10, 9, 1, 0]
    expect(getFrameRolls(rolls)).toEqual([
      {type: "normal", score: [2, 5]},
      {type: "strike", score: [10]},
      {type: "spare", score: [9, 1]},
      {type: "incomplete", score: [0]}
    ])
  })
})

describe('rollTypeCheck', function(){
  it('returns a hash with type and scores in', function(){
    rollsList = [[2, 5], [10], [9, 1], [0]]
    expect(rollTypeCheck(rollsList)).toEqual([
      {type: "normal", score: [2, 5]},
      {type: "strike", score: [10]},
      {type: "spare", score: [9, 1]},
      {type: "incomplete", score: [0]}
    ])
  })
})
