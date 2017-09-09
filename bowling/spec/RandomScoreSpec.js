describe('RandomScore', function() {

  var randomScore = new RandomScore

  it('creates a score between 1 and 10', function() {
    var possibleScores = [0,1,2,3,4,5,6,7,8,9,10]
    expect(possibleScores).toContain(randomScore.createScore());
  })
});
