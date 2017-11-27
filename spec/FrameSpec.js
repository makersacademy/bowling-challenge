describe("Frame", function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('#pushValue', function(){
    it('Pushes number of pins to frame', function(){
      frame.pushValue(5)
      expect(frame.values()).toEqual([5])
    });
  });
});
