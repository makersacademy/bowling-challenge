describe('Pins', function() {

  var pins;

  beforeEach(function() {
    pins = new Pins();
  });

  it('returns random number from 0 to 10', function() {
    expect(pins.pinsDownFirstThrow).toEqual(jasmine.any(Number));
  });

  it('second throw does not exceed 10 pins', function() {
    expect(pins.pinsDownFirstThrow + pins.pinsDownSecondThrow()).toBeLessThan(11);
  });
});
