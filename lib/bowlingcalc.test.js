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
});