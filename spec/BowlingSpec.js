describe('Bowling', function() {
	var bowling;

	beforeEach(function() {
		bowling = new Bowling();
	});
	
	describe('a frame', function() {
		it('displays a number between 0 and 10 with every roll', function() {
			expect(bowling.rollOne()).toBeGreaterThan(-1);
			expect(bowling.rollOne()).toBeLessThan(11);
		});
		it('two rolls in a frame never exceed 10', function() {
			bowling.rollOne();
			bowling.rollTwo();
			expect(bowling.frame[0] + bowling.frame[1]).toBeLessThan(11);
		});
	});

	describe('a strike', function() {
		it('shows an X when a strike is thrown', function() {
			bowling.frame = [10, 0];
			bowling.checkStrike();
			expect(bowling.frame).toEqual(['X','-'])
		});
	});

	describe('a spare', function() {
		it('shows a "/" when a spare is thrown', function() {
			bowling.frame = [3,7];
			bowling.checkSpare();
			expect(bowling.frame).toEqual([3,'/']);
		});
	});
});
