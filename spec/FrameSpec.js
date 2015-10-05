describe("Frame", function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("starts with 10 pins", function() {
    expect(frame.pinsRemaining).toEqual(10);
  })

  it("has a total score starting at zero", function() {
    expect(frame.totalScore).toEqual(0);
  });

  describe("#firstRoll", function() {

    it("knocks down pins and retains the value (stubbed to 6)", function(){
      spyOn(Math, 'random').and.returnValue(0.6);
      frame.firstRoll();
      expect(frame.firstRollScore).toEqual(6);
    });

    it("pins remaining is reduced after roll (roll stubbed to 6)", function(){
      spyOn(Math, 'random').and.returnValue(0.6);
      frame.firstRoll();
      expect(frame.pinsRemaining).toEqual(4);
    });

    it("doesn't allow repeated rolls", function(){
      frame.firstRoll();
      expect(function() { frame.firstRoll(); }).toThrowError("Already rolled or rolling out of turn");
    });

    it("returns the number of pins knocked down", function(){
      spyOn(Math, 'random').and.returnValue(0.6);
      expect(frame.firstRoll()).toEqual(6);
    });

    it("registers a strike if ten pins knocked down", function(){
      spyOn(Math, 'random').and.returnValue(0.99);
      expect(frame.firstRoll()).toEqual("Strike!")
    });

    it("updates total score", function(){
      spyOn(Math, 'random').and.returnValue(0.6);
      frame.firstRoll();
      expect(frame.totalScore).toEqual(6);
    });

  });

  describe("#secondRoll", function() {

    it("knocks down pins from those remaining after the first roll", function(){
      spyOn(Math, 'random').and.returnValue(0.6);
      frame.firstRoll();
      frame.secondRoll();
      expect(frame.secondRollScore).toEqual(3);
    });

    it("pins remaining is reduced after roll", function(){
      spyOn(Math, 'random').and.returnValue(0.6);
      frame.firstRoll();
      frame.secondRoll();
      expect(frame.pinsRemaining).toEqual(1);
    });

    it("doesn't allow repeated rolls", function(){
      frame.firstRoll();
      frame.secondRoll();
      expect(function() { frame.secondRoll(); }).toThrowError("Already rolled or rolling out of turn");
    });

    it("can't be taken before the first roll", function(){
      expect(function() { frame.secondRoll(); }).toThrowError("Already rolled or rolling out of turn");
    });

    it("returns the number of pins knocked down", function(){
      spyOn(Math, 'random').and.returnValue(0.6);
      frame.firstRoll();
      expect(frame.secondRoll()).toEqual(3);
    });

    it("registers a spare if ten pins knocked down", function(){
      spyOn(Math, 'random').and.returnValue(0.8);
      frame.firstRoll();
      expect(frame.secondRoll()).toEqual("Spare!")
    });

    it("updates total score", function(){
      spyOn(Math, 'random').and.returnValue(0.6);
      frame.firstRoll();
      frame.secondRoll();
      expect(frame.totalScore).toEqual(9);
    });

  });

});
