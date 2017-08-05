describe('Bowling Game', function() {
  var game;
  beforeEach(function() {
    game = new BowlingGame;
  });

  it('allows the player to roll a ball and get a random score between 0 - 10', function(){
    game.roll(2)
    expect(game.score()).toBeLessThan(11);
    expect(game.score()).toBeGreaterThan(-1);
  });

  it('it counts the number of rolls', function(){
    game.roll(1);
    game.roll(1);
    expect(game.rollCount()).toEqual(2);
  });
  describe('#score', function() {

    it('returns strike if I score ten', function() {
      spyOn(Math, 'floor').and.returnValue(10);
      game.roll(10);
      expect(game.score()).toEqual('strike');
    });

    it('returns spare if the score 10 in with two rolls', function() {
      spyOn(Math, 'floor').and.returnValue(5);
      game.roll(5);
      game.roll(5);
      expect(game.score()).toEqual('spare');
    });
  });
 describe('All the different games', function() {

  it('the player can have a gutter game', function() {
      // spyOn(Math, 'floor').and.returnValue(0);
      for (var i = 0; i < 20; i++) {
  			game.roll(0);
  		};

      expect(game.result()).toEqual(0)
    });

    // function rollMany (n, pins) {
    // for (var i = 0; i < n; i++) {
    //   game.roll(pins)
    // }

  it('the player can score all ones', function() {
      // spyOn(Math, 'floor').and.returnValue(2);
      for (var i = 0; i < 20; i++) {
  			game.roll(1);
  		};
      expect(game.result()).toEqual(20)
    });

  });

});
