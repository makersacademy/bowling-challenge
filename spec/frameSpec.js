describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("can record a roll", function() {
    frame.roll(1);
    expect(frame.firstRoll()).toEqual(1);
  });

  it("can record two rolls", function() {
    frame.roll(1);
    frame.roll(2);
    expect(frame.secondRoll()).toEqual(2);
  });

  it("can record a strike", function() {
    frame.roll(10);
    expect(frame.isStrike).toEqual(true);
  });

  it("can record a spare", function() {
    frame.roll(1);
    frame.roll(9);
    expect(frame.isSpare).toEqual(true);
  });

  it("cannot have a frame that is both a spare and a strike", function() {
    frame.roll(10);
    expect(frame.isStrike).toEqual(true);
    expect(frame.isSpare).toEqual(false);
  });

  it("can record the sum of both rolls", function() {
    frame.roll(1);
    frame.roll(4);
    expect(frame.points()).toEqual(5);
  });

  it("can score a simple frame (no bonuses)", function() {
    frame.roll(1);
    frame.roll(4);
    expect(frame.score).toEqual(5);
  })

  it("can record a bonus", function() {
    frame.addBonus(1);
    expect(frame.bonus).toEqual(1);
  });

  it("can calculate a score as two rolls plus bonus", function() {
    frame.roll(1);
    frame.roll(9);
    frame.addBonus(1);
    frame.recordScore();
    expect(frame.score).toEqual(11);
  });

  it("knows when it's finished", function() {
    frame.roll(1);
    frame.roll(9);
    expect(frame.isFinished()).toEqual(true);
  })

});
