describe('Roll', function() {

  var firstRoll;
  var secondRoll;


  beforeEach(function() {
    firstRoll = new Roll(10);
    secondRoll = new Roll(5);
  });

  describe('_roll', function () {
    it('returns a number that is between 0 and provided value', function(){
      expect(firstRoll._roll()).toBeGreaterThan(-1);
      expect(firstRoll._roll()).toBeLessThan(11);
      expect(secondRoll._roll()).toBeGreaterThan(-1);
      expect(secondRoll._roll()).toBeLessThan(6);
    });
  });
});
