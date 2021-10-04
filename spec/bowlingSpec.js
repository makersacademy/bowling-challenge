describe("Scorecard",() => {
	
	var scorecard;

	beforeEach(() => {
		scorecard = new Scorecard();
		spyOn(console, 'log');
	});

	describe("getFrame", () => {

		it("should return the current frame", () => {
			let currentFrame = scorecard.getFrame();
			expect(currentFrame).toEqual(0);
		});

	});

	describe("getFramecard", () => {

		it("should return framecard array", () => {
			let framecardArr = scorecard.getFramecard();
			expect(framecardArr).toEqual([]);
		});

	});

	describe("inputRoll", () => {

		it("will accept whole numbers between 0 and 10", () => { 
			expect(scorecard.inputRoll(5)).toEqual (5);
		});

		it("will not accept numbers below 0", () => { 
			scorecard.inputRoll(-2)
			expect(console.log).toHaveBeenCalledWith("You must enter a number between 0 and 10");
		});

		it("will not accept numbers above 10", () => { 
			scorecard.inputRoll(11)
			expect(console.log).toHaveBeenCalledWith("You must enter a number between 0 and 10");
		});

	});

	describe("addToFrame", () => {
		
		it("should add the roll to the current frame", () => {
			let framecardArr = scorecard.getFramecard();
			let currentFrame = scorecard.getFrame();
			let roll1 = scorecard.inputRoll(5);
			scorecard.addToFrame(roll1);
			expect(framecardArr[currentFrame]).toContain (5);
		});

		it("should add two rolls to the current frame", () => {
			let framecardArr = scorecard.getFramecard();
			let currentFrame = scorecard.getFrame();
			let roll1 = scorecard.inputRoll(5);
			let roll2 = scorecard.inputRoll(5);
			scorecard.addToFrame(roll1);
			scorecard.addToFrame(roll2);
			expect(framecardArr[currentFrame]).toEqual ([5,5]);
		});

		it("should fill out the frame if the first roll is 10", () => {
			let framecardArr = scorecard.getFramecard();
			let currentFrame = scorecard.getFrame();
			let roll1 = scorecard.inputRoll(10);
			scorecard.addToFrame(roll1);
			expect(framecardArr[currentFrame]).toEqual ([10,0]);
		});

	});
	
	describe("equalsOrUnder10", () => {

		it("should check that the frame total is below or equal to 10", () => {
			let roll1 = scorecard.inputRoll(4);
			let roll2 = scorecard.inputRoll(7);
			scorecard.addToFrame(roll1);
			scorecard.addToFrame(roll2);
			expect(console.log).toHaveBeenCalledWith("You'll have to enter roll 2 for frame 1 again");			
		});

	});

	describe("nextFrame", () => {
		
		it("should increment to the next frame", () => {
			scorecard.nextFrame();
			expect(scorecard.frame).toEqual(1);
		});

	});

	describe("isStrike", () => {

		it("should return true if a frame is a strike", () => {
			let framecardArr = scorecard.getFramecard();
			let currentFrame = scorecard.getFrame();
			let roll = scorecard.inputRoll(10);
			scorecard.addToFrame(roll);
			expect(scorecard.isStrike(framecardArr,currentFrame)).toBeTruthy();
		});

	});

	describe("isSpare", () => {

		it("should return true if a frame is a spare", () => {
			let framecardArr = scorecard.getFramecard();
			let currentFrame = scorecard.getFrame();
			let roll1 = scorecard.inputRoll(5);
			let roll2 = scorecard.inputRoll(5);
			scorecard.addToFrame(roll1);
			scorecard.addToFrame(roll2);
			expect(scorecard.isSpare(framecardArr,currentFrame)).toBeTruthy();
		});

	});


	describe("calcScore", () => {

		it("should calculate the score of the frame", () => {
			let roll1 = scorecard.inputRoll(5);
			let roll2 = scorecard.inputRoll(5);
			scorecard.addToFrame(roll1);
			scorecard.addToFrame(roll2);
			scorecard.calcScore();
			expect(scorecard.currentScore()).toEqual(10);
		});

	});

	describe("play", () =>{
		it("should allow user to input 10 frames", () => {
			let rand = Math.floor(Math.random()*10) + 1;
			for(let i = 0; i < 10; i++){
				scorecard.play(rand);
			}			
			expect(scorecard.framecard.length).toEqual(10);
		});
	});
});