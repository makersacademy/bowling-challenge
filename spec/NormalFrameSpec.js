describe('Frame', function() {
	var normalframe;
	var ball;

	beforeEach(function() {
		normalframe = new NormalFrame();
		ball = new Ball();
	});

	it('should have 10 pins when created', function() {
		expect(normalframe.pinsStanding).toEqual(10);
	});

});