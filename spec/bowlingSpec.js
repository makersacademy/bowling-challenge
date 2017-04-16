describe ('The bowling game', function() {

  // it('can start a game', function(){
  //   var game = new Game();
  // });
  
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('can finish as a gutter game (0)', function(){
    multipleRolls(0, 20);
    expect(game.score()).toBe(0);
  });

  it('scores one in each roll (20)', function(){
    multipleRolls(1, 20);
    expect(game.score()).toBe(20);
  });

  it('scores five in first roll of each frame (50)', function(){
    for(var i = 0; i < 10; i++){
    game.roll(5);
    game.roll(0);
    };
    expect(game.score()).toBe(50);
  });

  it('scores a spare (i.e. 2 x 5 in the first frame)', function(){
    game.roll(6);
    game.roll(4);
    game.roll(2);
    multipleRolls(0, 17);
    expect(game.score()).toBe(14);
  });

  it('scores a strike (i.e 10 & 0 in the first frame)', function(){
    game.roll(10);
    game.roll(3);
    game.roll(6);
    multipleRolls(0, 16);
    expect(game.score()).toBe(28);
  });

  it('scores a perfect game (300)', function(){
    multipleRolls(10, 12);
    expect(game.score()).toBe(300);
  });

  var multipleRolls = function(pins, rolls){
    for (var i = 0; i < rolls; i++){
      game.roll(pins);
    }
  };
});