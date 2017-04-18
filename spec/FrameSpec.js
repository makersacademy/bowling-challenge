	describe('Frame', function() {

		var frame;

		beforeEach(function() {
			frame = new Frame();
		});

		it('should start a frame with ten pins up ', function() {
			expect(frame.pins).toEqual(10);
		});


		it('the first roll of a frame has a maximum score of 10', function() {
			spyOn(Math,'round').and.returnValue(10)
			frame.firstBowl(frame.randomBowl())
			expect(frame.score).toEqual([10])
		});
		
		it('second roll has a maximum score of the remaining pins', function() {
			frame.firstBowl(5)
			expect(frame.pins).toEqual(5)
		});

		it('a player can roll a strike', function() {
			frame.firstBowl(10)
			expect(frame.isStrike()).toEqual(true)
		});
	
	});

