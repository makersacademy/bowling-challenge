describe ('Frame', function() {


  describe ('construction', function() {
    it('starts on 1', function() {
      var frame = new Frame();
      expect(frame.frame_number).toEqual(1);
    });
  });

  describe ('calculateFrame', function() {
    it('returns which frame of the game a player it on', function() {
      var frame = new Frame();
      var fakeGame1 = {
        roll : function() {
          return [3,4];
        }
      };
      expect(frame.calculateFrame(fakeGame1.roll)).toEqual(1);
    });
  });


});
