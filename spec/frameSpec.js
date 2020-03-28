describe('Frame', function(){
	var frame; 
	beforeEach(function(){
		frame = new Frame(5);
	});
	describe('Strike', function(){
		it('has a default of false', function(){
			expect(frame._isStrike).toBe(false);
		})
		it('can record a strike', function(){
			frame = new Frame(10);
			frame.recordStrike();
			expect(frame._isStrike).toBe(true);
			expect(frame._pinfalls.second_roll).toEqual(0);
		})
		it('prevents record strike', function(){
			expect(function(){ frame.recordStrike(); }).toThrowError('Not a strike');
		})
	})
	describe('Spare', function(){
		it('has a default of false', function(){
			expect(frame._isSpare).toBe(false);
		})
		it('can record a spare', function(){
			frame.add(5);
			frame.recordSpare();
			expect(frame._isSpare).toBe(true);
		})
		it('prevents record spare when is strike', function(){
			spyOn(frame, '_isStrike').and.returnValue(true);
			expect(function(){ frame.recordSpare(); }).toThrowError("Not a Spare, but a Strike!");
		})
		it('prevents record spare when less than 10 pins down', function(){
			frame.add(3);
			expect(function(){ frame.recordSpare(); }).toThrowError('Not a Spare, less than 10 pins down');
		})
	})
	describe('Frame pinfalls', function(){
		it('has pinfalls score', function(){
			expect(frame.pinfalls()).toBe(5);
		});
		it('can add second roll scores', function(){
			frame.add(5);
			expect(frame.pinfalls()).toBe(10);
		})
		it('does not exceed 10', function(){
			expect(function(){ frame.add(10); }).toThrowError('Maximum possible score of each frame is 10.');
		});
	});
	describe('Frame Bonus', function(){
		it('has bonus score', function(){
			expect(frame.bonus()).toBeDefined();
		});
	});
	describe('Frame Total', function(){
		it('gives the sum of pinfalls and bonus', function(){
			spyOn(frame, 'bonus').and.returnValue(0);
			frame.add(0);
			expect(frame.total()).toBe(5);
		});
		it('prevents giving sum when frame unfinished',function(){
			spyOn(frame, 'bonus').and.returnValue(0);
			expect(function(){ frame.total(); }).toThrowError('Total score unavailable due to ongoing game.');
		})
	});
});