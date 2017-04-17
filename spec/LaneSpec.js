describe("Lane", function() {

  var lane;

  beforeEach(function(){
    lane = new Lane();
  });


  it("Starts with 10 pins", function() {
    expect(lane.pins).toEqual(10);
  });

  describe("Bowling", function() {

    it("Can have pins knocked down",function(){
      lane.hit(6);
      expect(lane.pins).toEqual(4);
    });

    it("Can have its pins reset", function() {
      lane.hit(10);
      lane.resetPins();
      expect(lane.pins).toEqual(10);
    });

  });




});