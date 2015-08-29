describe("BowlingFrames", function() {

  describe('when game starts', function(){
    var game;

    beforeEach(function() {
      game = new Game();
      game.start();
    });

    it("it is prepared with 10 frames", function() {
      expect(BowlingFrames.list.length).toEqual(10);
    });

    it("each Frame has a subframe with two values of 0", function() {
      bowlingFrame = new BowlingFrame();
      expect(bowlingFrame.subFrame.length).toEqual(2);
      expect(bowlingFrame.subFrame[0]).toEqual(0);
      expect(bowlingFrame.subFrame[1]).toEqual(0);
    });
  });

});