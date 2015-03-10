describe('Bowling', function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  it('starts with 10 pins standing', function() {
    expect(bowling.pins).toEqual(10);
  });

  it('pins can be knocked down', function() {
    bowling.pinsHit(2);
    expect(bowling.pins).toEqual(8);
  });

  it('can have a strike', function() {
    bowling.pinsHit(10);
    expect(bowling.strike).toBe(true);
  });

});