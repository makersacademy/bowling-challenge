describe("Player", function(){
    var player;
    var game;

    beforeEach(function(){
      game = new Game();
      player = new Player(game);
  });

    it("should be able to throw a ball", function(){
      expect(player.throwBall()).not.toEqual(NaN);
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
