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

	it("can end game", function(){
		scorecard.endGame();
		expect(scorecard._gameOver).toBe(true);
		expect(function(){ scorecard.add(new Frame()); }).toThrowError('Game Over');
	});

	describe('total', function(){
		it("throw error when frame not completed", function(){
			scorecard.add(frame);
			expect(function(){ scorecard.total(); }).toThrowError('Incomplete frames');
		});
		it('can calculate total score',function(){
			let firstFrame = scorecard._frames[0];
			firstFrame.frame.add(4);
			expect(scorecard.total()).toEqual(9);
		});
	});
});