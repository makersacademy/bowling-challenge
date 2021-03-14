describe('BowlingFrame', function() {
	beforeEach( function() {
		frame = new BowlingFrame();
	});

	describe('#roll', function() {
		it('should change the number of pins', function() {

			frame.roll(5);
			expect(frame.pinCount).toBe(5);
		});

		it('should record each roll', function() {
			
			frame.roll(5);
			frame.roll(2);
			expect(frame.recordRoll.length).toBe(2);
		});

		it('only allow two rolls', function() {
			frame.roll(1);
			frame.roll(1);
			expect(frame.roll(3)).toBe("Can't roll!")
		});

		it('should not roll after a strike', function() {
			frame.roll(10);
			expect(frame.roll()).toBe("Can't roll!")
		});
	});
});

