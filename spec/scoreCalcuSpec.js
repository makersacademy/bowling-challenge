describe('scoreCalcu', function(){
  it('calculates the score of each frame', function(){
    scoreFrames = [[10, 10, 8]]
    expect(scoreCalcu(scoreFrames)).toEqual([28])
  });

  it('calculates the score of each frame', function(){
    scoreFrames = [[0, 10, 8]]
    expect(scoreCalcu(scoreFrames)).toEqual([18])
  });

  it('calculates the score of each frame', function(){
    scoreFrames = [[3, 7, 8]]
    expect(scoreCalcu(scoreFrames)).toEqual([18])
  });

  it('calculates the score of each frame', function(){
    scoreFrames = [[3, 6]]
    expect(scoreCalcu(scoreFrames)).toEqual([9])
  });
})
