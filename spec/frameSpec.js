describe('Frame', function(){

	var frame;

	beforeEach(function(){
		frame = new Frame(1);
	});

	it('starts on roll 1', function(){
		expect(frame.roll).toBe(1);
	});
});