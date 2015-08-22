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
  });

  describe('Methods include', function() {
    var roll, numberofPinsHit, fetchedNumber;

    beforeEach(function() {
      roll = {
        setNumber: function(value) {
          numberOfPinsHit = value
        },
        firstRound: function() {
          return numerofPinsHit;
        }
      };

      spyOn(roll, "firstRound").and.returnValue(6);

      roll.setNumber(6);
      fetchedNumber = roll.firstRound();
    });

    it('tracks that the spy was called', function() {
      expect(roll.firstRound).toHaveBeenCalled();
    });

    // it('first round', function() {
    //   expect(roll.firstRound()).toEqual(6)
    // });
  });


});