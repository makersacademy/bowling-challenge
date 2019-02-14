describe("PLAYER", function() {
  player = new Player("Name");

  it("should allow player to have a name", function() {
    expect(player.name).toEqual("Name");
  });

  describe("*Frame is not complete*", function() {
    it("should start with 12 rounds", function() {
      expect(player.remainingFrames).toEqual(12);
    });

    // it('should record complete frames in array', function(){
    //   player.enterRoll(5)
    //   expect(player.frames[0]).toEqual(jasmine.any(Object));
    //   expect(player.frames.constructor).toEqual(Array);
    // })

    it("should not detract from remaining frames", function() {
      spyOn(Frame.prototype, "returnIsComplete").and.returnValue(false);
      player.enterRoll(1);
      expect(player.remainingFrames).toEqual(12);
    });
  });

  describe("*Frame is complete*", function() {
    it("should detract one from remaining frames", function() {
      spyOn(Frame.prototype, "returnIsComplete").and.returnValue(true);
      player.enterRoll(1);
      expect(player.remainingFrames).toEqual(11);
    });
  });

  describe("GameOver", function(){
    it("should return true if no remaining frames", function(){
      spyOn(Frame.prototype, "returnIsComplete").and.returnValue(true);
      player.enterRoll(1);
      player.enterRoll(1);
      player.enterRoll(1);
      player.enterRoll(1);
      player.enterRoll(1);
      player.enterRoll(1);
      player.enterRoll(1);
      player.enterRoll(1);
      player.enterRoll(1);
      player.enterRoll(1);
      player.enterRoll(1);
      expect(player.remainingFrames).toEqual(0)
    })
  })
});
