describe('allFrameCalcu', function(){
  it('calculates the score of each frame 1', function(){
    scoreFrames = [[10, 10, 8]]
    expect(allFrameCalcu(scoreFrames)).toEqual([28])
  });

  it('calculates the score of each frame 2', function(){
    scoreFrames = [[0, 10, 8]]
    expect(allFrameCalcu(scoreFrames)).toEqual([18])
  });

  it('calculates the score of each frame 3', function(){
    scoreFrames = [[3, 7, 8]]
    expect(allFrameCalcu(scoreFrames)).toEqual([18])
  });

  it('calculates the score of each frame 4', function(){
    scoreFrames = [[3, 6]]
    expect(allFrameCalcu(scoreFrames)).toEqual([9])
  });

  it('does not return the score if the frame is unfinished 1', function(){
    scoreFrames = [[3]]
    expect(allFrameCalcu(scoreFrames)).toEqual([])
  });

  it('does not return the score if the frame is unfinished 2', function(){
    scoreFrames = [[3, 7]]
    expect(allFrameCalcu(scoreFrames)).toEqual([])
  });

  it('does not return the score if the frame is unfinished 3', function(){
    scoreFrames = [[10, 10]]
    expect(allFrameCalcu(scoreFrames)).toEqual([])
  });

  it('does not return the score if the frame is unfinished 4', function(){
    scoreFrames = [[2,  5, 10]]
    expect(allFrameCalcu(scoreFrames)).toEqual([7])
  });

  it('does not return the score if the frame is unfinished 4', function(){
    scoreFrames = [[2,  5]]
    expect(allFrameCalcu(scoreFrames)).toEqual([7])
  });
});

describe('scoreCalcu', function(){
  it('returns the list with score history and latest total score', function(){
    scoreFrameList = [5, 9, 15, 20]
    expect(scoreCalcu(scoreFrameList)).toEqual([5, 14, 29, 49])
  });
});
