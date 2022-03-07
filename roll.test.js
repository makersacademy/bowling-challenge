const Roll = require('./roll');

describe("Roll class", () => {
  it("Test Roll class instantiation", () => {
    const roll = new Roll(1, 1, 5);
    expect(roll).toBeInstanceOf(Roll);
  });

  it("Returns id", () => {
    const roll = new Roll(1, 1, 5);
    expect(roll.getId()).toEqual(1);
  });

  it("Returns frameId", () => {
    const roll = new Roll(1, 1, 5);
    expect(roll.getFrameId()).toEqual(1);
  });

  it("Returns score", () => {
    const roll = new Roll(1, 1, 5);
    expect(roll.getScore()).toEqual(5);
  });

  it("Sets id", () => {
    const roll = new Roll(1, 1, 5);
    roll.setId(2);
    expect(roll.getId()).toEqual(2);
  });

  it("Sets frameId", () => {
    const roll = new Roll(1, 1, 5);
    roll.setFrameId(2);
    expect(roll.getFrameId()).toEqual(2);
  });

  it("Sets score", () => {
    const roll = new Roll(1, 1, 5);
    roll.setScore(9);
    expect(roll.getScore()).toEqual(9);
  });

});
