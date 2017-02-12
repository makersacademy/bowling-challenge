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
});
