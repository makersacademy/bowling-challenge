describe ('Frame', function() {

  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  describe ('constructor', function() {
    it ('initializes with a property roll_1 set to nil', function() {
      expect(frame.roll_1).toEqual('nil');
    });
    it ('initializes with a property roll_2 set to nil', function() {
      expect(frame.roll_2).toEqual('nil';
    });
    it ('initializes with a property score set to nil', function() {
      expect(frame.score).toEqual('nil');
    });
  });

});
