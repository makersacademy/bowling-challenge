describe("Game, for tracking the stage of the game", function(){

	var game;
	var dummyBonusCalc;
	var dummyScoreBoard;

	beforeEach( function(){
		dummyBonusCalc = {
			processBonus: function(){
				return "Dummy value"
			},
			addBonus: function(score){
				return "Dummy value"
			},
			isBonusDue: function(){
				return true;
			}
		}
		dummyScoreBoard = {
			addToBoth: function(){
				return "Dummy value"
			},
			resetFrameScore: function(){
				return "Dummy value"
			}
		}

		game = new Game(dummyBonusCalc,dummyScoreBoard);
	});

	describe("roll()",function(){
		describe("If the current frame is 10 or less", function(){			
			it("- the scoreboard is told to add the score to both the frame score and total score", function(){
				spyOn(dummyScoreBoard, 'addToBoth');
				game.roll(1);
				expect(dummyScoreBoard.addToBoth).toHaveBeenCalledWith(1);
			});
			it("- the bonus calculator is invoked to process the score, and is given the frame score", function(){
				spyOn(dummyBonusCalc, 'processBonus');
				game.roll(1);
				game.roll(1);
				expect(dummyBonusCalc.processBonus).toHaveBeenCalledWith(1);
			});
			it("- the roll and strike tracker numbers go up 1", function(){
				game.roll(1);
				expect(game.currentRoll).toEqual(2);
				expect(game.strikeTracker).toEqual(2);
			});
			it("- if the next roll is a first roll, the scoreboard is told to reset the frame score", function(){
				spyOn(dummyScoreBoard, 'resetFrameScore');
				game.roll(1);
				game.roll(1);
				expect(dummyScoreBoard.resetFrameScore).toHaveBeenCalled();
			});
		});
		describe("If the current frame is more than 10", function(){
			it("- the bonus calculator is invoked to add the bonus if it is due", function(){
				game.currentRoll = 21;
				spyOn(dummyBonusCalc, 'addBonus');
				game.roll(1);
				expect(dummyBonusCalc.addBonus).toHaveBeenCalledWith(1);
			});
			it("- and the roll and tracker numbers go up 1 so the bonus score can process strikes", function(){
				game.currentRoll = 21;
				game.roll(1);
				expect(game.currentRoll).toEqual(22);
				expect(game.strikeTracker).toEqual(2);
			});
			it("- but the bonus calculator does not process the score to set any new bonuses as due", function(){
				game.currentRoll = 21;
				spyOn(dummyBonusCalc, 'processBonus');
				game.roll(1);
				expect(dummyBonusCalc.processBonus).not.toHaveBeenCalled();
			});
			it("- and the game does not add the score to the total or frame score.", function(){
				spyOn(dummyScoreBoard, 'addToBoth');
				game.currentRoll = 21;
				game.roll(1);
				expect(dummyScoreBoard.addToBoth).not.toHaveBeenCalled();
			});
			it("- If no bonus is due, the game is over", function(){
				spyOn(dummyBonusCalc, 'isBonusDue').and.returnValue(false);
				game.currentRoll = 21;
				game.roll(1);
				expect(game.isOver).toEqual(true);
			});
			it("- and the game is not over is a bonus is due", function(){
				game.currentRoll = 21;
				game.roll(1);
				expect(game.isOver).not.toEqual(true);
			});
		});
	});

	describe("Invalid scores not allowed", function(){
		it("Error thrown if number more than 10 is passed to roll", function(){
			dummyScoreBoard.frameScore = 0;
			expect(function(){
				game.roll(11)
			}).toThrowError('Invalid score');
		});
		it("Error thrown if score is more than remaining pins", function(){
			dummyScoreBoard.frameScore = 5;
			expect(function(){
				game.roll(6)
			}).toThrowError('Invalid score');
		});
	});

});