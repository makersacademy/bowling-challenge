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

  describe('.total', function() {
    
    it("of frames [1, 4] to equal 5", function() {
      score.scorecard = fillScoreCard([[1, 4]]);
      // score.addScore(1, 1);
      // score.addScore(1, 4);
      expect(score.total()).toEqual(5)
    });

    it("of frames [[10], [4, 5]] to eq 28", function() {
      score.scorecard = fillScoreCard([[10], [4, 5]]);
      expect(score.total()).toEqual(28)
    });

    it("of frames [[10], [10], [3, 5]] to eq 49", function() {
      score.scorecard = fillScoreCard([[10], [10], [3, 5]]);
      expect(score.total()).toEqual(49)
    });

    it("of frames [[3, 7], [5, 0], [3, 5]] to eq 28", function() {
      score.scorecard = fillScoreCard([[3, 7], [5, 0], [3, 5]]);
      expect(score.total()).toEqual(28)
    });

    it("of frames [[3, 7], [10], [3,5], [6, 4],[1,2]] to eq 60", function() {
      score.scorecard = fillScoreCard([[3, 7], [10], [3,5], [6, 4],[1,2]]);
      expect(score.total()).toEqual(60)
    });

    it("of score up to frame 9 to equal 107", function() {
      score.scorecard = fillScoreCard([[1, 4], [4, 5], [6, 4], [5, 5], [10], [0, 1], [7, 3], [6, 4], [10]]);
      expect(score.total()).toEqual(107)
    });

    it("of a perfect game equals 300", function() {
      score.scorecard = fillScoreCard([[10], [10], [10], [10], [10], [10], [10], [10], [10], [10, 10, 10]] );
      expect(score.total()).toEqual(300);
    });

    it("expect score to equal 133", function() {
      score.scorecard = fillScoreCard([[1, 4], [4, 5], [6, 4], [5, 5], [10], [0, 1], [7, 3], [6, 4], [10], [2, 8, 6]])
      expect(score.total()).toEqual(133)
    });

    it("expect totals object to match", function() {
      score.scorecard = fillScoreCard([[1, 4], [4, 5], [6, 4], [5, 5], [10], [0, 1], [7, 3], [6, 4], [10], [2, 8, 6]])
      score.total();
      var totalsCard = {1: 5, 2: 14, 3: 29, 4: 49, 5: 60, 6: 61, 7: 77, 8: 97, 9: 117, 10: 133};
      expect(score.totalsCard).toEqual(totalsCard);
    });

  });
});

