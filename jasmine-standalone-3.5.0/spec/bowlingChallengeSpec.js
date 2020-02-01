describe('Bowling game logic', function() {

  var game;

  beforeEach(function (){
    game = new BowlingGame();
  });


  it('can roll a gutter game', function(){
    for (var i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score()).toEqual(0);
  });

  it('can roll all ones', function(){
    for (var i = 0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.score()).toEqual(20);
  });

  it('can roll a spare', function (){
    game.roll(5);
    game.roll(5);
    game.roll(2);
    for (var i = 0; i < 17; i++) {
      game.roll(0);
    }
    expect(game.score()).toEqual(14);
  });

  it('can roll a strike', function (){
    game.roll(10);
    game.roll(2);
    game.roll(5);
    for (var i = 0; i < 16; i++) {
      game.roll(0)
    }
    expect(game.score()).toEqual(24)
  });

  it('can roll a perfect game', function (){

    for (var i = 0; i < 12; i++) {
      game.roll(10)
    }
    expect(game.score()).toEqual(300)
  });


});
