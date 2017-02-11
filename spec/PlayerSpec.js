describe("Player", function(){
    var player;

    beforeEach(function(){
      player = new Player();
  });

    it("should be able to throw a ball", function(){
      player.throwBall();
      expect(player._framescore).not.toEqual(0);
  });

  describe("Random", function(){
    it("can knock over 1 pin on each throw", function(){
      spyOn(player, 'pinsKnocked').and.returnValue(1);
      player.throwBall();
      expect(player._frameScore).toEqual(1);
    });

    it("can knock over 0 pins on each throw", function(){
      spyOn(player, 'pinsKnocked').and.returnValue(0);
      player._frameScore = 1;
      player.throwBall();
      expect(player._frameScore).toEqual(1);
    });

  });

})
