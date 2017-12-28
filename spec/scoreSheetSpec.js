describe("ScoreSheet", function(){
	var scoreSheet;

	beforeEach(function(){
		scoreSheet = new ScoreSheet();
	});

	describe("Scoring results", function(){
		it("should add the result of a frame to the scoreSheet", function(){
			frameRoll([5,0]);
			expect(scoreSheet.frames[0].roll).toEqual([5,0]);
		});

		it("should log the result of the 2nd frame to the scoreSheet", function(){
			frameRoll([0,5]);
			frameRoll([4,3]);
			expect(scoreSheet.frames[0].roll).toEqual([0,5]);
			expect(scoreSheet.frames[1].roll).toEqual([4,3]);
		});

		it("should log the result of a strike on its own on the scoreSheet", function(){
			frameRoll([10]);
			frameRoll([4,3]);
			expect(scoreSheet.frames[0].roll).toEqual([10]);
			expect(scoreSheet.frames[1].roll).toEqual([4,3]);
		});

		it("should add the result of a frame with the added score for the frame", function(){
			frameRoll([5,0]);
			expect(scoreSheet.frames[0].addTotalFramePoints()).toEqual(5);
		});
	});

	describe("Displaying score results", function(){

		describe("Strike logic", function(){
			it("should not display a score on a strike wihtout the next 2 rolls completed", function(){
				frameRoll([10]);
				expect(scoreSheet.displayScore(0)).toBe(null);
			});

			it("should display a score of 17 with 1 strike and a 5 on next roll", function(){
				frameRoll([10]);
				frameRoll([5,2]);
				expect(scoreSheet.displayScore(0)).toEqual(17);
			});

			it("BBshould not display a score with 2 strikes in a row and no next rolls", function(){
				frameRoll([10]);
				frameRoll([10]);
				expect(scoreSheet.displayScore(0)).toBe(null);
			});

			it("should display a score of 30 with 3 strikes in a row", function(){
				frameRoll([10]);
				frameRoll([10]);
				frameRoll([10]);
				expect(scoreSheet.displayScore(0)).toEqual(30);
			});

			it("should display a score of 25 with 2 strikes and a 5 on next roll", function(){
				frameRoll([10]);
				frameRoll([10]);
				frameRoll([5,2]);
				expect(scoreSheet.displayScore(0)).toEqual(25);
			});

			it("should display the score for a strike then a spare", function(){
				frameRoll([10]);
				frameRoll([6,4]);
				expect(scoreSheet.displayScore(0)).toEqual(20);
			});
		});

		describe("Spare logic", function(){
			it("should not display a score on a spare wihtout the next roll", function(){
				frameRoll([5,5]);
				expect(scoreSheet.displayScore(0)).toBe(null);
			});

			it("should display a score of 11 on a spare after the next roll", function(){
				frameRoll([5,5]);
				frameRoll([1,3]);
				expect(scoreSheet.displayScore(0)).toEqual(11);
			});

			it("should display a score of 16 on a spare after another spare", function(){
				frameRoll([5,5]);
				frameRoll([6,4]);
				expect(scoreSheet.displayScore(0)).toEqual(16);
			});
		});

		describe("No bonus logic", function(){
			it("should display a score of 9 on first frame", function(){
				frameRoll([6,3]);
				expect(scoreSheet.displayScore(0)).toEqual(9);
			});

		});

	});



	var frameRoll = function(pinsDown) {
		var testFrame = new Frame();
		for(var i = 0; i < pinsDown.length; i++) {
			testFrame.appendNumberPinsDown(pinsDown[i]);
		}
		scoreSheet.addNewFrame(testFrame);
	};
});
