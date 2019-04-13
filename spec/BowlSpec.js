'use strict';

describe('Bowl', function() {

  var bowl;
  // similar to an instance variable initialization.

  beforeEach(function() {
    bowl = new Bowl(0,0,0,0);
    // creates a new object before each test.
  });

  it('The new bowl has a Score which starts at 0', function() {
    expect(bowl.score).toEqual(0);
  });

  it('The new bowl has a Roll1 which starts at 0', function() {
    expect(bowl.roll1).toEqual(0);
  });

  it('The new bowl has a Roll2 which starts at 0', function() {
    expect(bowl.roll2).toEqual(0);
  });

  it('The new bowl has a Frame which starts at 0', function() {
    expect(bowl.frame).toEqual(0);
  });

  it('Adds 1 to the frame counter', function() {
    bowl.add(0,0)
    expect(bowl.frame).toEqual(1);
  });

  it('Adds the rolls to the score counter', function() {
    bowl.add(5,5)
    expect(bowl.score).toEqual(10);
  });

});
