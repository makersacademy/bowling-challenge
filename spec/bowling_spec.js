describe('Bowling Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  var multiRoll = function(pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  };

    it('can take 20 rolls and display score', function(){
      for (var i = 0; i < 20; i++) {
        multiRoll(1,20);
      }
      expect(game.score()).toEqual(20);
    })

    it('can take 20 gutter balls', function(){
      for (var i = 0; i < 20; i++) {
        multiRoll(0,20);
      }
      expect(game.score()).toEqual(0);
    })

});
