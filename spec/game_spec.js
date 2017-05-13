describe("Bowling Game", function() {
  var game,
      currentframe;
  var rand = 4;

  var total = 0;

  beforeEach(function() {
    game = new Game();
    spyOn(Math, "floor").and.callFake(function() {
      return rand;
    });
  });

  it("set's up new game with 0 score", function() {
    expect(game.calculateTotalScore()).toEqual(0);
  });

  it("calculates total score of all completed frames", function() {
    for(var i = 0; i < 10; i++) {
      game.run();
    }
    expect(game.calculateTotalScore()).toEqual(72);
  });

  describe("Scoresheet", function() {
    it("returns each frame score as an array", function() {
      game.run();
      expect(game.getFrameTotal()).toEqual([8]);
    });

    it("return each roll score per frame as a 2 dimensional array", function() {
      for (var i = 0; i < 3; i++) {
        game.run();
      }
      expect(game.getScoreCard()).toEqual([[4,4], [4,4], [4,4]]);
    });

    describe("when a frame ends as a spare", function() {
      it("does not update the total until next frame", function() {
        rand = 5;
        game.run();
        expect(game.calculateTotalScore()).toEqual(0);
        rand = 2;
        game.run();
        expect(game.calculateTotalScore()).toEqual(16);
      });
    });
  });

  describe("when a frame ends as a strike", function() {
    it("does not update the total until the next frame", function() {
      rand = 10;
      game.run();
      expect(game.calculateTotalScore()).toEqual(0);
      rand = 5;
      game.run();
      expect(game.calculateTotalScore()).toEqual(20);
    });

    it ("does not update score if the next frame is a strike as well", function() {
      rand = 10;
      game.run();
      game.run();
      expect(game.calculateTotalScore()).toEqual(0);
      game.run();
      expect(game.calculateTotalScore()).toEqual(30);
    });
  });

});
