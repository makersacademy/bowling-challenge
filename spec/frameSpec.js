describe('Frame', function(){
	var frame; 
	beforeEach(function(){
		frame = new Frame(5);
	});
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
		it('has an initial value of null', function(){
			expect(frame.bonus()).toEqual(null);
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