describe('Bowling', function() {
  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

    it('Allows a player to roll a gutter game', function() {
      for (var i = 0; i < 20; i++) {
        bowling.roll(0);
      }
      expect(bowling.score()).toEqual(0);
    });

    it('Allows a player to roll a game with no spares or strikes', function() {
      for (var i = 0; i < 20; i++) {
        bowling.roll(3);
      }
      expect(bowling.score()).toEqual(60);
    });



});
