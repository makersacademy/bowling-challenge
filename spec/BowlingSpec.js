describe ('bowling', function() {

  var game;

  beforeEach(function(){
    game = new Bowling();
  });

  it('can score a gutter game', function() {
    for(var i = 0; i < 20; i++) { game.roll(0) }
    expect(game.gameScore()).toEqual(0)
  });

  it('can score 20 points', function() {
    for(var i = 0; i < 20; i++) { game.roll(1) }
    expect(game.gameScore()).toEqual(20)
  });

  it('can roll a ball and hit pins', function() {
    game.roll(4);
    game.roll(4);
    for(var i = 0; i < 18; i++) { game.roll(0) }
    expect(game.gameScore()).toEqual(8)
  });

  it('can score a spare', function() {
    game.roll(5);
    game.roll(5);
    game.roll(5);
    for(var i = 0; i < 18; i++) { game.roll(0) }
    expect(game.gameScore()).toEqual(20)
  });

  it('can score a stike', function() {
    game.roll(10);
    game.roll(5);
    game.roll(5);
    for(var i = 0; i < 18; i++) { game.roll(0) }
    expect(game.gameScore()).toEqual(30)
  });

  it('can score 300 points (perfect game)', function() {
    for(var i = 0; i < 10; i++) { game.roll(10) }
    game.roll(10);
    game.roll(10);
    expect(game.gameScore()).toEqual(300)
  });

});
