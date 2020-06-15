'use strict'

describe('Bowl', function() {

  let bowl;

  beforeEach(function() {
    bowl = new Bowl();
  });

  it('should have a score of zero to begin', function() {
    expect(bowl.totalscore()).toEqual(0);
  });

});
