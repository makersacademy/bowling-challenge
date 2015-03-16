describe('Scorer', function(){

  beforeEach(function(){
    scorer = new Scorer;
  });

  it('can add a score', function(){
    scorer.addScore(1);
    expect(scorer.scores).toEqual([1]);
  });

  it('adds a normal type to the type array', function(){
    scorer.addScore(1);
    expect(scorer.types).toEqual([null]);
  });

  it('adds a split to the type array', function(){
    scorer.addScore(1);
    scorer.addScore('/');
    expect(scorer.scores).toEqual([1, 9]);
    expect(scorer.types).toEqual([null, '/']);
  });

  it('adds a strike to the type array', function(){
    scorer.addScore('x');
    expect(scorer.scores).toEqual([10]);
    expect(scorer.types).toEqual(['x']);
  });

  it('can count the score if no spares and strikes are scored', function(){
    scorer.addScore(1);
    scorer.addScore(7);
    scorer.addScore(4);
    scorer.computeTotal();
    expect(scorer.total).toEqual(12);
  });

  it('recognises that a spare doubles the next score', function(){
    scorer.addScore(1);
    scorer.addScore('/');
    scorer.addScore(4);
    scorer.computeTotal();
    expect(scorer.total).toEqual(18);
  });

  it('recognises that a strike doubles the next two score', function(){
    scorer.addScore('x');
    scorer.addScore('x');
    scorer.addScore(4);
    scorer.addScore(1);
    scorer.computeTotal();
    expect(scorer.total).toEqual(44);
  });

  it('treats a 10th frame strike as a score 10', function(){
    scorer.add10thFrameScore('x');
    expect(scorer.scores).toEqual([10])
    expect(scorer.types).toEqual([null])
  });

  it('recognises a perfect game!', function(){
    for (var i = 1; i  <= 9 ; i++) {
      scorer.addScore('x')
    };
    scorer.add10thFrameScore('x');
    scorer.add10thFrameScore('x');
    scorer.add10thFrameScore('x');
    scorer.computeTotal();
    expect(scorer.total).toEqual(300);
  })

});





