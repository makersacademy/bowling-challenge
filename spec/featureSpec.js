describe("features", function() {
  var frame, game, bonus;

  beforeEach(function() {
    bonusKlass = Bonus;
    frameKlass = Frame;
    game = new Game(frameKlass, 10, bonusKlass);
  });

  it("records additional bowls in individual frames", function() {
    for(var i=0; i < 20; i++) {
      game.bowl(0);
    }
    expect(game.frames[6].getScoreCard()).toEqual([0,0]);
  });

  describe("scoring a strike", function() {
    beforeEach(function() {
      game.bowl(10);
    });

    it("awards a bonus of 2 bowls", function() {
      expect(game.frames[0].bonus.numberOfBowls).toBe(2);
    });

    it("adds the bowling score of the next frame to the bonus", function() {
      game.bowl(1);
      expect(game.frames[0].bonus.getTotal()).toEqual(1);
    });

    it("adds the bowling score of the next 2 frames to the bonus", function() {
      game.bowl(1);
      game.bowl(3);
      expect(game.frames[0].bonus.getTotal()).toEqual(4);
    });

    it("does not add more than 2 bowls to the bonus", function() {
      game.bowl(1);
      game.bowl(2);
      game.bowl(3);
      expect(game.frames[0].bonus.getTotal()).toEqual(3);
    });
  });

  describe("scoring a spare", function() {
    beforeEach(function() {
      game.bowl(2);
      game.bowl(8);
    });

    it("awards a bonus of 1 bowl", function() {
      expect(game.frames[0].bonus.numberOfBowls).toBe(1);
    });

    it("adds the bowling score of the next frame to the bonus", function() {
      game.bowl(1)
      expect(game.frames[0].bonus.getTotal()).toEqual(1);
    });

    it("does not add more than 1 bowl to the bonus", function() {
      game.bowl(1);
      game.bowl(2);
      expect(game.frames[0].bonus.getTotal()).toEqual(1);
    });
  });

  describe("a top scoring game", function() {
    it("returns a total score of 300", function() {
      for (var i = 0; i < 12; i++) { game.bowl(10) };
      expect(game.calcTotalScore()).toEqual(300);
    })
  });
});
