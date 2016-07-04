describe('Frame', function() {

	beforeEach(function() {
		frame = new Frame;
	});

	describe('upon creation', function() {

		it('should initialise with a bonusScore of 0 points', function() {
			expect(frame.bonusScore).toEqual(0);
		});

		it('should initialise with a totalScore of 0 points', function() {
			expect(frame.totalScore).toBe(0);
		});

	});

	describe('during gameplay', function() {

		it('should know the score from Roll #1', function() {
			frame.takeRollOne(7);
			expect(frame.rollOneScore).toEqual(7);
		});

		it('should know if Roll #1 resulted in a strike', function() {
			frame.rollOneScore = 10;
			expect(frame._isAStrike()).toBe(true);
		});

		it('should automatically return a score of 0 for Roll #2 if Roll #1 resulted in a strike', function() {
			frame.takeRollOne(10);
			frame.takeRollTwo(7);
			expect(frame.rollTwoScore).toEqual(0);
		});

		it('should know the score from Roll #2', function() {
			frame.number = 2;
			frame.takeRollOne(3);
			frame.takeRollTwo(4);
			expect(frame.rollTwoScore).toEqual(4);
		});

		it('should know if Roll #1 and Roll #2 resulted in a spare', function() {
			frame.rollOneScore = 4;
			frame.rollTwoScore = 6;
			expect(frame._isASpare()).toBe(true);
		});

	});

	describe('during final frame', function() {

		beforeEach(function() {
			frame.number = 10;
		});

		it('should know if it is the final frame of the game', function() {
			expect(frame._isFinalFrame()).toBe(true);
		});

		it('should allow for Roll #2 even if Roll #1 resulted in a strike', function() {
			frame.takeRollOne(10);
			frame.takeRollTwo(7);
			expect(frame.rollTwoScore).toEqual(7);
		});

		it('if Roll #1 resulted in a strike, should allow for Roll #3', function() {
			frame.takeRollOne(10);
			frame.takeRollTwo(7);
			frame.takeBonusRoll(4);
			expect(frame.rollThreeScore).toEqual(4);
		});

		it('if Roll #1 and Roll #2 resulted in a spare, should allow for Roll #3', function() {
			frame.takeRollOne(5);
			frame.takeRollTwo(5);
			frame.takeBonusRoll(4);
			expect(frame.rollThreeScore).toEqual(4);
		});

		it('unless Player rolled a strike or spare, should not allow Roll #3', function() {
			frame.takeRollOne(5);
			frame.takeRollTwo(2);
			frame.takeBonusRoll(4);
			expect(frame.rollThreeScore).toEqual(0);
		});

		describe('after game has ended', function() {

			beforeEach(function() {
				game = new BowlingGame;
				game.setup();
			});

			it('should automatically assign 20 bonus points for frame if Player rolled three strikes in a row', function() {
				game.frames[1].takeRollOne(10);
				game.frames[2].takeRollOne(10);
				game.frames[3].takeRollOne(10);
				game.frames[1].calculateBonusScore();
				expect(game.frames[1].bonusScore).toEqual(20);
			});

			it('should calculate bonus points for frame if Player rolled two strikes in a row', function() {
				game.frames[1].takeRollOne(10);
				game.frames[2].takeRollOne(10);
				game.frames[3].takeRollOne(8);
				game.frames[1].calculateBonusScore();
				expect(game.frames[1].bonusScore).toEqual(18);
			});

			it('should calculate bonus points for frame if Player rolled a strike', function() {
				game.frames[1].takeRollOne(10);
				game.frames[2].takeRollOne(6);
				game.frames[2].takeRollTwo(3);
				game.frames[1].calculateBonusScore();
				expect(game.frames[1].bonusScore).toEqual(9);
			});

			it('should calculate bonus points for frame if Player rolled a spare', function() {
				game.frames[1].takeRollOne(5);
				game.frames[1].takeRollTwo(5);
				game.frames[2].takeRollOne(8);
				game.frames[1].calculateBonusScore();
				expect(game.frames[1].bonusScore).toEqual(8);
			});

			it('should calculate no bonus points if Player is not eligible', function() {
				game.frames[1].takeRollOne(5);
				game.frames[1].takeRollTwo(3);
				game.frames[2].takeRollOne(8);
				game.frames[1].calculateBonusScore();
				expect(game.frames[1].bonusScore).toEqual(0);
			});

		});

		describe('when dealing with final two frames', function() {

			beforeEach(function() {
				game = new BowlingGame;
				game.setup();
				frameTen = game.frames[9];
				frameNine = game.frames[8];
			});

			it('should calculate frame #9 bonus score', function() {
				frameNine.takeRollOne(6);
				frameNine.takeRollTwo(4);
				frameTen.takeRollOne(5);
				frameNine.calculateFrameNineBonusScore();
				expect(frameNine.bonusScore).toEqual(5);
			});

			it('should calculate frame #10 total score', function() {
				frameTen.takeRollOne(6);
				frameTen.takeRollTwo(4);
				frameTen.takeBonusRoll(8);
				frameTen.calculateTotalScore();
				expect(frameTen.totalScore).toEqual(18);
			});

		});

	});

});
