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
      expect(frame.roll_2).toEqual('nil');
    });
    it ('initializes with a property score set to nil', function() {
      expect(frame.score).toEqual('nil');
    });
  });

  describe ('calculateWhichRoll', function() {
    it ('returns whichever roll still has a value of nil', function() {
      expect(frame.calculateWhichRoll()).toEqual(1);
      frame.roll_1 = 5
      expect(frame.calculateWhichRoll()).toEqual(2);
    });
  });
});
