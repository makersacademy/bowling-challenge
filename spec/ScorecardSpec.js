describe("Scorecard", function() {
  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard();
  });

  describe('frame', function(){
    it ('starts at 1', function(){
      expect(scorecard.frame).toEqual(1);
    });
  });

  describe('pins', function(){
    it ('starts at 0', function(){
      expect(scorecard.pins).toEqual(0);
    });
  });

  describe('total', function(){
    it ('starts at 0', function(){
      expect(scorecard.total).toEqual(0);
      });
    });

  describe('roll', function(){
    it ('starts at 1', function(){
      expect(scorecard.roll).toEqual(1);
    });
  });
  
});
