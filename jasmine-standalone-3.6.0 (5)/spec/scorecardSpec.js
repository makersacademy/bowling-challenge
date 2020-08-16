describe('Scorecard',function(){
  it('keeps every new score of frame -in an array', function(){
    let scorecard = new Scorecard();
  expect(scorecard.frameTotal).toEqual([]);
});

  it('adds frames within the array together', function(){
    var scorecard = new Scorecard();  
    var frame = new Frame();
    scorecard.addFrames(frame)
    expect(scorecard.frameTotal).toEqual(frame)
  })
})