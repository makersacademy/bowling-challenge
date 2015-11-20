describe('BowlingScorer',function(){
  var scorer;
  beforeEach(function(){
    scorer = new BowlingScorer();
  });
  it('starts with a score of zero',function(){
    expect(scorer.score()).toEqual(0);
  });
  it('can score a gutter game',function(){
    for(var i=0;i<10;i++){
      scorer.addFrame(0,0);
    }
    expect(scorer.score()).toEqual(0);
  });
});