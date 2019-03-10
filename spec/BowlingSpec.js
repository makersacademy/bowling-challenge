describe('Scorecard', function(){

  beforeEach(function(){
    scorecard = new Scorecard()
  })
  it ('should have a starting score of zero', function() {
    expect(scorecard.totalScore).toEqual(0)
  })

  it ('should be an empty scorecard', function() {
    expect(scorecard.allFrames).toEqual([[], [], [], [], [], [], [], [], [], []]);
  })

  it ('should store the value of the first roll', function () {
    scorecard.firstRoll(1)
    expect(scorecard.roll1).toEqual(1)
  })

  it ('should store the value of the second roll', function() {
    scorecard.secondRoll(9)
    expect(scorecard.roll2).toEqual(9)
  })

  it ("should store the values of the two rolls in one frame", function () {
    scorecard.firstRoll(1)
    scorecard.secondRoll(9)
    scorecard.eachFrame()
    expect(scorecard.frame).toEqual([1,9])

  })
})
