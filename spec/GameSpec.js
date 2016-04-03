describe('Game', function() {

  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('can score a single throw', function() {
    game.throw(2);
    throws(19, 0);
    expect(game.score()).toBe(2);
  })

  it('can score two throws which do not add up to a strike or spare', function() {
    game.throw(2);
    game.throw(7);
    throws(19, 0);
    expect(game.score()).toBe(9);
  })

  it('can score a spare', function() {
    game.throw(2);
    game.throw(8);
    game.throw(4);
    throws(17, 0);
    expect(game.score()).toBe(18);
  })

  it('can score multiple spares', function() {
    game.throw(2);
    game.throw(8);
    game.throw(3);
    game.throw(7);
    game.throw(4);
    game.throw(6);
    throws(14, 0);
    expect(game.score()).toBe(37);
  })

  it('can score a strike', function() {
    game.throw(10);
    game.throw(3);
    game.throw(4);
    throws(17,0);
    expect(game.score()).toBe(24)
  })

  function throws(throws, pins) {
    for (i = 0; i < throws; i++) {
      game.throw(pins);
    }
  }

})
