describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame(Roll); // don't know how to create a spy class, going Chicago style
  });

  it("exists", function() {
    expect(function(){new Frame(Object)}).not.toThrow();
  });

  describe("getStandingPins()", function() {
    it("has 10 pins on new frame ", function() {
      expect(frame.getStandingPins()).toEqual(10);
    });
  });

  describe("maxRolls", function() {
    it("has 2 rolls on new frame ", function() {
      expect(frame.maxRolls).toEqual(2);
    });
  });

  describe("createRoll()", function() {
    it("adds a new roll to the frame", function() {
      expect(function(){frame.createRoll()}).not.toThrow();
    });
    it("cannot create more rolls than maxRolls", function() {
      for (var i = 0; i < frame.maxRolls; i++) {
        expect(function(){frame.createRoll()}).not.toThrow();
      }
      expect(function(){frame.createRoll()}).toThrow('Cannot create roll: max number reached');
    });
  });

  describe("nextRoll()", function() {
    it("switch active roll to the next one", function() {
      expect(function(){frame.nextRoll()}).not.toThrow();
    });
    it('fails to advance if 10 pins are knocked', function() {
      frame.nextRoll();
      frame.setKnockedDownPins(10);
      expect(function(){frame.nextRoll()}).toThrow('Cannot advance to the next roll: pins have finished for this frame!');
    });
  });

  describe("setKnockedDownPins(pins)", function() {
    it("set the number of knocked down pins in this roll", function() {
      frame.nextRoll();
      frame.setKnockedDownPins(4);
      frame.nextRoll();
      frame.setKnockedDownPins(5);
      expect(frame.rolls[0].getKnockedDownPins()).toEqual(4);
      expect(frame.rolls[1].getKnockedDownPins()).toEqual(5);
      expect(frame.getStandingPins()).toEqual(1);
    });

    it("fails if try to knock down more pin than actually standing", function() {
      frame.nextRoll();
      expect(function(){frame.setKnockedDownPins(11)}).toThrow('Cannot set pins number: are you cheating?!?!?!');
      frame.setKnockedDownPins(4);
      frame.nextRoll();
      expect(function(){frame.setKnockedDownPins(25)}).toThrow('Cannot set pins number: are you cheating?!?!?!');
    });
  });

  xdescribe("bonus", function() {
    it("starts at 0", function() {
      expect(frame.bonus).toEqual(0);
    });
  });

  xdescribe("score", function() {
    it("starts at 0", function() {
      expect(frame.score).toEqual(0);
    });
  });

});
