describe('Bowling', function() {
  var frames

  beforeEach(function() {
    bowling = new Bowling();
  });

  it('frames start off as an empty array', function() {
    expect(bowling.frames.length).toBe(0);
  });

});
