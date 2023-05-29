const scoreCalculator = require('./bowlingcalc');


describe('Scoring bowling', function() {
  it("Returns a score of 0 if all gutter balls", function() {
    const rolls = Array(20).fill(0)
    const result = scoreCalculator(rolls);
    expect(result).toBe(0);
  });
  it("Returns a score of 20 if all singles rolled", function() {
    const rolls = Array(20).fill(1)
    const result = scoreCalculator(rolls);
    expect(result).toBe(20);
  });
  it("Returns a correct score if the user rolls a spare", function() {
    const rolls = [
      5, 5,
      2, 3,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
    ];

    const result = scoreCalculator(rolls);
    expect(result).toBe(17);
  });
  it("Returns a correct score if the user rolls a stirke", function() {
    const rolls = [
      10,
      2, 3,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
      0, 0,
    ];

    const result = scoreCalculator(rolls);
    expect(result).toBe(20);
  });
});