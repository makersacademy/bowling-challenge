describe("Bowling", function(){
	var bowling;

	beforeEach(function(){
		bowling = new Bowling();
	});


	it("starts with current score 0", function(){
		expect(bowling.currentScore).toEqual(0);
	});

	it("starts with round as 1", function(){
		expect(bowling.round).toEqual(1);
	});

	it("starts with roll number as 1", function(){
		expect(bowling.rollNumber).toEqual(1);
	});

	describe("#updateScore", function(){

		it("increase the score by pins hit", function(){
			bowling.updateScore(6);
			expect(bowling.currentScore).toEqual(6);
		});

		it("updates the lastHit", function(){
			bowling.updateScore(6);
			expect(bowling.lastHit).toEqual(6);
		});

		it("will call the changeRollNumber function", function(){
				spyOn(bowling, 'changeRollNumber');
				bowling.updateScore(6);
				expect(bowling.changeRollNumber).toHaveBeenCalled();
		});

		it("will call the changeRoundNumber function", function(){
				spyOn(bowling, 'changeRoundNumber');
				bowling.updateScore(6);
				expect(bowling.changeRoundNumber).toHaveBeenCalled();
		});

		it("when there is a spare, will get a bonus of the following round, 1st roll's, pin hits", function(){
			bowling.updateScore(6);
			bowling.updateScore(4);
			bowling.updateScore(6);
			expect(bowling.currentScore).toEqual(22);
		});

		it("when there is a strike, will get a bonus of the following round's pin hits", function(){
			bowling.updateScore(10);
			bowling.updateScore(7);
			bowling.updateScore(2);
			expect(bowling.currentScore).toEqual(28);
		});

		describe("when in the 10th (last) round", function(){

			it(" and get a spare", function(){
				bowling.round = 9;
				bowling.updateScore(5);
				bowling.updateScore(3);
				bowling.updateScore(4);
				bowling.updateScore(6);
				bowling.updateScore(6);
				expect(bowling.currentScore).toEqual(24);
			});

			it(" and don't get a spare or strike cannot play 3 rolls", function(){
				bowling.round = 9;
				bowling.updateScore(5);
				bowling.updateScore(3);
				bowling.updateScore(4);
				bowling.updateScore(5);
				bowling.updateScore(5);
				expect(bowling.currentScore).toEqual(17);
			});

		});

	});

	it("changes the rollNumber to 2 from 1", function(){
		bowling.changeRollNumber();
		expect(bowling.rollNumber).toEqual(2);
	});

	it("increases the round number if roll number is 2", function(){
		bowling.changeRollNumber();
		bowling.changeRoundNumber();
		expect(bowling.round).toEqual(2);
	});

	it("increases the round number if strike", function(){
		bowling.isStrike(10);
		bowling.changeRoundNumber();
		expect(bowling.round).toEqual(2);
	});

	it("will not increase the round number if roll number is 1", function(){
		bowling.changeRoundNumber();
		expect(bowling.round).toEqual(1);
	});

	it("will recognise a spare", function(){
		bowling.updateScore(6);
		bowling.isSpare(4);
		expect(bowling.spare).toEqual(1);
	});

	it("will recognise a strike", function(){
		bowling.isStrike(10);
		expect(bowling.strike).toEqual(1);
	});


});