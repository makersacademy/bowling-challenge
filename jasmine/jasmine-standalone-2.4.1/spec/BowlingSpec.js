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

		it("updates the score", function(){
			bowling.updateScore(6);
			expect(bowling.currentScore).toEqual(6);
		});

		it("will call the changeRollNumber function", function(){
				spyOn(bowling, 'changeRollNumber');
				bowling.updateScore(6);
				expect(bowling.changeRollNumber).toHaveBeenCalled();
		});

	});

		it("changes the rollNumber to 2 from 1", function(){
			bowling.changeRollNumber();
			expect(bowling.rollNumber).toEqual(2);
		});

});