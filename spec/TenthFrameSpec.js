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
});
