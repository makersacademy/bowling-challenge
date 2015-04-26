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

  it('can indicate whether it is the first roll', function() {
    expect(game.firstRoll).toEqual(true);
  });

  it('can indicate whether it is the second roll', function() {
    game.roll(1);
    expect(game.firstRoll).toEqual(false);
  });

  it('can take as first throw only 0 to 10', function() {
    expect(function() {
      game.roll(11);
    }).toThrow(new Error('Max first roll score is 10'));    
   
  });

  it('can take as second throw only scores that adds to 10', function() {
    game.roll(5);

    expect(function() {
      game.roll(8);
    }).toThrow(new Error('Max second roll score is between 0 and 5'));    
   
  });

  it('does not take scores smaller than 0', function() {

    expect(function() {
      game.roll(-2);
    }).toThrow(new Error('Min roll score is 0'));    
   
  });

  var rollMany = function(pins, times){

    for (i = 0; i < times; i++) {
      game.roll(pins);
    }

  };

});


