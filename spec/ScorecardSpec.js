describe('Scorecard', function() {
  var scorecard;
  var frame;

  beforeEach(function() {
    scorecard = new Scorecard();
    frame = new Frame();
  });

  describe('#enter', function() {
    it('enters rolls into frames array', function() {
        scorecard.enter(0,0);
      expect(scorecard.frames).toEqual([{firstRoll: 0, secondRoll: 0}])
    });

    it('ensures rolls do not sum to over 10', function() {
      expect( function(){scorecard.enter(3,8); } ).toThrow( new Error, ('Check entry'));
    }); 
  });


  describe('#calculate', function() {
    it('scores 0 for a gutter game', function() {
      for (var i = 0; i < 10; i++) {
        scorecard.enter(0,0);
      };
      expect(scorecard.calculate()).toEqual(0)

    });

    it('scores 300 for a perfect game', function() {
      for (var i = 0; i < 12; i++) {
        scorecard.enter(10,0);
      };
      expect(scorecard.calculate()).toEqual(300)
    });

    it('scores 80 when each frame is 5, 3 ', function() {
      for (var i = 0; i < 10; i++) {
        scorecard.enter(5,3);
      };
      expect(scorecard.calculate()).toEqual(80)
    });
    
    it('does not return 300 when some but not all strikes in frames', function() {
      for (var i = 0; i < 9; i++) {
        scorecard.enter(5,3);
      };
      scorecard.enter(10,0);
      console.log(scorecard.frames)
      expect(scorecard.calculate()).not.toEqual(300)

    });
  });
});
