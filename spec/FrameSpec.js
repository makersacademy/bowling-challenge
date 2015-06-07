describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("Registers a gutterball", function() {
    frame.registerScore(0);
    expect(frame.pinsLeft()).toEqual(10);
  });

  it("Registers a score", function() {
    frame.registerScore(2)
    expect(frame.pinsLeft()).toEqual(8);
  });

  it("Registers 2 scores", function() {
    frame.registerScore(4)
    frame.registerScore(4)
    expect(frame.pinsLeft()).toEqual(2);
  });

  describe ("Knows when it's over", function(){

    it("After 2 bowls", function() {
      frame.registerScore(4)
      frame.registerScore(4)
      expect(frame.isOver()).toEqual(true);
    });

    it("When there are no pins left standing", function() {
      frame.registerScore(10)
      expect(frame.isOver()).toEqual(true);
    });

    // it("Throws an error when trying to bowl a third time", function() {
    //   frame.registerScore(4)
    //   frame.registerScore(4)
    //   expect( function(){ frame.registerScore(4); } ).toThrow(new Error("Frame Over!"));
    // });

  });

// describe ("Knows when it's not over"), function() {

  it("After less than 2 bowls", function() {
    expect(frame.isOver()).toEqual(false);
  });

  it("Knows what the total is", function() {
    frame.registerScore(4)
    frame.registerScore(4)
    expect(frame.total()).toEqual(8);
  });

});