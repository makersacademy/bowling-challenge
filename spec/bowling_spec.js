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

    it('can roll a spare', function(){
      game.roll(5);
      game.roll(5);
      game.roll(3);
      multiRoll(0,17);
      expect(game.score()).toEqual(16);
    })

    it('can roll a strike', function(){
      game.roll(10);
      game.roll(4);
      game.roll(3);
      multiRoll(0,16);
      expect(game.score()).toEqual(24);
    })

    it('can roll all strikes', function(){
      multiRoll(10,12);
      expect(game.score()).toEqual(300);
    })

});
