describe('Scorer', function() {

	var scorer;

	describe('start of a game', function() {
		scorer = new Scorer();
		var frame;
		for (i = 0; i < 9; i++) {
			frame = new NormalFrame();
			scorer.loadFrame(frame);
		};

		it('should accept 9 normal frames', function() {
			expect(scorer.framesCount()).toEqual(9);
		});

		it('should have a total score of 0 when game starts', function() {
			expect(scorer.totalScore).toEqual(0);
		});

		it('should accept a ball', function() {
			ball = new Ball();
			ball.setScore(3)
			scorer.bowl(ball);
			expect(scorer.frameOneScore).toEqual(3);
			expect(scorer.totalScore).toEqual(3);
		});

	});

	describe('frames one to nine', function() {

		describe('scoring a game with no strikes or spares', function() {

			xit('accepts a ball', function() {
				ballOne = new Ball();
				ballOne.setScore(3);

				Scorer()
				expect(totalScore);
			});

		});

	});

});