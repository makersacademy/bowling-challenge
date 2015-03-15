describe ("Game", function() {

  beforeEach(function() {
    game = new Game;
    frame = jasmine.createSpyObj('frame', ['score']);
  });

  it("has no frames to start", function() {
    expect(game.allFrames).toEqual([]);
  });

  it("can add frames", function() {
    game.addFrame(frame);
    expect(game.allFrames).toEqual([frame]);
  });

  it("can calculate total score of frames added", function() {
    frame1 = new Frame;
    frame2 = new Frame;
    frame1.roll(5,2);
    frame2.roll(6,3);
    game.addFrame(frame1);
    game.addFrame(frame2);
    expect(game.totalScore()).toEqual(16);
  });

  it("can add bonuses when a spare has been rolled previously", function() {
    frame1 = new Frame;
    frame2 = new Frame;
    frame1.roll(5,5);
    frame2.roll(8,1);
    game.addFrame(frame1);
    game.addFrame(frame2);
    expect(frame1.score).toBe(18);
    expect(game.totalScore()).toBe(27);
  });

  it("can add bonuses when a strike has been rolled", function() {
    frame1 = new Frame;
    frame2 = new Frame;
    frame1.roll(10);
    frame2.roll(8,1);
    game.addFrame(frame1);
    game.addFrame(frame2);
    expect(frame1.score).toBe(19);
    expect(game.totalScore()).toBe(28);
  });

  it("can calculate the impact of consecutive strikes correctly", function() {
    strikeFrame = new Frame;
    strikeFrame.roll(10);
    strikeFrame2 = new Frame;
    strikeFrame2.roll(10);
    eightFrame = new Frame;
    eightFrame.roll(5,3);
    nineFrame = new Frame;
    nineFrame.roll(6,3);
    game.addFrame(strikeFrame);
    game.addFrame(strikeFrame2);
    game.addFrame(eightFrame);
    game.addFrame(nineFrame);
    expect(game.totalScore()).toBe(60);
  });

  it("can calculate the score of the given example", function() {
    testFrame1 = new Frame;
    testFrame2 = new Frame;
    testFrame3 = new Frame;
    testFrame4 = new Frame;
    testFrame5 = new Frame;
    testFrame6 = new Frame;
    testFrame7 = new Frame;
    testFrame8 = new Frame;
    testFrame9 = new Frame;
    testFrame10 = new Frame;
    testSpareBonus = new Frame;
    testFrame1.roll(1, 4);
    testFrame2.roll(4, 5);
    testFrame3.roll(6, 4);
    testFrame4.roll(5, 5);
    testFrame5.roll(10);
    testFrame6.roll(0, 1);
    testFrame7.roll(7, 3);
    testFrame8.roll(6, 4);
    testFrame9.roll(10);
    testFrame10.roll(2, 8);
    testSpareBonus.roll(6, 0);
    game.addFrame(testFrame1);
    game.addFrame(testFrame2);
    game.addFrame(testFrame3);
    game.addFrame(testFrame4);
    game.addFrame(testFrame5);
    game.addFrame(testFrame6);
    game.addFrame(testFrame7);
    game.addFrame(testFrame8);
    game.addFrame(testFrame9);
    game.addFrame(testFrame10);
    game.addFrame(testSpareBonus);
    expect(game.totalScore()).toBe(133);
  });


});