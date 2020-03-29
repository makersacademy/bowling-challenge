describe('Scorecard', function(){
	var scorecard; 
	var frame;

	beforeEach(function(){
		scorecard = new Scorecard();
		frame = new Frame(5);
		scorecard.add(frame);
	});

	describe('frames', function(){
		it('can add frame', function(){
			expect(scorecard.frames().length).toEqual(1);
		});
		describe('frame completion', function(){
			it('knows when a frame is incomplete', function(){
					expect(scorecard._frames[0].completed()).toEqual(false);
				});
			it('knows when frame is completed',function(){
				let firstFrame = scorecard._frames[0];
				firstFrame.frame.add(4)
				expect(firstFrame.completed()).toBe(true);
			});
		});
	});

	describe('total', function(){
		it('can calculate total score',function(){
			frame.add(4);
			expect(scorecard.total()).toEqual(9);
		});
		it('can give total at a specific frame', function(){
			frame.add(4);
			frame = new Frame(3);
			scorecard.add(frame);
			frame.add(4)
			expect(scorecard.total(1)).toEqual(9);
		});
	});
});