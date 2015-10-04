describe('Bowling', function() {

  beforeEach(function() {
    bowling = new Bowling();
  });

  it ('has 10 pins', function() {
    expect(bowling.pins).toBe(10);
  });

  it ('can knock down pins', function() {
    bowling.roll(3);
    expect(bowling.pins).toBe(7);
    expect(bowling.fallenPins).toBe(3);
  });
});
