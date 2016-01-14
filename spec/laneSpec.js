describe('Lane', function() {
  var lane;

  beforeEach(function() {
    lane = new Lane();
  });

  describe('#initialize', function() {
    it('set a specific number of pins', function() {
      lane = new Lane(3);
      expect(lane.pins).toEqual(3);
    });
    it('set a default number of pins if no argument is passed', function() {
      expect(lane.pins).toEqual(lane.defaults.pins);
    });
    it('set pins up to pins', function() {
      expect(lane.pinsUp).toEqual(lane.pins);
    });
  });

  describe('#knockPins', function() {
    it('returns the amount of knocked pins', function() {
      expect(lane.knockPins(1)).toEqual(1);
    });
    it('returns a random amount of knocked pins if no arg is passed',
      function() {
        spyOn(Math, 'random').and.returnValue(0.35);
        var knockedPins = Math.floor(0.35 * (lane.pinsUp + 1));
        expect(lane.knockPins()).toEqual(knockedPins);
      }
    );
    it('refresh the amount of pins up after the roll', function() {
      lane.knockPins(1);
      expect(lane.pinsUp).toEqual(lane.pins - 1);
    });
    it('replace the pins if there are no more pins up', function() {
      lane.knockPins(lane.pins);
      expect(lane.pinsUp).toEqual(lane.pins);
    });
    it('throw an error if pins to knock are more than pins up', function() {
      var msg = 'Not enough pins to knock';
      lane.knockPins(lane.pins - 1);
      expect( function(){lane.knockPins(2); } ).toThrowError(msg);
    });
  });

  describe('#reset', function() {
    it('replace the pins ready for a new frame', function() {
      lane.reset();
      expect(lane.pinsUp).toEqual(lane.pins);
    });
  });

});
