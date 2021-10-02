describe("Scorecard",() => {
	
	var scorecard;

	beforeEach(() => {
		scorecard = new Scorecard();
		spyOn(console, 'log');
	});

	describe("inputRoll", () => {

		it("will accept whole numbers between 0 and 10", () => { 
			expect(scorecard.inputRoll(5)).toEqual (5);
		});

		it("will not accept numbers below 0", () => { 
			expect(scorecard.inputRoll(-2)).nothing();
		});

		it("will not accept numbers above 10", () => { 
			expect(scorecard.inputRoll(11)).nothing();
		});

	});

	describe("addToFrame", () => {
		
		it("should add the roll to the current frame", () => {
			let roll1 = scorecard.inputRoll(5)
			scorecard.addToFrame(roll1)
			expect(scorecard.framecard[scorecard.frame]).toContain (5);
		});

		it("should add two rolls to the current frame", () => {
			let roll1 = scorecard.inputRoll(5)
			let roll2 = scorecard.inputRoll(5)
			scorecard.addToFrame(roll1)
			scorecard.addToFrame(roll2)
			expect(scorecard.framecard[scorecard.frame]).toEqual ([5,5]);
		});

		it("should fill out the frame if the first roll is 10", () => {
			let roll1 = scorecard.inputRoll(10);
			scorecard.addToFrame(roll1);
			expect(scorecard.framecard[scorecard.frame]).toEqual ([10,0]);
		});

	});
	
	describe("equalsOrUnder10", () => {

		it("should check that the frame total is below or equal to 10", () => {
			let roll1 = scorecard.inputRoll(4);
			let roll2 = scorecard.inputRoll(7);
			scorecard.addToFrame(roll1)
			scorecard.addToFrame(roll2)
			expect(console.log).toHaveBeenCalledWith(`You'll have to enter roll2 for frame 1 again`);			
		});

	});

	// describe("calcFrameScore", () => {

	// 	it("should ")

	// });

	// describe("increment_frame", () => {
		
	// 	it("should move on to the next frame" () => {

	// 	});

	// });
	

});