describe('Game', function () {
  var game;
});

	describe('Game start setup', function() {

  	it('starts with 10 frames', function() {
    	var game = new Game();
    	expect(game.frame_total).toEqual(10);
  	});

  it('can roll all gutter balls', function (){
    var game = new Game();
    for (var i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score()).toBe(0);
  });

  it('can roll all ones in all goes', function () {
  	var game = new Game();
  	for (var i = 0; i < 20; i++) {
  		game.roll(1);
  	}
  	expect(game.score()).toBe(20);
  });

  // it('can roll a spare', function(){
  //  game.roll(3);
  //  game.roll(7);
  //  game.roll(2);
  //  expect(frame.rolls[0]).toEqual(12);
  // });
});