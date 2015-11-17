describe('Pin', function() {
	
	var pin;
	var pins = 10;
	var pinsDown = 6;

	beforeEach(function() {
		pin = new Pin();
	});
	
	describe('#pins', function() {
		it('has 10 pins on initialization', function() {
			expect(pin.currentPins()).toBe(pins);
		});
	});

	describe('#pinsDown', function() {
		it('knocks down a given number of pins', function() {
			pin.pinsDown(pinsDown);
			expect(pin.currentPins()).toBe(pins - pinsDown);
		});

		it('sets a minimum value of current pins to 0', function() {
			for (var i = 0; i < 2; i++) {
				pin.pinsDown(pinsDown);
			}
			expect(pin.currentPins()).toBeGreaterThan(-1);
		});
	});
	describe('#reset', function() {
		it('#reset', function() {
			expect(pin.resetPins()).toBe(pins);
		});
	});
});