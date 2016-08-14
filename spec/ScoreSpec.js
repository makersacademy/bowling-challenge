describe("Score", function() {
  var game;
  var frame;
  var score;

  beforeEach(function() {
    game = new Game();
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

  describe("#getFrameScores", function(){
    it("gets scores of a specific frame", function(){
      score.frameScores = [{first: 2, second: 3}, {first: 5, second: 4}];
      expect(score.getFrameScores(2)).toEqual({first: 5, second: 4});
    });
  });

  describe("#getFrameTotal", function(){
    it("sums up frame score", function(){
      score.frameScores = [{first: 2, second: 3}, {first: 5, second: 4}];
      expect(score.getFrameTotal(2)).toEqual(9);
    });
  });

  // describe("#updateTotal", function(){
  //   it ("updates game total with frame scores", function(){
  //     score.frameScores = [{first: 2, second: 3}]
  //     expect()
  //   });
  // });

  // describe("#getGameTotal", function(){
  //   it("sums up frame totals", function(){
  //     score.frameScores = [{first: 2, second: 3}, {first: 5, second: 4}];
  //     expect(score.getGameTotal()).toEqual(14);
  //   });
  // });

});
