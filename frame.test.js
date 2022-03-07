const Frame = require('./frame');
const Roll = require('./roll');

describe("Frame class", () => {
  it("Test Frame class instantiation", () => {
    const frame = new Frame(1, [], 2, 5, 0, 0, 0, "");
    expect(frame).toBeInstanceOf(Frame);
  });

  it("Returns id", () => {
    const frame = new Frame(1, [], 2, 5, 0, 0, 0, "");
    expect(frame.getId()).toEqual(1);
  });

  it("Returns rolls", () => {
    const roll1 = new Roll(1, 1, 1);
    const roll2 = new Roll(1, 2, 4); 
    const rolls = new Array(roll1, roll2);   
    const frame = new Frame(1, rolls, 2, 5, 0, 0, 0, "");
    expect(frame.getRolls().length).toEqual(2);
  });

  it("Sets id", () => {
    const frame = new Frame(1, [], 2, 5, 0, 0, 0, "");
    frame.setId(2);
    expect(frame.getId()).toEqual(2);
  });

  it("Sets rolls", () => {
    const frame = new Frame(1, [], 2, 5, 0, 0, 0, "");
    const roll1 = new Roll(1, 1, 1);
    const roll2 = new Roll(1, 2, 4);
    const rolls = new Array(roll1, roll2);   
    frame.setRolls(rolls);
    expect(frame.getRolls()).toEqual(rolls);
  });
  
  it("Add roll", () => {
    const frame = new Frame(1, [], 2, 5, 0, 0, 0, "");
    const roll1 = new Roll(1, 1, 1);
    //const roll2 = new Roll(1, 2, 4);
    frame.addRoll(roll1);
    const expectedRolls = new Array(roll1);   
    expect(frame.getRolls()).toEqual(expectedRolls);
  });

}); 
