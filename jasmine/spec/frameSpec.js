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

  describe ('addRolls', function() {
    it ('adds together roll_1 and roll_2', function() {
      frame.roll_1 = 4
      frame.roll_2 = 3
      expect(frame.addRolls()).toEqual(7);
    });
  });

  describe ('validRolls', function() {
    it ('checks if the rolls combined equal 10 or less', function() {
      frame.roll_1 = 4
      frame.roll_2 = 3
      expect(frame.validRolls()).toEqual(true);
      frame.roll_1 = 4
      frame.roll_2 = 13
      expect(frame.validRolls()).toEqual(false);
    });
  });

  describe ('setRollTotal', function() {
    it('sets the frames score property equal to result of addRolls if valid rolls', function() {
      frame.roll_1 = 4
      frame.roll_2 = 3
      frame.setRollTotal()
      expect(frame.score).toEqual(7);
    });
    it('returns an error message if rolls are not valid and does not change the score property', function() {
      frame.roll_1 = 8
      frame.roll_2 = 5
      expect(frame.setRollTotal()).toEqual('Error: combined rolls are greater than number of pins')
      expect(frame.score).toEqual('nil')
    });
  });


});
