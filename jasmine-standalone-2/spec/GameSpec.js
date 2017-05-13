describe("The Bowling Game", function() {

  var game;

  beforeEach(function(){
    game = new BowlingGame();
  });

  it('scores zero points for gutter game', function() {
    rollMany(0, 20);
    expect(game.score()).toBe(0);
  });

  it('calculates score for rolling all ones', function() {
    rollMany(1,20);
    expect(game.score()).toBe(20);
  });

  it('calculates bonus scores for a spare', function() {
    game.roll(5);
    game.roll(5);
    game.roll(3);
    rollMany(0, 17);
    expect(game.score()).toBe(16)
  })

  it('calculates bonus scores for a strike', function(){
    game.roll(10);
    game.roll(4);
    game.roll(3);
    rollMany(0, 16);
    expect(game.score()).toBe(24);
  });

  it('calculates bonus scores for a perfect game', function() {
    rollMany(10, 12);
    expect(game.score()).toBe(300);
  });

  var rollMany = function( pins, rolls){
    for (var i= 0; i < rolls; i++){
      game.roll(pins);
    }
  };

});
