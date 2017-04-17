describe('Bowling Feature test', function() {
  var game;
  beforeEach( function() {
    game = new Game();
  });

  it('I should be able to bowl a gutter game', function() {
    manyBowls(0,20);
    expect(game.score()).toBe(0);
  });

  it('should be able to bowl an open game', function() {
    manyBowls(1,20);
    game.bowl(1);
    expect(game.score()).toBe(20);
  });

  it('can bowl a spare', function() {
    game.bowl(5);
    game.bowl(5);
    game.bowl(3);
    manyBowls(0, 17);
    expect(game.score()).toBe(16);
  });

  it('can bowl a strike', function() {
    game.bowl(10);
    game.bowl(4);
    game.bowl(3);
    manyBowls(0,17);
    expect(game.score()).toBe(24);
  })

  it('can bowl a perfect game', function() {
    manyBowls(10, 12);
    expect(game.score()).toBe(300);
  });

  var manyBowls = function(pins, rolls) {
    for(var i = 0; i< rolls; i++) {
      game.bowl(pins);
    };
  };
});