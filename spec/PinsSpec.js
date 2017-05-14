describe('Pins', function() {

  var pins;

  beforeEach(function() {
    pins = new Pins();
  });

  it('returns random number from 0 to 10', function() {
    expect(pins._pinsDown).toEqual(jasmine.any(Number));
  });
});
