describe('Bowling Game Calcualtor', function() {

  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

    it('rolls gutter game', function() {
      rollMany(0, 20);
      expect(game.score()).toBe(0);
    });

    it('rolls 1 pin, 20 times', function() {
      rollMany(1, 20);
      expect(game.score()).toBe(20);
    });

    it('rolls spare', function () {
      game.roll(5);
      game.roll(5);
      game.roll(3);
      rollMany(0, 17);
      expect(game.score()).toBe(16);
    });

    it('rolls a strike', function() {
      game.roll(10);
      game.roll(4);
      game.roll(3);
      rollMany(0, 16);
      expect(game.score()).toBe(24);
    });

    it('roll perfect game', function(){
      rollMany(10, 12);
      expect(game.score()).toBe(300);
    });

    var rollMany = function (pins, rolls) {
      for (var i = 0; i < 20; i++) {
        game.roll(pins);
      }

    };


});
