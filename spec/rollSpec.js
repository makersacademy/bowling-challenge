describe('Roll', function() {
	
	var roll;

	beforeEach(function() {
		roll = new Roll();
	});

	describe('#rollBall', function() {
		it('throws the ball and knocks down a random number of pins', function() {
			spyOn(Math, 'random').and.returnValue(0.4);
			expect(roll.rollBall()).toBe(5);
		});
	});

});