describe("Player", function(){
    var player;
    var game;
    var scoreboard;

    beforeEach(function(){
      scoreboard = new Scoreboard;
      game = new Game(scoreboard);
      player = new Player(game);
  });

    it("should be able to throw a ball", function(){
      expect(player.throwBall()).not.toEqual(NaN);
  });

    it("cannot have less than 10 pins - resets on 0", function(){
      spyOn(player, 'pinsKnocked').and.returnValue(6);
      player.throwBall();
      player.throwBall();
      expect(player.pins).toEqual(10);
    });


  describe("Random", function(){
    it("can knock over 1 pin on each throw", function(){
      spyOn(player, 'pinsKnocked').and.returnValue(1);
      player.throwBall();
      expect(game._frameScore).toEqual(1);
    });

    it("can knock over 0 pins on each throw", function(){
      spyOn(player, 'pinsKnocked').and.returnValue(0);
      game._frameScore = 1;
      player.throwBall();
      expect(game._frameScore).toEqual(1);
    });

    it("can knock over 6 pins on each throw", function(){
      spyOn(player, 'pinsKnocked').and.returnValue(6);
      player.throwBall();
      expect(game._frameScore).toEqual(6);
    });

  });

})
