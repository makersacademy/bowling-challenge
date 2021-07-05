describe('Frame', function(){

  beforeEach(function(){
    frame = new Frame(false);
  });

  it('starts with a total score of 0 for first bowl of frame', function(){
    expect(frame._frameRoll1Score).toEqual(0);
  });

  it('starts with a total score of 0 for second bowl of frame', function(){
    expect(frame._frameRoll2Score).toEqual(0);
  });

  it('starts with a total score of 0 for each frame', function(){
    expect(frame.totalScoreForFrame()).toEqual(0);
  });

  it('starts with a bonus score of 0 for each frame', function(){
    expect(frame._bonusScore).toEqual(0);
  });

  it('keeps score of first bowl for frame', function(){
    frame.roll(2);
    expect(frame._frameRoll1Score).toEqual(2);
    expect(frame._frameRoll2Score).toEqual(0);
    expect(frame.totalScoreForFrame()).toEqual(0);
  });

  it('sums the total of two bowls for the frame when no bonuses are expected', function(){
    frame.roll(2);
    frame.roll(2);
    expect(frame._frameRoll1Score).toEqual(2);
    expect(frame._frameRoll2Score).toEqual(2);
    expect(frame.totalScoreForFrame()).toEqual(4);
  });

  it('starts with the first roll of the frame', function(){
    expect(frame._rollNumber).toEqual(0);
  });

  it('can move to the second roll of the frame ', function(){
    frame.roll(2);
    expect(frame._rollNumber).toEqual(1);
  });

  it('knows when a strike is not bowled', function(){
    expect(frame._strike).toEqual(false);
  });

  it('knows when a strike is not bowled', function(){
    frame.roll(2);
    expect(frame._strike).toEqual(false);
  });

  it('knows when a strike is bowled', function(){
    frame.roll(10);
    expect(frame._strike).toEqual(true);
  });

  it('knows when a spare is not bowled', function(){
    frame.roll(1);
    frame.roll(8);
    expect(frame._spare).toEqual(false);
  });

  it('knows when a spare is not bowled', function(){
    frame.roll(1);
    frame.roll(9);
    expect(frame._spare).toEqual(true);
  });

  it('allows a second bowl for the frame if no strike is bowled on the first roll', function(){
    frame.roll(2);
    expect(frame._done).toEqual(false);
  });

  it('ends the frame if a strike is rolled', function(){
    frame.roll(10);
    expect(frame._done).toEqual(true);
  });

  it('ends a frame after two rolls if no strike is rolled', function(){
    frame.roll(2);
    frame.roll(2);
    expect(frame._done).toEqual(true);
  });

  it('allows only two rolls per frame', function(){
    frame.roll(1);
    frame.roll(2);
    frame.roll(3);
    frame.roll(4);
    frame.roll(5);
    frame.roll(6);
    frame.roll(7);
    frame.roll(8);
    frame.roll(9);
    frame.roll(10);
    expect(frame._frameRoll1Score).toEqual(1);
    expect(frame._frameRoll2Score).toEqual(2);
    expect(frame.totalScoreForFrame()).toEqual(3);
  });

  it('calculates score correctly for strike bowled in last frame', function(){
    final_Frame = new Frame(true);
    final_Frame.roll(10);
    final_Frame.roll(1);
    final_Frame.roll(2);
    expect(final_Frame._strike).toEqual(true);
    expect(final_Frame.totalScoreForFrame()).toEqual(13);
  })

  it('calculates score correctly for strike bowled in last frame', function(){
    final_Frame = new Frame(true);
    final_Frame.roll(10);
    final_Frame.roll(10);
    final_Frame.roll(10);
    expect(final_Frame._strike).toEqual(true);
    expect(final_Frame.totalScoreForFrame()).toEqual(30);
  })

  it('calculates score correctly for spare bowled in last frame', function(){
    final_Frame = new Frame(true);
    final_Frame.roll(1);
    final_Frame.roll(9);
    final_Frame.roll(2);
    expect(final_Frame.totalScoreForFrame()).toEqual(12);
  })

  it('does not give bonus if no strike or spare is rolled', function(){
    frame.roll(2);
    frame.roll(2);
    expect(frame._done).toEqual(true);
    expect(frame._spare).toEqual(false);
    expect(frame._strike).toEqual(false);
    expect(frame._bonusScore).toEqual(0);
  });

  it('does not record a bonus if strike is rolled and only added in the game class', function(){
    frame.roll(10);
    frame.roll(1);
    frame.roll(1);
    expect(frame._done).toEqual(true);
    expect(frame._spare).toEqual(false);
    expect(frame._strike).toEqual(true);
    expect(frame._bonusScore).not.toEqual(2);
  });


  it('does not record a bonus if spare is rolled and only added in the game class', function(){
    frame.roll(1);
    frame.roll(9);
    frame.roll(1);
    expect(frame._done).toEqual(true);
    expect(frame._spare).toEqual(true);
    expect(frame._strike).toEqual(false);
    expect(frame._bonusScore).not.toEqual(1);
  });

});
