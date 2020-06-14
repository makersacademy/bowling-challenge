'use strict'

describe('Bowl', function() {

  let bowl;

  beforeEach(function() {
    bowl = new Bowl();
  });

  it('is true', function() {
    expect(bowl.cool()).toEqual(true);
  });

});
