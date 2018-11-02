describe('Roll', function() {
  var roll;
  var frame;

  beforeEach(function() {
    roll = new Roll();
    frame = new Frame();
  });

  describe('knockedPins', function() {
    it('retuns the number of knocked over pins', function () {
      roll.knockedPins(8);
      expect(roll.score).toEqual(8);
    });
  });
});
