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

    it("awards a bonus", function() {
      expect(game.frames[0].bonus).not.toBe(null);
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




});
