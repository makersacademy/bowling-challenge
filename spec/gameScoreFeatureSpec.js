describe("FEATURE: Game", function() {

  it("totals ten frames with bonuses", function() {
    game = new Game()
    for (i = 1; i < 11; i++) {
      eval("frame" + i + "= new Frame()");
      eval("frame" + i + ".add_bowl(1)");
      eval("frame" + i + ".add_bowl(0)");
    };
    game.addFrames(frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9, frame10);
    expect(game.score()).toEqual(10);
  });

});