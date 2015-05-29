describe('Scorecard', function(){
  var scorecard;

  beforeEach( function(){
    scorecard = new Scorecard();
  });

  it('has a total score when initialized', function(){
    expect(scorecard.totalScore).toEqual(0);
  });

});