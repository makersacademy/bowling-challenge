describe("PLAYER", function() {
  player = new Player("Name");

  it("should allow player to have a name", function() {
    expect(player.name).toEqual("Name");
  });

  describe("*Frame is not complete*", function() {
    it("should start with 12 rounds", function() {
      expect(player.remainingFrames).toEqual(10);
    });

    it("should not detract from remaining frames", function() {
      spyOn(Frame.prototype, "returnIsComplete").and.returnValue(false);
      player.enterRoll(1);
      expect(player.remainingFrames).toEqual(10);
    });
  });

  describe("*Frame is complete*", function() {
    it("should detract one from remaining frames", function() {
      spyOn(Frame.prototype, "returnIsComplete").and.returnValue(true);
      player.enterRoll(2);
      expect(player.remainingFrames).toEqual(9);
    });

    it("should create a new frame if existing is complete", function() {
      player.enterRoll(3);
      expect(player.frames.length).toEqual(1);
    });

    it('should record complete frames in array', function(){
       expect(player.frames[0]).toEqual(jasmine.any(Object));
       expect(player.frames.constructor).toEqual(Array);
    })

    it('should keep track of total score', function(){
      expect(player.totalScore).toEqual(3)
    })
  });

  describe("Bonus points", function(){
    sparePlayer = new Player
    strikePlayer = new Player

    it('should add points of next roll to spare score', function() {
      sparePlayer.enterRoll(3)
      sparePlayer.enterRoll(7)
      sparePlayer.enterRoll(4)
      sparePlayer.enterRoll(4)
      expect(sparePlayer.totalScore).toEqual(22)
    })

    it('should add points of next roll to strike score', function() {
      strikePlayer.enterRoll(10)
      strikePlayer.enterRoll(4)
      strikePlayer.enterRoll(2)
      expect(strikePlayer.totalScore).toEqual(22)
    })

    it('should not add next round\'s bonus points to strike score', function() {
      doubleStrike = new Player("doublestrike")
      doubleStrike.enterRoll(10)
      doubleStrike.enterRoll(10)
      doubleStrike.enterRoll(4)
      doubleStrike.enterRoll(2)
      expect(doubleStrike.totalScore).toEqual(42)
    })
  })

  // describe("GameOver", function(){
  //   it("should return true if no remaining frames", function(){
  //     spyOn(Frame.prototype, "returnIsComplete").and.returnValue(true);
  //     player.enterRoll(1);
  //     player.enterRoll(1);
  //     player.enterRoll(1);
  //     player.enterRoll(1);
  //     player.enterRoll(1);
  //     player.enterRoll(1);
  //     player.enterRoll(1);
  //     player.enterRoll(1);
  //     player.enterRoll(1);
  //     player.enterRoll(1);
  //     player.enterRoll(1);
  //     expect(player.remainingFrames).toEqual(0)
  //   })
  // })
});
