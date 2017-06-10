describe('Bowling', function() {
	var bowling;

	beforeEach(function() {
		bowling = new Bowling();
	});
	
	describe('a frame', function() {
		it('displays a number between 0 and 10 with every roll', function() {
			expect(bowling.roll()).toBeGreaterThan(-1);
			expect(bowling.roll()).toBeLessThan(11);
		});
	});
});
