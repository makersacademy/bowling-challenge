describe("Frame", function() {
  var frame1,
      frame2,
      frame3,
      frame4,
      frame5,
      frame6,
      frame7,
      frame8,
      frame9,
      frame10;
});

beforeEach(function() {
  for (var i = 1; i < 11; i++) {
    window["frame"+i] = new Frame();
  }
});

it("should have a starting firstRoll score of 0", function() {
  expect(frame1.rollOne).toEqual(0)
});
it("should have a starting secondRoll score of 0", function() {
  expect(frame1.rollTwo).toEqual(0)
});

describe("firstRoll", function() {
  it("should store given score in rollOne", function() {
    frame1.firstRoll(4)
    expect(frame1.rollOne).toEqual(4)
  });
});

describe("secondRoll", function() {
  it("should store given score in rollTwo", function() {
    frame1.secondRoll(5);
    expect(frame1.rollTwo).toEqual(5);
  });
  it("should not be rolled if rollOne was a strike", function() {
    frame1.firstRoll(10);
    expect(function() { frame1.secondRoll(2) }).toThrow("First roll was a strike, cannot roll a second during this frame.");
  });
});

describe("_isTenthFrame", function() {
  beforeEach(function() {
    frame10._tenthFrame();
  });

  it("when true, should allow a second roll after a strike", function() {
    expect(frame10._isTenthFrame).toEqual(true);
    frame10.firstRoll(10);
    expect(function() { frame10.secondRoll(10) }).not.toThrow("First roll was a strike, cannot roll a second during this frame.");
  });
  it("should allow a third roll after a strike", function() {
    frame10.firstRoll(10);
    frame10.secondRoll(10);
    frame10.bonusRoll(10);
    expect(frame10.frameBonus).toEqual(10);
  });
  it("should allow a third roll after a spare", function() {
    frame10.firstRoll(5);
    frame10.secondRoll(5);
    frame10.bonusRoll(3);
    expect(frame10.frameBonus).toEqual(3);
  });
});

describe("_isStrike", function() {
  it("should return true if firstRoll is 10", function() {
    frame1.firstRoll(10);
    expect(frame1._isStrike()).toBe(true);
  });
});
describe("_isSpare", function() {
  it("should return true if rollOne and rollTwo add to 10", function() {
    frame1.firstRoll(8);
    frame1.secondRoll(2);
    expect(frame1._isSpare()).toBe(true);
  });
});
