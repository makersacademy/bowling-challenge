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
	});
	it('can calculate total score',function(){
		frame.add(4);
		frame.bonus(0);
		scorecard.add(frame);
		expect(scorecard.total()).toEqual(9);
	});
	it("can end game", function(){
		scorecard.add(frame);
		scorecard.endGame();
		expect(scorecard._gameOver).toBe(true);
		expect(function(){ scorecard.add(new Frame()); }).toThrowError('Game Over');
	});
	describe('Bonus', function(){
		it("can add bonus after the end of the game", function(){
			scorecard.endGame();
			scorecard.bonus(10);
			expect(scorecard._sum).toEqual(10);
		});
		it('prevents adding bonus during the game', function(){
			expect(function(){ scorecard.bonus(10); }).toThrowError('Game ongoing, bonus error');
		})
	});
});