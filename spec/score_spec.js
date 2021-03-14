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

  describe('tenth frame:', function() {

    describe('first roll:', function() {
      
      it('returns 10 when first roll is 10', function() {
        expect(score.addScore(10, 10)).toEqual(10);
      });

      it('returns 10 when first roll is 0', function() {
        expect(score.addScore(10, 0)).toEqual(10)
      });

      it('return 6 when first roll is 4', function() {
        expect(score.addScore(10, 4)).toEqual(6);
      });
    });
    
    describe('2nd roll: ', function() {

      it("returns 0 when first two rolls are less than 10", function() {
        score.addScore(10, 3);
        expect(score.addScore(10, 4)).toEqual(0);
      });

      it('returns 10 when first two rolls equal 10', function() {
        score.addScore(10, 3);
        expect(score.addScore(10, 7)).toEqual(10);
      });
  
      it('returns 10 when first two rolls are 10', function() {
        score.addScore(10, 10);
        expect(score.addScore(10, 10)).toEqual(10);
      });
  
      it('returns 2 when first two rolls are [10, 8]', function() {
        score.addScore(10, 10);
        expect(score.addScore(10, 8)).toEqual(2);
      });
  
      it('returns 10 when first two rolls are [10, 0]', function() {
        score.addScore(10, 10);
        expect(score.addScore(10, 0)).toEqual(10);
      });
  
      it('returns 10 when first two rolls are [0, 10]', function() {
        score.addScore(10, 0);
        expect(score.addScore(10, 10)).toEqual(10);
      });
    });

    it('returns 0 after 3 rolls', function() {
      score.addScore(10, 10);
      score.addScore(10, 3);
      expect(score.addScore(10, 4)).toEqual(0);
    });
  });

  describe('totals', function() {
    
  });
});