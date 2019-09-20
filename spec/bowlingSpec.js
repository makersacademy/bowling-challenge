describe('Bowling', function() {
  var bowling;
  beforeEach(function() {
    bowling = new Bowling();
  });

  it('starts from zero points', function() {
    expect(bowling.score).toEqual(0);
  });



});
