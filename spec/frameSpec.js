describe('Frame', function(){
	var frame; 
	beforeEach(function(){
		frame = new Frame(5);
	});
	describe('Strike', function(){
		it('knows when it is a strike', function(){
			frame = new Frame(10);
			expect(frame._isStrike()).toBe(true);
		});
	});
	describe('Spare', function(){
		it('knows when it is a spare', function(){
			frame.add(5);
			expect(frame._isSpare()).toBe(true);
		});
	});
	describe('Frame pinfalls', function(){
		it('can add second roll scores', function(){
			frame.add(5);
			expect(frame.pinfalls()).toBe(10);
		});
		it('prevents adding roll scores if second_roll unrecorded', function(){
			expect(function(){ frame.pinfalls(); }).toThrowError('expecting second roll score')
		});
		it('does not exceed 10', function(){
			expect(function(){ frame.add(10); }).toThrowError('Maximum possible score of each frame is 10.');
		});
	});
	describe('Frame Bonus', function(){
		it('can record bonus', function(){
			expect(frame._bonus).toEqual([]);
		});
		it('gives sum of bonus', function(){
			frame.add(5)
			frame.addBonus(10);
			expect(frame.bonus()).toEqual(10);
		});
		it('prevents total if is spare but received no bonus', function(){
			frame.add(5);
			expect(function(){ frame.total(); }).toThrowError('expect at least 1 bonus');
		});
		it("prevents total if is strike but received less than two bonus", function(){
			frame = new Frame(10);
			frame.addBonus(10);
			expect(function(){ frame.total(); }).toThrowError('expect at least 2 bonuses');
		});
	});
	describe('Frame Total', function(){
		it('gives the sum of pinfalls and bonus', function(){
			frame.add(0);
			expect(frame.total()).toBe(5);
		});
	});
});