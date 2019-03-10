describe('Scorecard', function(){

  beforeEach(function(){
    scorecard = new Scorecard()
  })
  it ('should have a starting score of zero', function() {
    expect(scorecard.totalScore).toEqual(0)
  })

  it ('should be an empty scorecard', function() {
    expect(scorecard.frames).toEqual([]);
  })


})
