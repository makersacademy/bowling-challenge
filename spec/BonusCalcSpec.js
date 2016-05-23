describe("Bonus Calculator, for adding bonuses and deciding if they are due", function(){

	var bonusCalc;
	var dummyGame;
	var dummyScoreBoard;

	beforeEach(function(){
		dummyGame = {
			strikeTracker: 1,
			isOnFirstRoll: function(){
				return true;
			},
			addOneToCurrentRoll: function(score){
				return "Dummy value";
			}
		};
		dummyScoreBoard = {
			addToTotal: function(score){
				return "Dummy value";
			},
			frameScore: 10
		};

		bonusCalc = new BonusCalc(dummyGame,dummyScoreBoard);
	});

	describe("Deciding whether bonuses are due", function(){
		it("- it puts 'spare' in the bonus array if the scoreboard's frame score is 10 and the game is not on a first roll", function(){
			spyOn(dummyGame, 'isOnFirstRoll').and.returnValue(false);
			bonusCalc.setBonusStatus();
			expect(bonusCalc.bonusArray).toContain('spare');
		});
		it("- it adds the roll's strike tracker number if the scoreboard's frame score is 10 and it's on a first roll", function(){
			bonusCalc.setBonusStatus();
			expect(bonusCalc.bonusArray).toContain(1);
		});
		it("- it also tells the game to skip a roll when it adds a strike to the bonus array", function(){
			spyOn(dummyGame, 'addOneToCurrentRoll');
			bonusCalc.setBonusStatus();
			expect(dummyGame.addOneToCurrentRoll).toHaveBeenCalled();
		});
		it("- if the game's frame score is less than 10, nothing is added to the bonus array", function(){
			dummyScoreBoard.frameScore = 9;
			bonusCalc.setBonusStatus();
			expect(bonusCalc.bonusArray).not.toContain(1);
		});
	});

	describe("Adding any bonus that is due", function(){
		it("- it makes the scoreboard add the current score to the total if the bonus array contains a spare", function(){
			spyOn(dummyGame, 'isOnFirstRoll').and.returnValue(false);
			spyOn(dummyScoreBoard, 'addToTotal');
			bonusCalc.setBonusStatus();
			bonusCalc.addBonus(5);
			expect(dummyScoreBoard.addToTotal).toHaveBeenCalledWith(5);
		});
		it("- then it removes the spare from the bonus array", function(){
			spyOn(dummyGame, 'isOnFirstRoll').and.returnValue(false);
			bonusCalc.setBonusStatus();
			bonusCalc.addBonus(5);
			expect(bonusCalc.bonusArray).not.toContain('spare');
		});
		it("- it makes the scoreboard add the current score to the total if the bonus array contains a strike tracker number from the previous roll", function(){
			spyOn(dummyScoreBoard, 'addToTotal');
			bonusCalc.setBonusStatus();
			dummyGame.strikeTracker = 2;
			bonusCalc.addBonus(5);
			expect(dummyScoreBoard.addToTotal).toHaveBeenCalledWith(5);
		});
		it("- it makes the game add the current score to the total if the bonus array contains a strike tracker number from two rolls ago", function(){
			spyOn(dummyScoreBoard, 'addToTotal');
			bonusCalc.setBonusStatus();
			dummyGame.strikeTracker = 3;
			bonusCalc.addBonus(5);
			expect(dummyScoreBoard.addToTotal).toHaveBeenCalledWith(5);
		});
		it("- then it removes the strike tracker number from two games ago, because both bonus rolls have been added", function(){
			bonusCalc.setBonusStatus();
			dummyGame.strikeTracker = 3;
			bonusCalc.addBonus(5);
			expect(bonusCalc.bonusArray).not.toContain(1);
		})
	});

	it("Process Bonus calls setBonusStatus and addBonus", function(){
		spyOn(bonusCalc, 'setBonusStatus');
		spyOn(bonusCalc, 'addBonus');
		bonusCalc.processBonus();
		expect(bonusCalc.setBonusStatus).toHaveBeenCalled();
		expect(bonusCalc.addBonus).toHaveBeenCalled();
	});


});