describe('Bowling', function() {

  var game

  beforeEach (function() {
    game = new Bowling();
  });

  describe('#roll', function() {
    it('adds the knocked down pins to the rolls',function() {
      game.roll(5);
      expect(game.rolls).toContain(5);
    });
  });

  describe('#score', function() {
    it('returns the total score',function() {
      game.roll(5);
      game.roll(2);
      expect(game.score()).toEqual(7);
    });

    it('knows how to calculate a spare', function() {
      game.roll(5);
      game.roll(5);
      game.roll(4);
      game.roll(2);
      expect(game.score()).toEqual(20);
    });

    it('knows how to calculate a strike', function() {
      game.roll(10);
      game.roll(2);
      game.roll(6);
      expect(game.score()).toEqual(26);
    });

    it('knows how to calculate unfinished frames', function(){
      game.roll(8)
      expect(game.score()).toEqual(8)
    })
  });

});
