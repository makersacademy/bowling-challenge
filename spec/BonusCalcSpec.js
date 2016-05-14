describe("Bonus Calculator, for adding bonuses and deciding if they are due", function(){

	var bonusCalc;
	var game;

	beforeEach(function(){
		dummyGame = {
			frame_score: "Dummy score",
			current_roll: "Dummy roll",
			current_roll_up: function(){
				return "Dummy value";
			},
			add_to_total: function(score){
				return "Dummy value";
			}
		};

		bonusCalc = new BonusCalc(dummyGame);
	});

	describe("Deciding whether bonuses are due", function(){
		it("- it sets its bonus due status to 'spare' if the game's frame score is 10 and it's on the second roll", function(){
			dummyGame.frame_score = 10;
			dummyGame.current_roll = 2;
			bonusCalc.setBonusStatus();
			expect(bonusCalc.bonus_due).toEqual('spare');
		});
		it("- it sets its bonus due status to 'strike' if the game's frame score is 10 and it's on the first roll", function(){
			dummyGame.frame_score = 10;
			dummyGame.current_roll = 1;
			bonusCalc.setBonusStatus();
			expect(bonusCalc.bonus_due).toEqual('strike');
		});
		it("- it also tells the game to skip a roll when it sets the bonus due status to 'strike'", function(){
			spyOn(dummyGame, 'current_roll_up');
			dummyGame.frame_score = 10;
			dummyGame.current_roll = 1;
			bonusCalc.setBonusStatus();
			expect(dummyGame.current_roll_up).toHaveBeenCalled();
		});
		it("- if the game's frame score is less than 10, the bonus due status remains false", function(){
			dummyGame.frame_score = 9;
			bonusCalc.setBonusStatus();
			expect(bonusCalc.bonus_due).toEqual(false);
		});
	});

	describe("Adding any bonus that is due", function(){
		it("- it makes the game add the current score to the total if the bonus due status has been set to spare", function(){
			spyOn(dummyGame, 'add_to_total');
			dummyGame.frame_score = 10;
			dummyGame.current_roll = 2;
			bonusCalc.setBonusStatus();
			bonusCalc.addBonus(5);
			expect(dummyGame.add_to_total).toHaveBeenCalledWith(5);
		});
		it("- then it resets the bonus due status to false", function(){
			spyOn(dummyGame, 'add_to_total');
			dummyGame.frame_score = 10;
			dummyGame.current_roll = 2;
			bonusCalc.setBonusStatus();
			bonusCalc.addBonus(5);
			expect(bonusCalc.bonus_due).toEqual(false);
		});
		it("- it makes the game add the current score to the total if the bonus due status has been set to strike", function(){
			spyOn(dummyGame, 'add_to_total');
			dummyGame.frame_score = 10;
			dummyGame.current_roll = 1;
			bonusCalc.setBonusStatus();
			bonusCalc.addBonus(5);
			expect(dummyGame.add_to_total).toHaveBeenCalledWith(5);
		});
		it("- then it resets the bonus due status to false, but only after the second roll", function(){
			dummyGame.frame_score = 10;
			dummyGame.current_roll = 1;
			bonusCalc.setBonusStatus();
			bonusCalc.addBonus(5);
			expect(bonusCalc.bonus_due).toEqual('strike');
			dummyGame.current_roll = 2;
			bonusCalc.addBonus(5);
			expect(bonusCalc.bonus_due).toEqual(false);
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