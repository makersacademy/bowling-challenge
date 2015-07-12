describe ('BowlingCalc', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('game supports', function(){

    it('spares', function(){
      game.newRoll(5);
      game.newRoll(5);
      game.newRoll(3);
      game.newRoll(2);
      expect(game.score).toEqual(18);
    });

    it("double's pinfall", function(){
      game.newRoll(10);
      game.newRoll(10);
      game.newRoll(7);
      game.newRoll(1);
      expect(game.score).toEqual(53);
    });

    it("triple", function(){
      game.newRoll(10);
      game.newRoll(10);
      game.newRoll(10);
      game.newRoll(4);
      game.newRoll(6);
      game.newRoll(3);
      expect(game.score).toEqual(90);
    });

    it("8 strikes and spare", function(){
      for (var i=1; i<9; ++i){
        game.newRoll(10);
      }
      game.newRoll(3);
      game.newRoll(7);
      expect(game.score).toEqual(233);
    });

    it("perfect game", function(){
      for (var i=1; i<13; ++i){
        game.newRoll(10);
      }
      expect(game.score).toEqual(300);
    });

    it("spare in 10th frame", function(){
      for (var i=1; i<10; ++i){
        game.newRoll(10);
      }
        game.newRoll(5);
        game.newRoll(5);
        game.newRoll(10);
      expect(game.score).toEqual(275);
    });


  });
});
