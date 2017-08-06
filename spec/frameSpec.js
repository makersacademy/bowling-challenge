'use strict';

describe ('Frame', function() {
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  describe('Should allow rolls and return the number of pins knocked', function() {
    it('Receives single roll and returns correct number of pins knocked', function(){
      var pins = Math.floor(Math.random() * 11);
      frame.roll(pins);
      expect(frame.getPinsKnocked()).toEqual(pins);
    });

    it('Receives two rolls and returns correct number of pins knocked', function(){
      var pins1 = Math.floor(Math.random() * 10);
      frame.roll(pins1);
      var pins2 = Math.floor(Math.random() * 11 - pins1);
      frame.roll(pins2);
      expect(frame.getPinsKnocked()).toEqual(pins1 + pins2);
    });
  });

  describe('Should handle completion', function(){
    it('Not complete at the beginning', function(){
      expect(frame.isComplete()).toEqual(false);
    });

    it('Not complete after a non-strike roll', function(){
      var pins = Math.floor(Math.random() * 10);
      frame.roll(pins);
      expect(frame.isComplete()).toEqual(false);
    });

    it('Complete after two rolls', function(){
      frame.roll(3);
      frame.roll(1);
      expect(frame.isComplete()).toEqual(true);
    });

    it('Complete after strike', function(){
      frame.roll(10);
      expect(frame.isComplete()).toEqual(true);
    });
  });
});
