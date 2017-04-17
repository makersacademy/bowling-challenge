describe("Frame", function(){
  var frame;
  beforeEach(function(){
    frame = new Frame()
    });

  it("initializes with 10 pins remaining", function() {
    expect(frame.pinsremaining).toEqual(10);
  });

  describe("bowl", function(){
    it("knocks down a random number of pins", function() {
      spyOn(Math, 'floor').and.returnValue(5);
      frame.bowl();
      expect(frame.pinsremaining).toEqual(5)
    });
  });
});
