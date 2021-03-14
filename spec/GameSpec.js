describe('Game', () => {

	var game;

	beforeEach(() => {
		game = new Game;
	});

	it('should start with 0 score', () => {
		expect(game.getCurrentScore()).toEqual(0);
	});

	it('updates the current score with values of most recent input', () => {
		game.input(3, 4);
		expect(game.getCurrentScore()).toEqual(7);
	});

	it('inserts score for each frame as a separate object into the scoresheet', () => {
		game.input(2, 4);
		game.input(2, 6);
		expect(game.scoreSheet.length).toEqual(2);
	});

	describe('bonus points', () => {

		describe('it adds bonus points if there is a spare', () => {

			it('current score includes the first score of the current frame when there was a spare in the last frame', () => {
				game.input(5, 5);
				game.input(2, 4);
				expect(game.getCurrentScore()).toEqual(18);
			});
		});

		describe('it adds bonus points if there is a strike', () => {
			
			it('current score includes the two scores of the current frame where there was a strike in the last frame', () => {
				game.input(10, 0);
				game.input(5, 5);
				expect(game.getCurrentScore()).toEqual(30);
			});

			it('includes a second frame as bonus points if there is a continuous strike', () => {
				game.input(10, 0);  //10, 10, 4
				game.input(10, 0); //10, 4, 5
				game.input(4, 5); //9
				expect(game.getCurrentScore()).toEqual(52);
			});

			it('calculates the right score if there is a perfect game of continuous strikes', () => {
				for(var i=0; i<9; i++) {
					game.input(10,0)
				}
				game.input(10,10,10)
				expect(game.getCurrentScore()).toEqual(300);
			});
		});
	});

	describe('"isPerfectGame" checks if the game is a perfect game', () => {
		it('returns true for a perfect game', () => {
			for(var i=0; i<9; i++) {
				game.input(10,0)
			}
			game.input(10,10,10)
			expect(game.isPerfectGame()).toEqual(true);
		});
	});
	
	describe('"isGutterGame" checks if the game is a gutter game', () => {
		it('returns true for a gutter game', () => {
			for(var i=0; i<10; i++) {
				game.input(0,0)
			}
			expect(game.isGutterGame()).toEqual(true);
		});
	});

	describe('throws an error for exceptional cases', () => {
		it('throws an error if user inputs a third roll for the 10th frame with no strike or spare', () => {
			for(var i=0; i<9; i++) {
				game.input(1,1)
			}
			expect(function(){
				game.input(1, 2, 3)
			}).toThrow('Cannot roll for third time unless striked or spared in last frame');
		});
	});
});