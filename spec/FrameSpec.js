describe('Frame',function(){
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  describe('when a new frame is made', function(){
    it('should start with 10 pins', function(){
      expect(frame.pins).toEqual(10);
    });
  });
});
