describe("features", function() {
  var frame, game, bonus;

  beforeEach(function() {
    bonusKlass = Bonus;
    frame = new Frame();
    game = new Game();
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
  });

});
