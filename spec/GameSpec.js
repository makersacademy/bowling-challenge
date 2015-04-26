describe('Game', function() {

  var game;

  beforeEach(function () {
    game = new Game();
  }); 

  it('can roll a gutter game', function() {

    rollMany(0,20);
    expect(game.score()).toEqual(0);

  });

  it('can roll a game on ones', function() {

    rollMany(1,20);
    expect(game.score()).toEqual(20);

  });

  it('can roll a spare', function() {
    
    game.roll(5);
    game.roll(5);
    game.roll(3);
    rollMany(0, 17);
    expect(game.score()).toEqual(16);

  });

  it('can roll a strike', function() {
    
    game.roll(3);
    game.roll(3);
    game.roll(10);
    game.roll(3);
    game.roll(3);
    rollMany(0, 15);
    expect(game.score()).toEqual(28);

  });

  it('can roll a perfect game', function() {
    rollMany(10,12);
    expect(game.score()).toEqual(300);
  });

  it('can roll spares and srikes in one game', function() {
    game.roll(10);
    game.roll(10);
    game.roll(5);
    game.roll(5);
    game.roll(3);
    rollMany(0, 15);
    expect(game.score()).toEqual(61);
  });

  it('can score 270', function() {
    rollMany(10, 9);
    game.roll(9);
    game.roll(1);
    game.roll(1);
    expect(game.score()).toEqual(270);
  });


  var rollMany = function(pins, times){

    for (i = 0; i < times; i++) {
      game.roll(pins);
    }

  };

});


