describe("scorecard with bowling frames", function() {

  describe('when game starts', function(){
    var game;
    var bowlingFrame;

    beforeEach(function() {
      game = new Game();
      game.start();
      bowlingFrame = new BowlingFrame();
    });

    it("it is prepared with 10 frames", function() {
      expect(Scorecard.list.length).toEqual(10);
    });

    it("each Frame has a subframe with two values of 0 and current starts at 'one'", function() {
      expect(bowlingFrame.subFrame['current']).toEqual('one');
      expect(bowlingFrame.subFrame['one']).toEqual(0);
      expect(bowlingFrame.subFrame['two']).toEqual(0);
    });
  });

  describe('calculating the score', function() {
    var bowlingFrame;

    beforeEach(function() {
      bowlingFrame = new BowlingFrame();
    });

    it('adds up for each subframe', function() {
      bowlingFrame.subFrame['one'] = 5;
      bowlingFrame.subFrame['two'] = 3;
      expect(bowlingFrame.score()).toEqual(8);
    });

    it("throws an error when 'subFrame TWO' is out of range", function(){
      bowlingFrame.subFrame['one'] = 5;
      bowlingFrame.subFrame['two'] = 8;
      expect(function(){ bowlingFrame.score();
      }).toThrow();
    });

    it("throws an error when 'subFrame ONE' is out of range", function(){
      bowlingFrame.subFrame['one'] = 12;
      expect(function(){ bowlingFrame.score();
      }).toThrow();
    });
  });

});