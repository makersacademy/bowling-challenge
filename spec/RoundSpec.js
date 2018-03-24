describe('Round', function() {
  let round;

  beforeEach(function() {
    round = new Round(0);
  });

  it('should have an inital score of 0', function() {
    expect(round._score).toEqual(0);
  });

  it('updates the round score with how many pins knocked down', function() {
    round = new Round(9);
    expect(round._score).toEqual(9);
  });

  it('throws an error if max number of pins are entered', function() {
    expect(function() {
      new Round(11);
    }).toThrowError('Max number of pins exceeded');
  });
});
