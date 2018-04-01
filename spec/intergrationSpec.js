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
