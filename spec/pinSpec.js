describe('Pin', function() {
	
	var pin;
	var pins = 10;
	var pinsDown = 3;

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
	});
});