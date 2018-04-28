describe('Frame', function(){
  let frame;

  beforeEach(function() {
    frame = new Frame();
  })
  
  describe('score', function() {
    it('returns the sum of rolls 1 and 2', function() {
      frame.rollOne = 5;
      frame.rollTwo = 4;
      expect(frame.score()).toEqual(9);
    });
  })

  describe('setRoll', function() {
     it('sets the first roll to specified number', function() {
       frame.setRoll(1, 10);
       expect(frame.rollOne).toEqual(10);
     });
  })
})