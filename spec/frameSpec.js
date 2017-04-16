describe('Frame', function() {
  var frame;
});

  describe('Each Frame', function() {

    it('it has 1 frame', function(){
      frame = new Frame();
      expect(frame.frame_start).toEqual(1);
    });
    
    it('each frame contains 2 rolls', function(){
      expect(frame.rolls).toEqual(2);
    });

    it('every go the rolls should decrease by 1', function() {
    expect(frame.rolls).toEqual(2);
    frame.go();
    expect(frame.rolls).toEqual(1);
  });
  });
