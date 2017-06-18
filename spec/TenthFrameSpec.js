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
    })
  });
});
