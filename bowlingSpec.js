describe('Bowling', function() {

  var game, rollMany;

  beforeEach(function() {
    game = new Bowling();
  })

  rollMany = function(rolls, pins) {
    for (var i = 0; i < rolls; i++) {
      game.roll(pins);
    };
  }

  describe('Gutter Game', function() {

    it('will score zero when no pins are hit', function() {
      rollMany.call(this.game, 20, 0)
      expect(game.score()).toEqual(0);

    });
  });

  describe('when one pin is hit', function() {

    it('should score 20 when 1 pin is hit each roll', function(){
      rollMany.call(this.game, 20, 1)
      expect(game.score()).toEqual(20);

    });
  });

  describe('game with one spare', function() {

    it('should score 20 when 3 rolls hit 5 pins', function() {
      game.roll(5);
      game.roll(5);
      game.roll(5);
      rollMany.call(this.game, 17, 0);
      expect(game.score()).toEqual(20);

    });
  });

  describe('game with one strike', function() {

    it('should score 26 when there is 1 strike and 8 in the next frame', function() {
      game.roll(10);
      game.roll(5);
      game.roll(3);
      rollMany.call(this.game, 16, 0);
      expect(game.score()).toEqual(26);

    });
  });

  describe('a perfect game', function() {

    it('should score 300 when there are 12 rolls of 10 pins', function() {
      rollMany.call(this.game, 12, 10);
      expect(game.score()).toEqual(300);
    });
  });

  describe('a perfect game', function() {

    it('should score 300 when there are 12 rolls of 10 pins',   function() {
      rollMany.call(this.game, 20, 10);
      expect(game.score()).toEqual(300);
    });
  });

});
