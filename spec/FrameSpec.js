describe("Frame", function() {

  var frame;

  beforeEach(function() {
    roll1 = jasmine.createSpyObj("roll",["getKnockedPins"]);
    roll2 = jasmine.createSpyObj("roll",["getKnockedPins"]);
    roll3 = jasmine.createSpyObj("roll",["getKnockedPins"]);
    frame = new Frame(roll1, roll2, roll3);
  });

  describe("#new", function() {
    it("creates a new frame object", function() {
      expect(frame).toEqual(jasmine.any(Frame));
    });
    it("includes a property rolls",function() {
      expect(frame.getRolls()).toEqual([roll1, roll2, roll3]);
    });
  });
});
