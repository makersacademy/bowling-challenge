describe("Score", function() {
  var game;
  var frame;
  var score

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
    score = new Score();
  });

  describe("when first instantiated", function(){
    it("has a total of 0", function(){
      expect(score.total).toEqual(0);
    });

    it("has an empty hash of frame scores", function(){
      expect(score.frameScores).toEqual([]);
    });
  });

});
