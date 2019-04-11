describe('Scorecard', function() {

  var scorecard;
  scorecard = new Scorecard;

  it('frames begins empty', function(){
    expect(scorecard.frames.length).toEqual(0)
  });
  it('basic bowling set up', function(){
    expect(scorecard.score).toEqual(0);
    expect(scorecard.framesMax).toEqual(10);
    expect(scorecard.frameNumber).toEqual(1);
  });
});
