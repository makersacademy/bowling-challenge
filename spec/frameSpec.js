describe ("frame", function() {
  var frame
  beforeEach(function(){
    frame = new Frame
  })

  describe("#addBall",function(){
    it ("records the balls given to it", function(){
      frame.addBall(3)
      expect(frame.getBalls()).toEqual([3])
    });
  })

  describe("#isComplete",function(){
    it ("knows when it is not complete",function(){
      expect(frame.isComplete()).toEqual(false)
    })
    it ("knows when it is out of balls",function(){
      frame.addBall(3)
      frame.addBall(3)
      expect(frame.isComplete()).toEqual(true)
    })
    it ("knows when it is out of pins",function(){
      frame.addBall(10)
      expect(frame.isComplete()).toEqual(true)
    })
  });
});
