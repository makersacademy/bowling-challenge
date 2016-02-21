describe('Bowling', function() {

	var bowling;

	beforeEach(function() {
		bowling = new Bowling();
	});

	it('should start a game with ten pins up ', function() {
		expect(bowling.pins).toEqual(10);
	});

	it('should start the game with a score of 0', function() {
		expect(bowling.totalScore).toEqual(0);
	});

	it('the first roll of a frame has a maximum score of 10', function() {
		spyOn(Math,'floor').and.returnValue(10)
		bowling.roll()
		expect(bowling.frameScore).toEqual(10)
	});
		


});




