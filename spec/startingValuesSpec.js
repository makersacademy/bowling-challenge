describe('Scorecard - Checking values for new card', function (){

  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard ();
  });

  it('starts with a blank array for #frameList', function(){
    expect(scorecard.frameList.length).toEqual(0);
  });

  it('starts with #firstBall as true', function(){
    expect(scorecard.firstBall).toBe(true);
  });

  it('starts with #gameOver as false', function(){
    expect(scorecard.gameOver).toBe(false);
  });

  it('starts with #tenPins as false', function(){
    expect(scorecard.tenPins).toBe(false);
  });

  it('starts with #addNextBall as false', function(){
    expect(scorecard.addNextBall).toBe(false);
  });

  it('starts with #extraBall as false', function(){
    expect(scorecard.extraBall).toBe(false);
  });

});
