describe("Ten Pin Bowling", function(){

	var game;

	beforeEach( function(){
		bonusCalc = {
			processBonus: function(){
				return "Dummy process"
			},
			addBonus: function(score){
				return "Dummy process"
			},
			bonus_due: "Dummy answer"
		}

		game = new Game(bonusCalc);
	});

	describe("roll()",function(){
		it("If the current frame is no. 10 or less, the bonus calculator is invoked", function(){
			spyOn(bonusCalc, 'processBonus');
			game.roll(1);
			expect(bonusCalc.processBonus).toHaveBeenCalledWith(1);
		});

		it("If the current frame is more than ten but the game is not over, the bonus calculator is invoked to add the bonus rolls", function(){
			spyOn(bonusCalc, 'addBonus');
			game.current_frame = 11;
			game.roll(1);
			expect(bonusCalc.addBonus).toHaveBeenCalledWith(1);
		});
	});

	describe("calculateEnd()",function(){
		it("If the current frame is more than ten and the bonus calculator says no bonus is due, the game is over", function(){
			bonusCalc.bonus_due = false;
			game.current_frame = 11;
			game.calculateEnd();
			expect(game.isOver).toEqual(true);
		});
	});

});