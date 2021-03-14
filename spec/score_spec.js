describe('score', function() {
  var score;

  beforeEach(function() {
    score = new Score();
  });

  it('.name should return the players name', function() {
    expect(score.name).toEqual("Sisyphus")
  });
  
  describe('.add_score', function() {

    it('should add 3 to the first frame', function() {
      score.addScore(1, 3);
      expect(score.scorecard[1]).toEqual([3]);
    });

    it('should return 7 when given a score of 3', function() {
      expect(score.addScore(1, 3)).toEqual(7);
    });

    it('should return 0 when given a score of 3 and 4 on the first frame', function() {
      score.addScore(1, 3);
      expect(score.addScore(1, 4)).toEqual(0);
    });
    
    it('should return 0 when given a score of 10', function() {
      expect(score.addScore(2, 10)).toEqual(0);
    });
  });
});