describe('Bowling', function() {
  beforeEach(function() {
    bowling = new Bowling();
  });

  it('adds the number of pins knocked down to the score', function() {
    bowling.roll(5);
    bowling.roll(4);
    expect(bowling.score).toEqual(9);
  });

  it('ignores invalid input', function() {
    bowling.roll('dice');
    bowling.roll(-4);
    bowling.roll(100);
    expect(bowling.score).toEqual(0);
  });

  it('gives a bonus for a strike', function() {
    bowling.roll('x');
    bowling.roll(4);
    bowling.roll(4);
    expect(bowling.score).toEqual(26);
  });

  it('calculates the correct score for two consecutive strikes', function() {
    bowling.roll('x');
    bowling.roll('x');
    bowling.roll(4);
    bowling.roll(4);
    expect(bowling.score).toEqual(50);
  });
});
