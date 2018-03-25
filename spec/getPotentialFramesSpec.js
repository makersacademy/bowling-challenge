describe('getPotentialFrames', function(){
  it('gets potential frames from the history', function(){
    scoresHistory = [1, 2, 3, 4]
    expect(getPotentialFrames(scoresHistory)).toEqual([[1, 2, 3], [2, 3, 4]]);
  })
})
