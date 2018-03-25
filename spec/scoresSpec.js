describe('Scores', function() {
  var scores;

  beforeEach(function(){
    scores = new Scores();
  })

  it('returns empty history by default', function(){
    expect(scores._scoreHistory).toEqual([]);
  })

  it('stores the score in the history', function(){
    scores.addScore(3)
    expect(scores._scoreHistory).toEqual([3]);
  })

  it('stores the score in the history', function(){
    scores.addScore(3)
    scores.addScore(5)
    expect(scores._scoreHistory).toEqual([3, 5]);
  })

})
