describe('Bowling', function() {
  beforeEach(function() {
    bowling = new Bowling();
  });

  it('adds the number of pins knocked down to the score', function() {
    bowling.roll(5);
    bowling.roll(4);
    expect(bowling.score).toEqual(9);
  });
});
