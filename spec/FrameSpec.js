describe('A frame of bowling', function() {

	var frame1;
	var frame2;
	var spare;
	var strike;
	var finalStrike;
	var finalSpare;

	describe('#total', function() {

		beforeEach(function() {
			frame1 = new Frame([1,3]);
			frame2 = new Frame([2,4]);
			spare = new Frame([5,5]);
			strike = new Frame([10,0]);
			finalStrike = new Frame([10,5,5]);
			finalSpare = new Frame([9,1,5]);
		});

		it('calculates the total score for two rolls', function() {
			expect(frame1.total(frame2, frame2)).toEqual(4);
		});
		it('calculates the total score for two rolls when first is a spare', function() {
			expect(spare.total(frame2, frame2)).toEqual(12);
		});
		it('calculates the total score for two rolls when first is a strike', function() {
			expect(strike.total(frame2, frame2)).toEqual(16);
		});
		it('calculates the total score for two strikes in a row', function() {
			expect(strike.total(strike, frame2)).toEqual(22);
		});
		it('calculates the total score for three strikes in a row', function() {
			expect(strike.total(strike, strike)).toEqual(30);
		});
		it('calculates the total score for a strike in final frame', function() {
			expect(finalStrike.total()).toEqual(20);
		});
		it('calculates the total score for a spare in final frame', function() {
			expect(finalSpare.total()).toEqual(15);
		});
		it('calculates the total score for a strike in penultimate frame', function() {
			expect(strike.total(finalStrike)).toEqual(25);
		});
	});
});
