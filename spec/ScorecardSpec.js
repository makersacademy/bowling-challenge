describe('Scorecard', function() {

  var scorecard;
  scorecard = new Scorecard;

  it('frames begins empty', function(){
    expect(scorecard.frames.length).toEqual(0)
  });
});
