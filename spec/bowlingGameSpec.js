describe('bowlingGame', function(){

	beforeEach(function(){
		player = new Player();
		game = new bowlingGame();
	});

	it ('starts a game', function(){

		expect(game.getframe()).toEqual(0);

	});

	it('add a player', function(){

		game.addPlayer(player);

		expect(game.players()).toContain(player);

	});

	it('takes a roll', function(){

		//game.takesRoll(player);

		

	});





});