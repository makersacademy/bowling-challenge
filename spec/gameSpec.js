describe("game", function() {

it("totals ten frames with ten spares", function() {
    game = new Game()
    for (i = 1; i < 12; i++) {
      eval("frame" + i + "= new Frame()");
      eval("frame" + i + ".add_bowl(1)");
      eval("frame" + i + ".add_bowl(9)");
    };
    game.addFrames(frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9, frame10, frame11);
    expect(game.score()).toEqual(110);
  });

it("totals ten frames with different ten spares", function() {
    game = new Game()
    for (i = 1; i < 12; i++) {
      eval("frame" + i + "= new Frame()");
      eval("frame" + i + ".add_bowl(6)");
      eval("frame" + i + ".add_bowl(4)");
    };
    game.addFrames(frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9, frame10, frame11);
    expect(game.score()).toEqual(160);
  });

it("totals 12 strikes", function() {
    game = new Game()
    for (i = 1; i < 11; i++) {
      eval("frame" + i + "= new Frame()");
      eval("frame" + i + ".add_bowl(10)");
      eval("frame" + i + ".add_bowl(0)");
    };
    bonusrolls = new Frame()
    bonusrolls.add_bowl(10)
    bonusrolls.add_bowl(10)

    game.addFrames(frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9, frame10, bonusrolls);
    expect(game.score()).toEqual(300);
  });

});