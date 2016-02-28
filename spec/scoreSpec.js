describe('Score', function(){
  var score;

  beforeEach(function(){
    score = new Score();
  });

  it('has a default score of zero', function(){
    expect(score.total).toEqual(0);
  });

  it('can add 3 to score', function(){
    score.add(3);
    expect(score.roundscore).toEqual(3);
  });

  it('has a default round of zero', function(){
    expect(score.round).toEqual(1)

  });
  it('has a round of 2 after two normal scores', function(){
    score.add(3);
    score.add(4);
    expect(score.round).toEqual(2)
  });

  it('ends after ten rounds', function(){
    for (i = 0; i < 20; i++) {
      score.add(3);
    }
    expect(score.add(3)).toEqual("Game over")
  });
  it('records strikes', function(){
    score.add(10)
    expect(score.specials.length).toEqual(1)
  })

});
