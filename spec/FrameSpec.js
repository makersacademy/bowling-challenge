describe("Frame", function() {
  var game;
  var frame;

  beforeEach(function() {
    game = jasmine.createSpy('game');
    frameIndex = 0;
    frame = new Frame(game, frameIndex);
  });

  it("starts with zero rolls", function() {
    expect(frame.frameRolls).toEqual([0, 0]);
  });

  it("can add a roll", function() {
    frame.addRoll(1);
    expect(frame.frameRolls).toEqual([1, 0]);
  });

  it("can add two rolls", function() {
    frame.addRoll(1);
    frame.updateRollIndex();
    frame.addRoll(2);
    expect(frame.frameRolls).toEqual([1, 2]);
  });

  it("can calculate score for a normal frame", function() {
    frame.addRoll(1);
    frame.updateRollIndex();
    frame.addRoll(2);
    expect(frame.calculateFrameScore()).toEqual(3);
  });
});
