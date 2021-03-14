describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("scores correctly for wiki sample game", function() {
    let frame = new Frame
    frame.addRoll(1)
    frame.addRoll(4)
    game.addFrame(frame)
    let frame1 = new Frame
    frame1.addRoll(4)
    frame1.addRoll(5)
    game.addFrame(frame1)
    let frame2 = new Frame
    frame2.addRoll(6)
    frame2.addRoll(4)
    game.addFrame(frame2)
    let frame3 = new Frame
    frame3.addRoll(5)
    frame3.addRoll(5)
    game.addFrame(frame3)
    let frame4 = new Frame
    frame4.addRoll(10)
    game.addFrame(frame4)
    let frame5 = new Frame
    frame5.addRoll(0)
    frame5.addRoll(1)
    game.addFrame(frame5)
    let frame6 = new Frame
    frame6.addRoll(7)
    frame6.addRoll(3)
    game.addFrame(frame6)
    let frame7 = new Frame
    frame7.addRoll(6)
    frame7.addRoll(4)
    game.addFrame(frame7)
    let frame8 = new Frame
    frame8.addRoll(10)
    game.addFrame(frame8)
    let frame9 = new Frame
    frame9.addRoll(2)
    frame9.addRoll(8)
    frame9.addRoll(6)
    game.addFrame(frame9)
    expect(game.getTotalScore()).toEqual(133)
  });

  it("scores correctly for perfect game", function() {
    let i
    for(i = 0; i < 9; i++){
      let frame = new Frame
      frame.addRoll(10)
      game.addFrame(frame)
    }
    let final_frame = new Frame
    for(i = 0; i < 3; i++){
      final_frame.addRoll(10)
    }
    game.addFrame(final_frame)
    expect(game.getTotalScore()).toEqual(300)
  });

});
