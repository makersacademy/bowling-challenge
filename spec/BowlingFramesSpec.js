describe("scorecard with bowling frames", function() {

  describe('when game starts', function(){
    var game;
    var bowlingFrame;

    beforeEach(function() {
      game = new Game();
      game.start();
      bowlingFrame = new BowlingFrame();
    });

    it("each Frame has a subframe with two values of 0 and current starts at 'one'", function() {
      expect(bowlingFrame.subFrame.current).toEqual('first');
      expect(bowlingFrame.subFrame.one).toEqual(0);
      expect(bowlingFrame.subFrame.two).toEqual(0);
    });
  });

  describe('calculating the score', function() {
    var bowlingFrame;

    beforeEach(function() {
      bowlingFrame = new BowlingFrame();
    });

    it('adds up for each subframe', function() {
      bowlingFrame.subFrame.one = 5;
      bowlingFrame.subFrame.two = 3;
      bowlingFrame.score();
      expect(bowlingFrame.currentScore).toEqual(8);
    });

    it("throws an error when 'subFrame TWO' is out of range", function(){
      bowlingFrame.subFrame.one = 5;
      bowlingFrame.subFrame.two = 8;
      expect(function(){ bowlingFrame.score();
      }).toThrow();
    });

    it("throws an error when 'subFrame ONE' is out of range", function(){
      bowlingFrame.subFrame.one = 12;
      expect(function(){ bowlingFrame.score();
      }).toThrow();
    });

    xit('if strike adds up 2 points in last frame', function(){
      for(var i=0;i<18;i++){ updateScorecardList(4); }
        expect(Scorecard.list[9].subFrame.current.toEqual('first'));
    });
  });

});