describe('Pins', function() {

  beforeEach(function() {
    pins = new Pins();
  });

  it('should start with 10 pins', function() {
    expect(pins.pinCount).toEqual(10);
  });

});
