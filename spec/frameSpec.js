describe('Frame', function(){

	var frame;

	beforeEach(function(){
		frame = new Frame(1);
	});

	it('starts with no rolls', function(){
		expect(frame.rolls.length).toBe(0);
		console.log(frame);
	});
});