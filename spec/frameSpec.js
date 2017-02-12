describe ("frame", function() {
  var frame
  beforeEach(function(){
    frame = new Frame(10)
  })

  describe("#addBall",function(){
    it ("records the balls given to it", function(){
      frame.addBall(3)
      expect(frame.getBalls()).toEqual([3])
    });
  });
  describe("#isStrike",function(){
    it ("knows when it is ended with a strike",function(){
      frame.addBall(10)
      expect(frame.isStrike()).toEqual(true)
    })

    it ("knows when it is ended with a spare",function(){
      frame.addBall(5)
      frame.addBall(5)
      expect(frame.isStrike()).toEqual(false)
    })
  });
  describe("#isComplete",function(){
    it ("knows when it is not complete",function(){
      expect(frame.isComplete()).toEqual(false)
    })
    it ("knows when it is out of balls",function(){
      frame.addBall(2)
      frame.addBall(2)
      expect(frame.isComplete()).toEqual(true)
    })
    it ("knows when it is out of pins",function(){
      frame.addBall(10)
      expect(frame.isComplete()).toEqual(true)
    })
  });
});
