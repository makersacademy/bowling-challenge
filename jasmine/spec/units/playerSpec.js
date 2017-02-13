describe("Player", function() {
  var player;

  beforeEach(function() {
    player = new Player(Frame,Roll, new Referee); // Would prefer this London style
  });

  describe("maxFrames", function() {
    it("limits the game to 10 frames", function() {
      expect(player.maxFrames).toEqual(10);
    });
  });

  describe("createFrame()", function() {
    it("adds a new frame to the game", function() {
      expect(function(){player.createFrame()}).not.toThrow();
    });
    it("cannot create more frames than maxFrames", function() {
      for (var i = 0; i < player.maxFrames; i++) {
        expect(function(){player.createFrame()}).not.toThrow();
      }
      expect(function(){player.createFrame()}).toThrow('Cannot create frame: max number reached');
    });
  });

  describe("activeFrame()", function() {
    it("returns the frame object active at the moment", function() {
      player.nextRoll();
      expect(player.activeFrame()).toEqual(player.frames[0]);
    });
  });

  describe("nextRoll()", function() {
    it("switch to next roll", function() {
      player.nextRoll();
      expect(player.activeFrame().activeRoll()).toEqual(player.frames[0].rolls[0]);
      player.nextRoll();
      expect(player.activeFrame().activeRoll()).toEqual(player.frames[0].rolls[1]);
    });
    it("switch to next frame when there are no more pins in the current one", function() {
      player.nextRoll();
      expect(player.activeFrame().activeRoll()).toEqual(player.frames[0].rolls[0]);
      player.activeFrame().setKnockedDownPins(10);
      player.nextRoll();
      expect(player.activeFrame().activeRoll()).toEqual(player.frames[1].rolls[0]);
    });
  });

});
