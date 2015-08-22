describe('Pins', function() {
  var pin;

  beforeEach(function() {
    pin = new Pin();
  });

  describe('each new frame initializes with', function() {
    it('10 pins to begin with', function() {
      expect(pin.number).toEqual(10)
    });
  });



});