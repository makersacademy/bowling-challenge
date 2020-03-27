describe('Scorecard', function(){
	var scorecard; 
	var frame;

	beforeEach(function(){
		scorecard = new Scorecard();
		frame = new Frame(5);
	});
	it('has frames',function(){
		expect(scorecard.frames()).toEqual([]);
	});
	it('can add frame', function(){
		scorecard.add(frame);
		expect(scorecard.frames()).toEqual([frame]);
	})
	it('can calculate total score',function(){
		frame.add(4);
		frame.bonus(0);
		scorecard.add(frame);
		expect(scorecard.total()).toEqual(9);
	})
})