describe("Player", function(){
    var player;

    beforeEach(function(){
      player = new Player();
  });

    it("should be able to throw a ball", function(){
      player.throwBall();
      expect(player._framescore).not.toEqual(0);
  });
})
