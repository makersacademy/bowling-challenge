describe("ScoreBoard, for storing and updating the framescore and totalscore", function(){
	
	var scoreBoard;

	beforeEach(function(){
		scoreBoard = new ScoreBoard();
	});

	describe("addToTotal", function(){
		it("- adds the score to the total score", function(){
			scoreBoard.addToTotal(1);
			expect(scoreBoard.totalScore).toEqual(1);
			expect(scoreBoard.frameScore).toEqual(0);
		});
	});
	describe("addToBoth", function(){
		it("- adds the score to the total score and frame score", function(){
			scoreBoard.addToBoth(1);
			expect(scoreBoard.totalScore).toEqual(1);
			expect(scoreBoard.frameScore).toEqual(1);
		})
	})
	describe("resetFrameScore", function(){
		it("- puts the frameScore back to 0", function(){
			scoreBoard.addToBoth(1);
			scoreBoard.resetFrameScore();
			expect(scoreBoard.frameScore).toEqual(0);
		});
	});

});