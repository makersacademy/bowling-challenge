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
			expect(bowling.frames[0][0] + bowling.frames[0][1]).toBeLessThan(11);
		});
	});

	 describe('a strike', function() {
		it('shows an X when a strike is thrown', function() {
			bowling.frames = [[10,0]]
			bowling.convertFrames();
			expect(bowling.framesSymbols).toEqual([['X','-']])
		});
	});

	describe('a spare', function() {
		it('shows a "/" when a spare is thrown', function() {
			bowling.frames = [[3,7]];
			bowling.convertFrames();
			expect(bowling.framesSymbols).toEqual([[3,'/']]);
		});
	});
});
