describe('Bowling', function() {

  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  it('is started with 10 pins', function() {
    expect(bowling.game).toEqual(10);
  });

  it('can bowl a 1 (and get a score)', function() {
    expect(bowling.bowl).toEqual(9);
  });
});