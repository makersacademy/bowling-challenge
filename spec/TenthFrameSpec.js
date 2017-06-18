'use strict';

describe('TenthFrame', function() {
  var tenthframe;

  beforeEach(function() {
    tenthframe = new TenthFrame();
  });

  describe('bowls', function() {

    it('Starts out as an array with three null objects', function() {
      expect(tenthframe._bowls).toEqual([null, null, null]);
    });
  });

  describe('bowl', function() {

    it('Updates the first bowl', function() {
      tenthframe.bowl(5);
      expect(tenthframe._bowls).toEqual([5, null, null]);
    });

    it('Updates the second bowl', function() {
      for(var i = 0; i < 2; i++) { tenthframe.bowl(5) };
      expect(tenthframe._bowls).toEqual([5, 5, null]);
    });

    it('Throws an error if trying to bowl a third time without knocking down all pins', function() {
      for(var i = 0; i < 2; i++) {tenthframe.bowl(4) };
      expect(function() { tenthframe.bowl(2) }).toThrow(new Error('Cannot bowl - this frame is complete'));
    });
  });

  describe('isComplete', function() {

    it('Knows the frame is complete after two bowls totalling less than 10', function() {
      for(var i = 0; i < 2; i++) {tenthframe.bowl(4) };
      expect(tenthframe.isComplete()).toEqual(true);
    });

    it('Leaves the frame open after scoring a spare with the first two bowls', function (){
      for(var i = 0; i < 2; i++) { tenthframe.bowl(5) };
      expect(tenthframe.isComplete()).toEqual(false);
    });

    it('Leaves the frame open after scoring two strikes with the first two bowls', function() {
      for(var i = 0; i < 2; i++) { tenthframe.bowl(10) };
      expect(tenthframe.isComplete()).toEqual(false);
    });

    it('Knows the frame is complete after three bowls', function() {
      for(var i = 0; i < 3; i++) { tenthframe.bowl(5) };
      expect(tenthframe.isComplete()).toEqual(true);
    });

    it('Knows the frame is complete after three strikes', function() {
      for(var i = 0; i < 3; i++) { tenthframe.bowl(5) };
      expect(tenthframe.isComplete()).toEqual(true);
    });
  });
});
