describe('Bowling game', function (){

  beforeEach(function(){
    game = new Bowling ();
  });

  describe('gutter game', function(){
    it('should score 0 if player never hits a pin', function(){
      for (var i = 0; i < 20; i++) {
        game.roll(0);
      }
      expect(game.score()).toEqual(0);
    });
  });

  describe("When in all rolls only hits 1 pin", function(){
    it('should score 20 if player only hits a pin per roll', function(){
      for (var i = 0; i < 20; i++) {
        game.roll(1);
      }
      expect(game.score()).toEqual(20);
    });
  });

  describe("game is spare", function(){
    it("should score 10 plus score in next roll", function(){
      game.roll(6);
      game.roll(4);
      game.roll(5);
      expect(game.score()).toEqual(20);
    });

    it('is spare when scores 10 in two rolls', function(){
      game.roll(5);
      game.roll(5);
      expect(game.isSpare(0)).toBe(true);
    });
  });

  describe("game is strike ", function(){
    it("is strike when hits all the pins in one roll", function(){
    game.roll(10);
    expect(game.isStrike(0)).toBe(true);
    });

    it("scores 26 when strike in first roll and hit 5 and 3 in next frame", function(){
    game.roll(10);
    game.roll(5);
    game.roll(3);
    expect(game.score()).toEqual(26);
    });
  });

  describe("perfect game", function(){
    it("scores 300 points when hits all the pins in 12 rolls", function(){
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      expect(game.score()).toEqual(300);
    });

  })

});
