describe ("Bowling", function() {
	var bowling;

	beforeEach (function(){
		bowling = new Bowling();
	});

	it('starts with a total of 0', function() {
		expect(bowling.total).toEqual(0);
	});
});
