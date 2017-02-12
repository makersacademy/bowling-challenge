describe('Frame', function() {

  beforeEach(function(){
    frame = new Frame();
  });

  it('is initialized with an empty rolls array', function(){
    expect(frame.getRolls()).toEqual([])
  });

  describe('#addRolls', function(){
    it('adds each roll to the array', function(){
      frame.addRolls(5);
      expect(frame.sumRolls()).toEqual(5);
    })

    it('accepts two rolls and calculates the sum score of them', function() {
     frame.addRolls(3);
     frame.addRolls(2);
     expect(frame.sumRolls()).toEqual(5);
   });
  });

  describe("Gutter game", function() {
    it('should return 0', function() {
      frame.addRolls(0)
      frame.addRolls(0)
      expect(frame.sumRolls()).toEqual(0);
    });
  });

  describe("Strike", function() {

    it('evaluates to true when first roll score is 10'), function() {
      frame.addRolls(10);
      expect(frame.isStrike()).toBe(true);
    });

    it('should return the correct number of points', function() {
      frame.addRolls(10);
      frame.addRolls(3);
      frame.addRolls(4);
      expect(frame.sumRolls()).toEqual(24);
    });
  });

  describe("Spare", function() {
    it('evaluates to true when the sume of both rolls is 10'), function() {
      frame.addRolls(5);
      frame.addRolls(5);
      expect(frame.isSpare()).toBe(true);
    });

    it('should return the correct number of points', function() {
      frame.addRolls(5);
      frame.addRolls(5);
      frame.addRolls(3);
      expect(frame.sumRolls()).toEqual(16);
    });
  });
});
