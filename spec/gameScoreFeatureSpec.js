describe("FEATURE: Game", function() {

  it("totals the sample game provided", function() {
    game = new Game()
    frame1 = new Frame();
    frame1.add_bowl(1);
    frame1.add_bowl(4);

    frame2 = new Frame();
    frame2.add_bowl(4);
    frame2.add_bowl(5);

    frame3 = new Frame();
    frame3.add_bowl(6);
    frame3.add_bowl(4);

    frame4 = new Frame();
    frame4.add_bowl(5);
    frame4.add_bowl(5);

    frame5 = new Frame();
    frame5.add_bowl(10);

    frame6 = new Frame();
    frame6.add_bowl(0);
    frame6.add_bowl(1);

    frame7 = new Frame();
    frame7.add_bowl(7);
    frame7.add_bowl(3);

    frame8 = new Frame();
    frame8.add_bowl(6);
    frame8.add_bowl(4);

    frame9 = new Frame();
    frame9.add_bowl(10);

    frame10 = new Frame();
    frame10.add_bowl(2);
    frame10.add_bowl(8);

    bonuses = new Frame();
    bonuses.add_bowl(6);

    game.addFrames(frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9, frame10, bonuses);
    expect(game.score()).toEqual(133);
  });

  it("raises an error if bonus frame is given when not earnt", function() {
    game = new Game()
    frame1 = new Frame();
    frame1.add_bowl(1);
    frame1.add_bowl(4);

    frame2 = new Frame();
    frame2.add_bowl(4);
    frame2.add_bowl(5);

    frame3 = new Frame();
    frame3.add_bowl(6);
    frame3.add_bowl(4);

    frame4 = new Frame();
    frame4.add_bowl(5);
    frame4.add_bowl(5);

    frame5 = new Frame();
    frame5.add_bowl(10);

    frame6 = new Frame();
    frame6.add_bowl(0);
    frame6.add_bowl(1);

    frame7 = new Frame();
    frame7.add_bowl(7);
    frame7.add_bowl(3);

    frame8 = new Frame();
    frame8.add_bowl(6);
    frame8.add_bowl(4);

    frame9 = new Frame();
    frame9.add_bowl(10);

    frame10 = new Frame();
    frame10.add_bowl(2);
    frame10.add_bowl(2);

    bonuses = new Frame();
    bonuses.add_bowl(6);

    game.addFrames(frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9, frame10, bonuses);

    expect(function() {
        game.score() } ).toThrowError("You cannot add bonuses as you did not strike or spare in your final frame!");
  });

it("returns PERFECT if perfect game", function() {
    game = new Game()
    frame1 = new Frame();
    frame1.add_bowl(10);

    frame2 = new Frame();
    frame2.add_bowl(10);

    frame3 = new Frame();
    frame3.add_bowl(10);

    frame4 = new Frame();
    frame4.add_bowl(10);

    frame5 = new Frame();
    frame5.add_bowl(10);

    frame6 = new Frame();
    frame6.add_bowl(10);

    frame7 = new Frame();
    frame7.add_bowl(10);

    frame8 = new Frame();
    frame8.add_bowl(10);

    frame9 = new Frame();
    frame9.add_bowl(10);

    frame10 = new Frame();
    frame10.add_bowl(10);

    bonuses = new Frame();
    bonuses.add_bowl(10);
    bonuses.add_bowl(10);

    game.addFrames(frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9, frame10, bonuses);
    expect(game.score()).toEqual("PERFECT GAME!");
});

it("returns GUTTER GAME if no pins hit", function() {
    game = new Game()
    frame1 = new Frame();
    frame1.add_bowl(0);
    frame1.add_bowl(0);

    frame2 = new Frame();
    frame2.add_bowl(0);
    frame2.add_bowl(0);

    frame3 = new Frame();
    frame3.add_bowl(0);
    frame3.add_bowl(0);

    frame4 = new Frame();
    frame4.add_bowl(0);
    frame4.add_bowl(0);

    frame5 = new Frame();
    frame5.add_bowl(0);
    frame5.add_bowl(0);

    frame6 = new Frame();
    frame6.add_bowl(0);
    frame6.add_bowl(0);

    frame7 = new Frame();
    frame7.add_bowl(0);
    frame7.add_bowl(0);

    frame8 = new Frame();
    frame8.add_bowl(0);
    frame8.add_bowl(0);

    frame9 = new Frame();
    frame9.add_bowl(0);
    frame9.add_bowl(0);

    frame10 = new Frame();
    frame10.add_bowl(0);
    frame10.add_bowl(0);

    game.addFrames(frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9, frame10);

    expect(game.score()).toEqual("GUTTER GAME!");
});

});