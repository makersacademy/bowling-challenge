describe('Scorecard', function (){
  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard ();
  });

  it('starts with a blank array', function(){
    expect(scorecard.bowlingFrames.length).toEqual(0);
  });

  it('starts with #lastFrameStrike as false', function(){
    expect(scorecard.lastFrameStrike).toBe(false);
  });

  it('starts with #lastFrameSpare as false', function(){
    expect(scorecard.lastFrameSpare).toBe(false);
  });

  it('starts with #frameCount as 0', function(){
    expect(scorecard.frameCount).toEqual(0);
  });

});
