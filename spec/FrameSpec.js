describe('Frame',function(){
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  describe('when a new frame is made', function(){

    it('should start with 10 pins', function(){
      expect(frame.pins).toEqual(10);
    });

    it('should remove pins from the current frame', function(){
      frame.removePins(2);
      expect(frame.pins).toEqual(8);
    });
  });
});
