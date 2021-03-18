describe("Entire game run throughs", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("scores correctly for wiki sample game", function() {
    let frame = new Frame
    frame.addRoll(1, game)
    frame.addRoll(4, game)
    game.addFrame(frame)
    let frame1 = new Frame
    frame1.addRoll(4, game)
    frame1.addRoll(5, game)
    game.addFrame(frame1)
    let frame2 = new Frame
    frame2.addRoll(6, game)
    frame2.addRoll(4, game)
    game.addFrame(frame2)
    let frame3 = new Frame
    frame3.addRoll(5, game)
    frame3.addRoll(5, game)
    game.addFrame(frame3)
    let frame4 = new Frame
    frame4.addRoll(10, game)
    game.addFrame(frame4)
    let frame5 = new Frame
    frame5.addRoll(0, game)
    frame5.addRoll(1, game)
    game.addFrame(frame5)
    let frame6 = new Frame
    frame6.addRoll(7, game)
    frame6.addRoll(3, game)
    game.addFrame(frame6)
    let frame7 = new Frame
    frame7.addRoll(6, game)
    frame7.addRoll(4, game)
    game.addFrame(frame7)
    let frame8 = new Frame
    frame8.addRoll(10, game)
    game.addFrame(frame8)
    let frame9 = new Frame
    frame9.addRoll(2, game)
    frame9.addRoll(8, game)
    frame9.addRoll(6, game)
    game.addFrame(frame9)
    expect(game.getTotalScore()).toEqual(133)
  });

  it("scores correctly for perfect game", function() {
    let i
    for(i = 0; i < 9; i++){
      let frame = new Frame
      frame.addRoll(10, game)
      game.addFrame(frame)
    }
    let final_frame = new Frame
    for(i = 0; i < 3; i++){
      final_frame.addRoll(10, game)
    }
    game.addFrame(final_frame)
    expect(game.getTotalScore()).toEqual(300)
  });

});
