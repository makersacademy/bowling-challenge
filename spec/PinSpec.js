describe('Pin', function() {

  var pin;

  beforeEach (function() {
    pin = new Pin();
  });

  it ('should be standing when initialised', function() {
    expect(pin.standing).toEqual(true);
  });

  it ('should be able to fall', function () {
    pin.fall();
    expect(pin.standing).toEqual(false);
  });

  it ('should know when is standing', function () {
    expect(pin.state()).toBe('standing');
  });

  it ('should know when it has been knocked down', function () {
    pin.fall();
    expect(pin.state()).toBe('knocked down');
  });

});

