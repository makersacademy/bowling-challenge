describe('Game', function() {
  var game;
});

	describe('Game start setup', function() {

  	it('starts with 10 frames', function(){
    	game = new Game();
    	expect(game.frame_total).toEqual(10);
  	});
  });

	describe('Game play', function() {

  	it('can roll all ones in all goes', function (){
  	var game = new Game();
  	for (var i = 0; i < 20; i++) {
    game.roll(1)
  }
  expect(game.score()).toBe(20);
	});
 
	});