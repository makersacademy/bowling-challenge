describe ('Bowling Calculator', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('game scoring', function(){

    it('limits frame score to 10', function(){
      game.newRoll(5);
      expect(game.newRoll(6)).toMatch("Number of pins hit cannot exceed 10");
    });

    it('limits roll score to 10', function(){
      expect(game.newRoll(11)).toMatch("Number of pins hit cannot exceed 10");
    });


    it('supports spares', function(){
      game.newRoll(5);
      game.newRoll(5);
      game.newRoll(3);
      game.newRoll(2);
      expect(game.score).toEqual(18);
    });

    it("supports double's pinfall", function(){
      game.newRoll(10);
      game.newRoll(10);
      game.newRoll(7);
      game.newRoll(1);
      expect(game.score).toEqual(53);
    });

    it("supports triple", function(){
      game.newRoll(10);
      game.newRoll(10);
      game.newRoll(10);
      game.newRoll(4);
      game.newRoll(6);
      game.newRoll(3);
      expect(game.score).toEqual(90);
    });

    it("supports 8 strikes and spare", function(){
      for (var i=1; i<9; ++i){
        game.newRoll(10);
      }
      game.newRoll(3);
      game.newRoll(7);
      game.newRoll(0);
      expect(game.score).toEqual(233);
    });

    it("supports perfect game", function(){
      for (var i=1; i<13; ++i){
        game.newRoll(10);
      }
      expect(game.score).toEqual(300);
    });

    it("supports spare in 10th frame", function(){
      for (var i=1; i<10; ++i){
        game.newRoll(10);
      }
        game.newRoll(5);
        game.newRoll(5);
        game.newRoll(10);
      expect(game.score).toEqual(275);
    });

    it("supports random game", function(){
        game.newRoll(1);
        game.newRoll(4);
        game.newRoll(4);
        game.newRoll(5);
        game.newRoll(6);
        game.newRoll(4);
        game.newRoll(5);
        game.newRoll(5);
        game.newRoll(10);
        game.newRoll(0);
        game.newRoll(1);
        game.newRoll(7);
        game.newRoll(3);
        game.newRoll(6);
        game.newRoll(4);
        game.newRoll(10);
        game.newRoll(2);
        game.newRoll(8);
        game.newRoll(6);
      expect(game.score).toEqual(133);
    });



  });
});
