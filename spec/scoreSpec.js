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
  });

  it('records spares', function(){
    score.add(5)
    score.add(5)
    expect(score.specials.length).toEqual(1)
  });

  it('records a perfect game', function(){
    for (i=0; i<12; i++) {
      score.add(10);
    }
    expect(score.total).toEqual(300);
  });


  it('ends game after 13 strikes', function(){
    for (i=0; i<30; i++) {
      score.add(10);
  }
    expect(score.total).toEqual(300);
  });

  it ('records correct scores for spares', function(){
    for(i=0; i<10; i ++){
      score.add(5);
    }
    expect(score.total).toEqual(60)
  });

  it("doesn't allow you to add an impossible score", function(){
    expect(score.add(100)).toEqual("No cheating!")
  });

  it("doesn't allow you to add impossible scores", function(){
    score.add(5);
    expect(score.add(10)).toEqual("No cheating!")
  })

});
