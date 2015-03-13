describe ("Pin", function() {

  var pin;

  beforeEach(function() {
    pin = new Pin;
  });

  it ("it should be standing when initialised", function() {
    expect(pin.standing).toEqual(true);
  });

  it ("should be able to fall", function() {
    pin.fall();
    expect(pin.standing).toEqual(false);
  });

  it ("it should know when it is not standing", function() {
    pin.fall();
    expect(pin.qwerty()).toEqual("not standing");
  });

});

