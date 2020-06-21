'use strict'

describe('Bowl', function() {

  let bowl;

  beforeEach(function() {
    bowl = new Bowl();
  });

  it('should have a score of zero to begin', function() {
    expect(bowl.totalscore()).toEqual(0);
  });

  it('should expect a gutter game to equal zero', function() {
    expect(bowl.totalscore()).toEqual(0);
  });

});
