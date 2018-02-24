describe('Bowling game', function (){

  beforeEach(function(){
    game = new Bowling ();
  });

  describe('gutter game', function(){
    it('can roll gutter game', function(){
      for (var i = 0; i < 20; i++){
        game.roll(0);
      }
      expect(game.score()).toBe(0);
    });

  });

});
