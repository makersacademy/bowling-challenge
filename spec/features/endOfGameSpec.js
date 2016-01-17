describe ('FEATURE TEST: Final Frame', function () {

  var game;
  beforeEach(function() {
    game = new Game();
    var n
    for (n=0; n<18; n++) {
      game.bowlA(4);
    }
  });

  describe('Final frame scores less than 10', function() {
    it('prevents any more balls', function(){
      game.bowlA(4);
      game.bowlA(4);
      expect(game.bowlA(4)).toEqual('Game over: Ten frames played')
    });
  });
  describe('Final frame is a spare', function() {
    it('allows one bonus ball', function(){
      game.bowlA(4);
      game.bowlA(6);
      expect(game.bowlA(4)).not.toEqual('Game over: Ten frames played')
    });

    it('prevents any more balls after bonus', function(){
      game.bowlA(4);
      game.bowlA(6);
      game.bowlA(4)
      expect(game.bowlA(4)).toEqual('Game over: Ten frames played')
    });
  });


  describe('Final frame is a strike', function() {
    it('allows two bonus balls', function(){
      game.bowlA(10);
      expect(game.bowlA(4)).not.toEqual('Game over: Ten frames played');
      expect(game.bowlA(4)).not.toEqual('Game over: Ten frames played');
    });

    it('allows two strike bonus balls', function(){
      game.bowlA(10);
      expect(game.bowlA(10)).not.toEqual('Game over: Ten frames played');
      expect(game.bowlA(10)).not.toEqual('Game over: Ten frames played');
    });

    it('prevents another ball two bonus balls', function(){
      game.bowlA(10);
      game.bowlA(4);
      game.bowlA(4);
      expect(game.bowlA(4)).toEqual('Game over: Ten frames played');
    });

    it('prevents another ball two strike bonus balls', function(){
      game.bowlA(10);
      game.bowlA(10);
      game.bowlA(10);
      expect(game.bowlA(4)).toEqual('Game over: Ten frames played');
    });
  });



});
