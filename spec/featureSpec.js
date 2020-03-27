describe('Scorecard', function(){
	var scorecard; 

	beforeEach(function(){
		scorecard = new Scorecard();
	});

	it('has frames',function(){
		expect(scorecard.frames()).toEqual([]);
	});

})