describe('Bowling', function() {
	var bowling;

	beforeEach(function() {
		bowling = new Bowling();
	});
	
	describe('a frame', function() {
		it('displays a number between 0 and 10 with every roll', function() {
			bowling.roll();
			expect(bowling.frame[0]).toBeGreaterThan(-1);
			expect(bowling.frame[0]).toBeLessThan(11);
		});
		it('two rolls in a frame never exceed 10', function() {
			bowling.roll();
			bowling.roll();
			expect(bowling.framesNumbers[0][0] + bowling.framesNumbers[0][1]).toBeLessThan(11);
		});
	});

});
