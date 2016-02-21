describe('Scorecard - Checking values for new card', function (){

  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard ();
  });

  it('starts with a blank array', function(){
    expect(scorecard.bowlingFrames.length).toEqual(0);
  });

  it('starts with #strike as false', function(){
    expect(scorecard.strike).toBe(false);
  });

  it('starts with #spare as false', function(){
    expect(scorecard.spare).toBe(false);
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

  it('starts with #scoreIsFinal as false', function(){
    expect(scorecard.scoreIsFinal).toBe(false);
  });

  it('starts with #score as 0', function(){
    expect(scorecard.frameCount).toEqual(0);
  });

});
