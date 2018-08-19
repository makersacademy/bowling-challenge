describe('FrameTen', function() {

  var finalRound;
  beforeEach(function() {
    finalRound = new FrameTen(1)
  });

  describe('Basic structure:', function() {

    it('has ten pins', function() {
      expect(finalRound.pins()).toBe(10)
    });
  
    it('ups points and downs pins with rolls', function() {
      spyOn(finalRound, 'hit').and.returnValue(4);
      finalRound.roll()
      expect(finalRound.points()).toBe(4)
      expect(finalRound.pins()).toBe(6)
    });
  
    it('has different rules to the other 9 frames', function() {
      expect(finalRound.superPlay()).toBeFalsy()
    });  
  });

  describe('Spare:', function() {

    it('has only one roll', function() {
      finalRound.roll()
      expect(finalRound.done()).toBe(true)
    });


    it('awards bonus points', function() {
      spyOn(finalRound, 'hit').and.returnValue(4);
      finalRound.roll()
      expect(finalRound.spare()).toBe(4)
    });
  });

  describe('Strike:', function() {

    var finalRound;
    beforeEach(function() {
      finalRound = new FrameTen(2)
    });

    it('has 2 rolls', function() {
      finalRound.roll()
      expect(finalRound.done()).toBe(false)
      finalRound.roll()
      expect(finalRound.done()).toBe(true)
    });

    it('awards bonus points', function() {
      spyOn(finalRound, 'hit').and.returnValue(10);
      finalRound.roll()
      finalRound.roll()
      expect(finalRound.strike()).toBe(20)
    });

    it('sets up pins after each strike', function() {
      spyOn(finalRound, 'hit').and.returnValue(10);
      expect(finalRound.pins()).toBe(10)
    });
  });
});
