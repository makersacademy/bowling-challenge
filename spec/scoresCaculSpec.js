describe('scoreCacul', function(){

  it('has no score at the beginning of the game', function () {
    var scoreHistory = []
    expect(scoresCaculForFrame(scoreHistory)).toEqual(0);
  })

  it('has score 10 when you get a strike', function(){
    var scoreHistory = [10]
    expect(scoresCaculForFrame(scoreHistory)).toEqual(10);
  })

  it('sums up score for each frame', function(){
    var scoreHistory = [2, 5]
    expect(scoresCaculForFrame(scoreHistory)).toEqual(7);
  })

  it('sums up score for each frame', function(){
    var scoreHistory = [2, 8, 10]
    expect(scoresCaculForFrame(scoreHistory)).toEqual(20);
  })
})
