describe("Scorecard", function() {
	var scorecard; 
	var frame;

	beforeEach(function() {
		scorecard = new Scorecard();
		frame = new Frame();
	});

	it("should add a frame", function() {
		scorecard.addFrame(frame);
		expect(scorecard.frames.includes(frame)).toBe(true);
	});

	it("should return true for final frame", function() {
		for (var i = 1; i < 10; i ++) {
			scorecard.addFrame(frame);
		}
		expect(scorecard.isFinalFrame()).toBe(true);
	});

	describe("scores", function() {
		it("should return 0 for gutter game", function() {
			for (var i = 1; i < 11; i ++) {
				frame.roll(0);
				frame.roll(0);
				scorecard.addFrame(frame);
			}
			expect(scorecard.finalScore()).toEqual(0);
		});

		it("should return 300 for perfect game", function() {
			for (var i = 1; i < 10; i ++) {
				var f = new Frame();
				f.roll(10);
				scorecard.addFrame(f);
			}
			var f10 = new Frame(true);
			f10.roll(10);
			f10.roll(10);
			f10.roll(10);
			scorecard.addFrame(f10);
			expect(scorecard.finalScore()).toEqual(300);
		});

		it("should return cumulative score of 15 for game: F1 - strike, F2 - 2, 3", function() {
			var f1 = new Frame();
			var f2 = new Frame();

			f1.roll(10);
			f2.roll(2);
			f2.roll(3);
    
			scorecard.addFrame(f1);
			scorecard.addFrame(f2);

			expect(scorecard.getCumulativeScore(1)).toEqual(15);
		});

		it("should return cumulative score of 12 for game: F1 - spare, F2 - 2, 3", function() {
			var f1 = new Frame();
			var f2 = new Frame();

			f1.roll(8);
			f1.roll(2);
			f2.roll(2);
			f2.roll(3);
    
			scorecard.addFrame(f1);
			scorecard.addFrame(f2);

			expect(scorecard.getCumulativeScore(1)).toEqual(12);
		});
	});
  
});