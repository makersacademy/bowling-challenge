'use strict';

describe('Bowl', function() {
  var bowl;

  beforeEach(function() {
    bowl = new Bowl();
  });

  it('random bowling hits', function() {
    bowl.roll();
    expect(bowl.getPins()).toBeGreaterThan(-1);
    expect(bowl.getPins()).toBeLessThan(11);
  });
  
});
