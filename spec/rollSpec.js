describe('Roll', function() {
  var roll;

  beforeEach(function() {
    roll = new Roll();
  });

  describe('each roll should initialize with', function() {
    it('potential number of hits of each roll', function() {
      expect(roll.potentialHits).toEqual([0,1,2,3,4,5,6,7,8,9,10])
    });
  });

});