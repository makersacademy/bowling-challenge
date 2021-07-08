describe('Player', function(){
	beforeEach(function(){
		player = new Player();
	});

	describe('#score', function(){
		it('keeps score', function(){
			expect(player.score()).toEqual(0);
		});
	});

	describe('#roll', function(){
		it('player rolls', function(){
			var possible_rolls = [0,1,2,3,4,5,6,7,8,9,10]
			var roll = player.roll();
			expect(possible_rolls).toContain(roll);
		});
	});

	describe('#setscore', function(){
		it('updates score', function(){
			expect(player.score()).toEqual(0);
			player.setscore(10);
			expect(player.score()).toEqual(10);
		});
	});
});