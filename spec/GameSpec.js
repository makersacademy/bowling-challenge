//need to completely update this!!

describe("Game, for tracking the stage of the game and the score", function(){

	var game;

	beforeEach( function(){
		bonusCalc = {
			processBonus: function(){
				return "Dummy process"
			},
			addBonus: function(score){
				return "Dummy process"
			},
			isBonusDue: function(){
				return true;
			}
		}

		game = new Game(bonusCalc);
	});

	describe("roll()",function(){
		describe("If the current frame is 10 or less", function(){			
			it("- the score of the roll is added to the frame score and total score", function(){
				game.roll(1);
				expect(game.frameScore).toEqual(1);
				expect(game.totalScore).toEqual(1);
			});
			it("- the bonus calculator is invoked to process the score, and is given the frame score", function(){
				spyOn(bonusCalc, 'processBonus');
				game.roll(1);
				game.roll(1);
				expect(bonusCalc.processBonus).toHaveBeenCalledWith(1,2);
			});
			it("- the roll and strike tracker numbers go up 1", function(){
				game.roll(1);
				expect(game.currentRoll).toEqual(2);
				expect(game.strikeTracker).toEqual(2);
			});
			it("- if the next roll is a first roll, the frame score returns to zero", function(){
				game.roll(1);
				game.roll(1);
				expect(game.frameScore).toEqual(0);
				expect(game.totalScore).toEqual(2);
			});
		});
		describe("If the current frame is more than 10", function(){
			it("- the bonus calculator is invoked to add the bonus if it is due", function(){
				game.currentRoll = 21;
				spyOn(bonusCalc, 'addBonus');
				game.roll(1);
				expect(bonusCalc.addBonus).toHaveBeenCalledWith(1);
			});
			it("- and the roll and tracker numbers go up 1 so the bonus score can process strikes", function(){
				game.currentRoll = 21;
				game.roll(1);
				expect(game.currentRoll).toEqual(22);
				expect(game.strikeTracker).toEqual(2);
			});
			it("- but the bonus calculator does not process the score to set any new bonuses as due", function(){
				game.currentRoll = 21;
				spyOn(bonusCalc, 'processBonus');
				game.roll(1);
				expect(bonusCalc.processBonus).not.toHaveBeenCalled();
			});
			it("- and the game does not add the score to the total or frame score.", function(){
				game.currentRoll = 21;
				game.roll(1);
				expect(game.totalScore).toEqual(0);
				expect(game.frameScore).toEqual(0);
			});
			it("- If no bonus is due, the game is over", function(){
				spyOn(bonusCalc, 'isBonusDue').and.returnValue(false);
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

});