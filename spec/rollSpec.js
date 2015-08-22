describe('Roll', function() {
  var roll;

  beforeEach(function() {
    roll = new Roll();
  });

  describe('Intialized properties has', function() {
    it('potential number of hits', function() {
      expect(roll.potentialHits).toEqual([0,1,2,3,4,5,6,7,8,9,10]);
    });

    it('a roll counter', function() {
      expect(roll.counter).toEqual(0);
    });

    it('measures first roll score', function() {
      expect(roll.firstRoundScore).toEqual(0);
    });
  });



});