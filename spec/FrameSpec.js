describe('Frame', function(){
  var frame;
  beforeEach(function(){
    frame = new Frame();
  });

  it('sets default frameScore to an empty array', function(){
    expect(frame.frameScore).toEqual([]);
  });

  it('firstBowl returns random value between 0 and 10', function(){
    frame.firstBowl();
    expect(frame.frameScore[0] >= 0 && frame.frameScore[0] <= 10).toBeTruthy();
  });

  it('secondBowl returns a random value between 0 and knocked pins', function(){
    spyOn(frame, 'currentScore').and.returnValue(5);
    frame.firstBowl();
    frame.secondBowl();
    expect(frame.frameScore[1] >= 0 && frame.frameScore[1] <= 5).toBeTruthy();
  });

  it('currentScore returns the last ball bowled', function(){
    frame.firstBowl();
    expect(frame.currentScore()).toBeLessThan(11);
  });

  it('frameScore returns an array of two numbers', function(){
    frame.firstBowl();
    frame.secondBowl();
    expect(frame.frameScore[0]).toBeLessThan(11);
    expect(frame.frameScore[1]).toBeLessThan(10);
  });

  it('totalFrameScore returns a number less than 11', function(){
    frame.firstBowl();
    frame.secondBowl();
    expect(frame.totalFrameScore()).toBeLessThan(11);
  });

  it('returns true if firstBowl is a strike', function(){
    spyOn(frame, 'firstBowl').and.returnValue(10);
    frame.firstBowl();
    expect(frame.isAStrike()).toEqual(true);
  });

});
