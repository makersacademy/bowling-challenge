describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame(Roll); // don't know how to create a spy class, going Chicago style
  });

  it("exists", function() {
    expect(function(){new Frame(Object)}).not.toThrow();
  });

  describe("standingPins", function() {
    it("has 10 pins on new frame ", function() {
      expect(frame.getStandingPins()).toEqual(10);
    });
  });

  describe("rolls", function() {
    it("has 2 rolls on new frame ", function() {
      expect(frame.rolls.length).toEqual(2);
    });
  });

  describe("nextRoll", function() {
    it("switch active roll to the next one", function() {
      expect(function(){frame.nextRoll()}).not.toThrow();
    });
    it('fails to advance if 10 pins are knocked', function() {
      frame.setKnockedDownPins(10);
      expect(function(){frame.nextRoll()}).toThrow('Cannot advance to the next roll: rolls have finished for this frame!');
    });
  });

  describe("setKnockedDownPins", function() {
    it("set the number of knocked down pins in this roll", function() {
      frame.setKnockedDownPins(4);
      frame.nextRoll();
      frame.setKnockedDownPins(5);
      expect(frame.rolls[0].getKnockedDownPins()).toEqual(4);
      expect(frame.rolls[1].getKnockedDownPins()).toEqual(5);
      expect(frame.getStandingPins()).toEqual(1);
    });

    it("fails if try to knock down more pin than actually standing", function() {
      expect(function(){frame.setKnockedDownPins(11)}).toThrow('Cannot set pins this way: you might be cheating!!!');
      frame.setKnockedDownPins(4);
      frame.nextRoll();
      expect(function(){frame.setKnockedDownPins(25)}).toThrow('Cannot set pins this way: you might be cheating!!!');
    });
  });
});
