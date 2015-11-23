describe(Bowling, function() {

	var bowling; 
	var numFrames = 10;
	var smallFrames = 2;
	var smallBowling;

	beforeEach(function() {
		bowling = new Bowling(numFrames);
		smallBowling = new Bowling(smallFrames);
	});

	describe('#randomScore', function() {
		it('determines how many pins a user knocks down', function() {
			spyOn(Math, 'random').and.returnValue(0.9);
			bowling.randomScore();
			expect(bowling.score).toEqual(9);
		});
		it('determines how many pins a user knocks down on second go', 
			function() {
			spyOn(Math, 'random').and.returnValue(0.3);
			bowling.addRound();
			bowling.randomScore();
			expect(bowling.secondScore).toEqual(3);
		});
	});

	describe('#scoreString', function() {
		it('creates a string for the first score', function() {
			spyOn(Math, 'random').and.returnValue(0.5);
			bowling.randomScore();
			bowling.scoreString();
			expect(bowling.string).toEqual('__|05,');
		});
		it('creates a string for the second score', function() {
			spyOn(Math, 'random').and.returnValue(0.5);
			bowling.addRound();
			bowling.randomScore();
			bowling.scoreString();
			expect(bowling.string).toEqual('05|__');
		});
	});

	describe('#addRound', function() {
		it('changes the round count', function() {
			bowling.addRound();
			expect(bowling.round).toBe(1);
		});
	});

	describe('#addScore', function() {
		it('adds the rounds score to the score card', function() {
			spyOn(Math, 'random').and.returnValue(0.5);
			for (var i = 0; i < 2; i++) {
				bowling.randomScore();
				bowling.addRound();
			}
			bowling.addScore();
			expect(bowling.scoreCard).toEqual({0: [5,3]});
		});
	});

	describe('#bonusDue', function() {
		it('adds two if user gets a strike', function() {
			spyOn(Math, 'random').and.returnValue(0.99);
			for (var i = 0; i < 2; i++) {
				bowling.randomScore();
				bowling.addRound();
			}
			bowling.addScore();
			bowling.prevScore();
			bowling.newFrame();
			bowling.bonusDue();
			expect(bowling.bonus).toEqual(2);
		});
	});

	describe('#addTotal', function() {
		it('logs the previous score', function() {
			spyOn(Math, 'random').and.returnValue(0.5);
			bowling.randomScore();
			bowling.addRound();
			bowling.randomScore();
			bowling.prevScore();
			expect(bowling.previousScore).toEqual([5,3]);
		});
	});

	describe('#newFrame', function() {
		it('increases the frame count', function() {
			bowling.newFrame();
			expect(bowling.currentFrame).toEqual(1);
		});
	});

});