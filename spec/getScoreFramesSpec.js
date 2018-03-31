describe('getScoreFrames', function(){

  it('returns the correct frames', function(){
    scoresHistory = [2, 5, 10, null, 0, 10, 4, 2, null, null, null]
    expect(getScoreFrames(scoresHistory)).toEqual([
      [2, 5, 10, null, 0],
      [10, null, 0, 10, 4],
      [0, 10, 4, 2, null],
      [4, 2, null, null, null]
    ]);
  });

});

describe('filterNulls', function(){

  it('returns the score frames without nulls', function(){
    scoreFrames = [
      [2, 5, 10]
    ]
    expect(filterNulls(scoreFrames)).toEqual([
      [2, 5, 10]
    ]);
  });

  it('returns the score frames without nulls', function(){
    scoreFrames = [
      [null, null]
    ]
    expect(filterNulls(scoreFrames)).toEqual([
      []
    ]);
  });

});
