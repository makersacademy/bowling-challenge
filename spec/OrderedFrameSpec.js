describe("OrderedFrame", function() {

  var orderedFrame;

  beforeEach(function(){
    orderedFrame = new OrderedFrame(1)
    frame = jasmine.createSpy("frame")
  });

  describe("#new", function() {
    it("creates a new OrderedFrame object", function() {
      expect(orderedFrame).toEqual(jasmine.any(OrderedFrame));
    });
    it("includes a property order",function() {
      expect(orderedFrame.getOrder()).toEqual(1);
    });
  });

  describe("#setFrame", function() {
    it("sets a new property _frame", function() {
      orderedFrame.setFrame(frame);
      expect(orderedFrame.getFrame()).toEqual(frame)
    });
  });

  describe("#calculateBaseScore", function() {

  });
});
