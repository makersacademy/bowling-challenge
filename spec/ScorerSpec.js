describe ('Scorer', function() {

  beforeEach(function() {
    scorer = new Scorer();
  })

  it('returns an empty array', function() {
    expect(scorer.scores).toEqual([])
  });

  describe ('addFrame', function (){
    it('returns the array with the first frame', function() {
      scorer.addFrame(4,7)
      expect(scorer.scores).toEqual([[4,7]])
    });
    it('returns the array with the first frame', function() {
      scorer.addFrame(4,7)
      scorer.addFrame(5,8)
      expect(scorer.scores).toEqual([[4,7],[5,8]])
    });
  });
  describe ('total', function (){
    it('return a running total', function() {
      scorer.addFrame(4,7)
      scorer.addFrame(5,8)
      expect(scorer.totalScore()).toEqual(24)
    });
  });
    
  
});

